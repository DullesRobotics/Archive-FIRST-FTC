package com.dullesrobotics.ftc.libraries;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Gamepad;

/**
 * Created by Kenneth on 11/5/2016.
 */

public abstract class EnhancedDrivetrain extends Drivetrain {
    public EnhancedDrivetrain(BasicRobot r) {
        super(r);
    }


    public final double mmInInch = 25.4;

    public abstract void turn(double degrees);
    public abstract void goForwards(double distance);
}
