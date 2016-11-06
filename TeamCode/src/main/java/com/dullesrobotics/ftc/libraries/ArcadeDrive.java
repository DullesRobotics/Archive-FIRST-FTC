package com.dullesrobotics.ftc.libraries;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Gamepad;

/**
 * Created by Kenneth on 11/5/2016.
 */

public class ArcadeDrive extends Drivetrain{

    public ArcadeDrive(BasicRobot r){
        super(r);
    }

    @Override
    public void driveWithGamepad() {
        Gamepad gamepad = robot.getGamepad1();
        drive(-gamepad.left_stick_x,-gamepad.left_stick_y); //Don't forget the negatives

    }
    public void drive(double xPower, double yPower){
        robot.getFLM().setPower(xPower + yPower);
        robot.getFRM().setPower(-xPower + yPower);
        robot.getBLM().setPower(xPower + yPower);
        robot.getBRM().setPower(-xPower + yPower);
    }


}
