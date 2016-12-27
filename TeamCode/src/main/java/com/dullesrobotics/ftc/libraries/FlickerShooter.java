package com.dullesrobotics.ftc.libraries;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Gamepad;

/**
 * Created by USER on 12/27/2016.
 */


public class FlickerShooter {
    private DcMotor ShooterMotor;
    private Gamepad gamepad1;
    public FlickerShooter(DcMotor shooterMotor, Gamepad g1) {
        super();
        ShooterMotor = shooterMotor;
        gamepad1 = g1;
    }
    public DcMotor getShooterMotor() {
        return ShooterMotor;
    }

    public void setFLM(DcMotor shooterMotor){ this.ShooterMotor = shooterMotor;}

    public Gamepad getGamepad1(){
        return gamepad1;
    }

    public void setGamepad(Gamepad g1) {
        gamepad1 = g1;
    }

    public void setShooterMotorClockwise(){  this.ShooterMotor.setPower(-1); }

    public void setShooterMotorCounterClockwise(){  this.ShooterMotor.setPower(1); }

    public void stopShooter() { this.ShooterMotor.setPower(0);}



}
