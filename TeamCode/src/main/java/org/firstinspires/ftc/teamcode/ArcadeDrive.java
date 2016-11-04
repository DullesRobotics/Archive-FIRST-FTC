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

        float leftPower = Range.clip(rJoyY + rJoyX,-1, 1);
        float rightPower = Range.clip(rJoyY-rJoyX,-1,1);

        leftMotor.setPower(leftPower);
        rightMotor.setPower(rightPower);
    }
}
