package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;

/**
 * Created by Kenneth on 11/3/2016.
 */
@TeleOp(name = "Tank Drive")
public class TankDrive extends OpMode {
    DcMotor leftMotor;
    DcMotor rightMotor;

    @Override
    public void init() {
        leftMotor = hardwareMap.dcMotor.get("leftMotor");
        rightMotor = hardwareMap.dcMotor.get("rightMotor");
        rightMotor.setDirection(DcMotor.Direction.REVERSE); //Reverse motor because it is facing other way
    }

    @Override
    public void loop() {
        float rJoyY = -gamepad1.right_stick_y;
        float lJoyY = -gamepad1.left_stick_y;

        float leftPower = (lJoyY > 0) ? lJoyY*lJoyY : -lJoyY*lJoyY;
        float rightPower = (rJoyY > 0) ? rJoyY*rJoyY : -rJoyY*rJoyY;

        leftMotor.setPower(leftPower);
        rightMotor.setPower(rightPower);
    }
}
