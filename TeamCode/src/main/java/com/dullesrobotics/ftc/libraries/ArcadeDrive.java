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
        drive(-gamepad.right_stick_x,-gamepad.right_stick_y); //Don't forget the negatives

    }
    public void drive(double xPower, double yPower) {
        if(robot.getFLM() != null) robot.getFLM().setPower(xPower - yPower);
        if(robot.getFRM() != null) robot.getFRM().setPower(xPower + yPower);
        if (robot.getFLM() != null) robot.getBLM().setPower(xPower - yPower);
        if (robot.getBLM() != null) robot.getBRM().setPower(xPower + yPower);
    }


}
