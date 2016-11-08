package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.vuforia.HINT;
import com.vuforia.Vuforia;

import org.firstinspires.ftc.robotcore.external.ClassFactory;
import org.firstinspires.ftc.robotcore.external.matrices.OpenGLMatrix;
import org.firstinspires.ftc.robotcore.external.matrices.VectorF;
import org.firstinspires.ftc.robotcore.external.navigation.VuforiaLocalizer;
import org.firstinspires.ftc.robotcore.external.navigation.VuforiaTrackable;
import org.firstinspires.ftc.robotcore.external.navigation.VuforiaTrackableDefaultListener;
import org.firstinspires.ftc.robotcore.external.navigation.VuforiaTrackables;

/**
 * Created by kk200 on 11/5/2016.
 */

@TeleOp(name = "Vuforia Test")
public class VuforiaOp extends LinearOpMode {
    @Override
    public void runOpMode() throws InterruptedException {
        VuforiaLocalizer.Parameters params = new VuforiaLocalizer.Parameters(R.id.cameraMonitorViewId);
        params.cameraDirection = VuforiaLocalizer.CameraDirection.BACK;
        params.vuforiaLicenseKey = "ATUnO23/////AAAAGfN3NJaVtUVwqWhgjFxyO2h0TDN/26T4WFlJOjz7YbOqBoP+h6dhU77AmHvf4tDJMMLZAu602Z1jnohtpRmTDbVkZuQ3B1Ym/r9DEKBMT3zEbYALAdIBgF/a9rNGhxXDSJF9FSPxrfYaVrfLneryTb/DMbsH06UvKFYM6sZtaDaxHS1ZBX5LDMiUEHcmbXoGXpvjD50C3DZVgOiWBIlPz4lydCE9HiEWTm7z7O929fVMJjBwAu1xL1AWHeYw0mn4Ngyi82SefCTKBdcVz/JXtmWo721sn08pZPcpfPOpeJ2YHGw0uZPF+d9AQXJ8oVItZOtZG45yDLAaPnQnxYqHtJRgSj/40KqkuRSWkLW0R03A";
        params.cameraMonitorFeedback = VuforiaLocalizer.Parameters.CameraMonitorFeedback.AXES;

        VuforiaLocalizer vuforia = ClassFactory.createVuforiaLocalizer(params);
        Vuforia.setHint(HINT.HINT_MAX_SIMULTANEOUS_IMAGE_TARGETS,4); //Kinda self explanatory

        VuforiaTrackables beacons = vuforia.loadTrackablesFromAsset("FTC_2016-17");
        beacons.get(0).setName("Wheels");
        beacons.get(1).setName("Tools");
        beacons.get(2).setName("Legos");
        beacons.get(3).setName("Gears");

        waitForStart();

        beacons.activate();

        while(opModeIsActive()){
            for (VuforiaTrackable b : beacons){
                OpenGLMatrix pose = ((VuforiaTrackableDefaultListener) b.getListener()).getPose();
                if (pose != null){
                    VectorF translation = pose.getTranslation();
                    telemetry.addData(b.getName() + " Translation",translation);
                }
            }
            telemetry.update();
            idle();
        }
    }
}
