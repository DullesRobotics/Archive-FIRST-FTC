package com.dullesrobotics.ftc.libraries;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Gamepad;

/**
 * Created by Kenneth on 11/5/2016.
 */

public abstract class Drivetrain {

    protected BasicRobot robot;

    public Drivetrain(BasicRobot r){
        robot = r;
    }

    public abstract void driveWithGamepad();

}
