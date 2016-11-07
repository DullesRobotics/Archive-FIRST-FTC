package com.dullesrobotics.ftc.libraries;

import org.firstinspires.ftc.robotcore.external.ClassFactory;
import org.firstinspires.ftc.robotcore.external.matrices.OpenGLMatrix;
import org.firstinspires.ftc.robotcore.external.navigation.AngleUnit;
import org.firstinspires.ftc.robotcore.external.navigation.AxesOrder;
import org.firstinspires.ftc.robotcore.external.navigation.AxesReference;
import org.firstinspires.ftc.robotcore.external.navigation.Orientation;
import org.firstinspires.ftc.robotcore.external.navigation.VuforiaLocalizer;
import org.firstinspires.ftc.robotcore.external.navigation.VuforiaTrackable;
import org.firstinspires.ftc.robotcore.external.navigation.VuforiaTrackableDefaultListener;
import org.firstinspires.ftc.robotcore.external.navigation.VuforiaTrackables;

import com.qualcomm.ftcrobotcontroller.R;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Kenneth on 11/5/2016.
 */

public class VuforiaPosition {
    OpenGLMatrix lastLocation;
    VuforiaLocalizer vuforia;
    List<VuforiaTrackable> allTrackables = new ArrayList<VuforiaTrackable>();

    final float mmPerInch        = 25.4f;
    final float mmBotWidth       = 18 * mmPerInch;            // CHANGE TO MATCH OUR ROBOT
    final float mmFTCFieldWidth  = (12*12 - 2) * mmPerInch;   // the FTC field is ~11'10" center-to-center of the glass panels


    //TODO Add support for other databases of images

    public VuforiaPosition(){
        lastLocation = null;
        VuforiaLocalizer.Parameters parameters = new VuforiaLocalizer.Parameters(R.id.cameraMonitorViewId);
        parameters.vuforiaLicenseKey = "ATUnO23/////AAAAGfN3NJaVtUVwqWhgjFxyO2h0TDN/26T4WFlJOjz7YbOqBoP+h6dhU77AmHvf4tDJMMLZAu602Z1jnohtpRmTDbVkZuQ3B1Ym/r9DEKBMT3zEbYALAdIBgF/a9rNGhxXDSJF9FSPxrfYaVrfLneryTb/DMbsH06UvKFYM6sZtaDaxHS1ZBX5LDMiUEHcmbXoGXpvjD50C3DZVgOiWBIlPz4lydCE9HiEWTm7z7O929fVMJjBwAu1xL1AWHeYw0mn4Ngyi82SefCTKBdcVz/JXtmWo721sn08pZPcpfPOpeJ2YHGw0uZPF+d9AQXJ8oVItZOtZG45yDLAaPnQnxYqHtJRgSj/40KqkuRSWkLW0R03A";
        parameters.cameraDirection = VuforiaLocalizer.CameraDirection.BACK;
        this.vuforia = ClassFactory.createVuforiaLocalizer(parameters);

        VuforiaTrackables stonesAndChips = this.vuforia.loadTrackablesFromAsset("stonesAndChips");
        VuforiaTrackable redTarget = stonesAndChips.get(0); //Stones
        redTarget.setName("redTarget");
        VuforiaTrackable blueTarget = stonesAndChips.get(1);
        blueTarget.setName("blueTarget");//Chips


        allTrackables.addAll(stonesAndChips);

        //SET DEFAULT TARGET LOCATIONS
        /*
        * To place the Stones Target on the Red Audience wall:
        * - First we rotate it 90 around the field's X axis to flip it upright
        * - Then we rotate it  90 around the field's Z access to face it away from the audience.
        * - Finally, we translate it back along the X axis towards the red audience wall.
        * NOTE: Transformations are applied in reverse order  -- idk why ask some math people
        */
        OpenGLMatrix redTargetLocationOnField = OpenGLMatrix
                /* Then we translate the target off to the RED WALL. Our translation here
                is a negative translation in X.*/
                .translation(-mmFTCFieldWidth/2, 0, 0)
                .multiplied(Orientation.getRotationMatrix(
                        /* First, in the fixed (field) coordinate system, we rotate 90deg in X, then 90 in Z */
                        AxesReference.EXTRINSIC, AxesOrder.XZX,
                        AngleUnit.DEGREES, 90, 90, 0));
        redTarget.setLocation(redTargetLocationOnField);

         /*
        * To place the Stones Target on the Blue Audience wall:
        * - First we rotate it 90 around the field's X axis to flip it upright
        * - Finally, we translate it along the Y axis towards the blue audience wall.
        */
        OpenGLMatrix blueTargetLocationOnField = OpenGLMatrix
                /* Then we translate the target off to the Blue Audience wall.
                Our translation here is a positive translation in Y.*/
                .translation(0, mmFTCFieldWidth/2, 0)
                .multiplied(Orientation.getRotationMatrix(
                        /* First, in the fixed (field) coordinate system, we rotate 90deg in X */
                        AxesReference.EXTRINSIC, AxesOrder.XZX,
                        AngleUnit.DEGREES, 90, 0, 0));
        blueTarget.setLocation(blueTargetLocationOnField);

        /**
         * Create a transformation matrix describing where the phone is on the robot. Here, we
         * put the phone on the right hand side of the robot with the screen facing in (see our
         * choice of BACK camera above) and in landscape mode. Starting from alignment between the
         * robot's and phone's axes, this is a rotation of -90deg along the Y axis.
         *
         * When determining whether a rotation is positive or negative, consider yourself as looking
         * down the (positive) axis of rotation from the positive towards the origin. Positive rotations
         * are then CCW, and negative rotations CW. An example: consider looking down the positive Z
         * axis towards the origin. A positive rotation about Z (ie: a rotation parallel to the the X-Y
         * plane) is then CCW, as one would normally expect from the usual classic 2D geometry.
         */
        OpenGLMatrix phoneLocationOnRobot = OpenGLMatrix
                .translation(mmBotWidth/2,0,0)
                .multiplied(Orientation.getRotationMatrix(
                        AxesReference.EXTRINSIC, AxesOrder.YZY,
                        AngleUnit.DEGREES, -90, 0, 0));

        //Set up each listener for each trackable

        ((VuforiaTrackableDefaultListener)redTarget.getListener()).setPhoneInformation(phoneLocationOnRobot, parameters.cameraDirection);
        ((VuforiaTrackableDefaultListener)blueTarget.getListener()).setPhoneInformation(phoneLocationOnRobot, parameters.cameraDirection);
    }//END CONSTRUCTOR

    public void updateLastLocationFromRedTarget(){
        for(VuforiaTrackable target : allTrackables) {
            OpenGLMatrix robotLocationTransform = ((VuforiaTrackableDefaultListener) target.getListener()).getUpdatedRobotLocation();
            if (robotLocationTransform != null) {
                lastLocation = robotLocationTransform;
            }
        }
    }

    public String getLastLocationAsString(){
        return format(lastLocation);
    }

    public String format(OpenGLMatrix transformationMatrix) {
        return transformationMatrix.formatAsTransform();
    }
}
