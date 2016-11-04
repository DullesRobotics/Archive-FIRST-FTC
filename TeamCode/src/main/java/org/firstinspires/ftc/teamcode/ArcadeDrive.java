package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.util.Range;


@TeleOp(name = "Arcade Drive")
public class ArcadeDrive extends OpMode {
    DcMotor leftMotor;
    DcMotor rightMotor;
    @Override
    public void init() {
        leftMotor = hardwareMap.dcMotor.get("leftMotor");
        rightMotor = hardwareMap.dcMotor.get("rightMotor");
    }

    @Override
    public void loop() {
        float rJoyX = -gamepad1.right_stick_x;
        float rJoyY = -gamepad1.right_stick_y;

        double rJoyXSquared = Math.pow(rJoyX,2);
        double rJoyYSquared = Math.pow(rJoyY,2);

        double rightOutput = rJoyYSquared + rJoyXSquared;
        double leftOutput = rJoyYSquared + rJoyXSquared;

        double leftPower = Range.clip(leftOutput,-1, 1);
        double rightPower = Range.clip(rightOutput,-1,1);

        leftMotor.setPower(leftPower);
        rightMotor.setPower(rightPower);
    }
}
