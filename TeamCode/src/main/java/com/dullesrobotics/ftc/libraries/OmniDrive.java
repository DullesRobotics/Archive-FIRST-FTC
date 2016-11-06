package com.dullesrobotics.ftc.libraries;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Gamepad;

/**
 * Created by Kenneth on 11/5/2016.
 */

/*
INFO


OMNIDRIVE ---->> http://ftckey.com/build/drive-trains/

 */

public class OmniDrive extends Drivetrain {
    public OmniDrive(DcMotor frontLeft, DcMotor frontRight, DcMotor backLeft, DcMotor backRight) {
        super(frontLeft, frontRight, backLeft, backRight);
    }

    public OmniDrive(DcMotor frontLeft, DcMotor frontRight, DcMotor backLeft, DcMotor backRight, Gamepad g) {
        super(frontLeft, frontRight, backLeft, backRight, g);
    }

    @Override
    public void driveWithGamepad() {
        Gamepad g = getGamepad();
        double x = g.left_stick_x;  //X axis translation
        double y = g.left_stick_y;  //Y axis translation
        double c = g.right_stick_x; //Yaw - Rotate about Z axis

        getFLM().setPower(x+y+c);
        getFRM().setPower(-x+y-c);
        getBLM().setPower(-x+y+c);
        getBRM().setPower(x+y-c);
    }
}
