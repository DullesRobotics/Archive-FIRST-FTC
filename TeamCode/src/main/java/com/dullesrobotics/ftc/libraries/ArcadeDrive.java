package com.dullesrobotics.ftc.libraries;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Gamepad;

/**
 * Created by Kenneth on 11/5/2016.
 */

public class ArcadeDrive extends Drivetrain{

    public ArcadeDrive(DcMotor FLM, DcMotor FRM, DcMotor BLM, DcMotor BRM){
        super(FLM,FRM,BLM,BRM);

    }
    public ArcadeDrive(DcMotor FLM, DcMotor FRM, DcMotor BLM, DcMotor BRM, Gamepad g){
        super(FLM,FRM,BLM,BRM,g);
    }

    @Override
    public void driveWithGamepad() {
        Gamepad gamepad = getGamepad();
        drive(-gamepad.left_stick_x,-gamepad.left_stick_y); //Don't forget the negatives

    }
    public void drive(double xPower, double yPower){
        getFLM().setPower(xPower + yPower);
        getFRM().setPower(-xPower + yPower);
        getBLM().setPower(xPower + yPower);
        getBRM().setPower(-xPower + yPower);
    }


}
