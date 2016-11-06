package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.util.Range;


@TeleOp(name = "Arcade Drive")
public class ArcadeDriveTemp extends OpMode {
    DcMotor leftMotor;
    DcMotor rightMotor;
    @Override
    public void init() {
        //leftMotor = hardwareMap.dcMotor.get("leftMotor");
        //rightMotor = hardwareMap.dcMotor.get("rightMotor");
    }

    @Override
    public void loop() {
        float rJoyX = -gamepad2.right_stick_x;
        float rJoyY = -gamepad2.right_stick_y;

        double rJoyXSquared = Math.pow(rJoyX,2);
        double rJoyYSquared = Math.pow(rJoyY,2);

        double rightOutput = rJoyYSquared + rJoyXSquared;
        double leftOutput = rJoyYSquared + rJoyXSquared;

        double leftPower = Range.clip(leftOutput,-1, 1);
        double rightPower = Range.clip(rightOutput,-1,1);

        telemetry.addData("Status","Right power: " + rightPower + " Left power: " + leftPower);
        telemetry.update();
        //System.out.println(gamepad2.right_bumper == true);

        //leftMotor.setPower(leftPower);
        //rightMotor.setPower(rightPower);
        /*IMPORTANT:
            -right_stick_y = right_trigger
            -right_stick_x = left_trigger
            -Buttons A,B,Y, and X are normal.
            -Left stick is normal.

         */
    }
}
