package com.dullesrobotics.ftc.libraries;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Gamepad;

/**
 * Created by Kenneth on 11/5/2016.
 */

public abstract class Drivetrain {

    private DcMotor FLM;
    private DcMotor FRM;
    private DcMotor BLM;
    private DcMotor BRM;
    private Gamepad gamepad;

    public Drivetrain(DcMotor frontLeft, DcMotor frontRight, DcMotor backLeft, DcMotor backRight){
        FLM = frontLeft;
        FRM = frontRight;
        BLM = backLeft;
        BRM = backRight;
    }
    public Drivetrain(DcMotor frontLeft, DcMotor frontRight, DcMotor backLeft, DcMotor backRight,Gamepad g){
        FLM = frontLeft;
        FRM = frontRight;
        BLM = backLeft;
        BRM = backRight;
        gamepad = g;
    }

    public DcMotor getBLM() {
        return BLM;
    }

    public DcMotor getBRM() {
        return BRM;
    }

    public DcMotor getFLM() {
        return FLM;
    }

    public DcMotor getFRM() {
        return FRM;
    }

    public void setFLM(DcMotor FLM) {
        this.FLM = FLM;
    }

    public void setFRM(DcMotor FRM) {
        this.FRM = FRM;
    }

    public void setBLM(DcMotor BLM) {
        this.BLM = BLM;
    }

    public void setBRM(DcMotor BRM) {
        this.BRM = BRM;
    }

    public Gamepad getGamepad(){
        return gamepad;
    }

    public void setGamepad(Gamepad gamepad) {
        this.gamepad = gamepad;
    }

    public abstract void driveWithGamepad();

}
