package com.dullesrobotics.ftc.libraries;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Gamepad;

/**
 * Created by Kenneth on 11/6/2016.
 */

public class BasicRobot {
    //Has 4 wheels
    private DcMotor FLM;
    private DcMotor FRM;
    private DcMotor BLM;
    private DcMotor BRM;
    private Gamepad gamepad1;
    private Gamepad gamepad2;
    private Drivetrain driveTrain;

    public BasicRobot(DcMotor frontLeft, DcMotor frontRight, DcMotor backLeft, DcMotor backRight, Gamepad g1){
        FLM = frontLeft;
        FRM = frontRight;
        BLM = backLeft;
        BRM = backRight;
        gamepad1 = g1;
    }

    public BasicRobot(DcMotor frontLeft, DcMotor frontRight, DcMotor backLeft, DcMotor backRight,Gamepad g1, Gamepad g2){
        FLM = frontLeft;
        FRM = frontRight;
        BLM = backLeft;
        BRM = backRight;
        gamepad1 = g1;
        gamepad2 = g2;
    }

    public BasicRobot(DcMotor backleft, DcMotor backRight,Gamepad g1) {
        BLM = backleft;
        BRM = backRight;
        gamepad1 = g1;
    }

    public BasicRobot(Gamepad g1){
        gamepad1 = g1;
    }

    public void setDriveTrain(Drivetrain driveTrain) {
        this.driveTrain = driveTrain;
    }

    public Drivetrain getDriveTrain() {
        return driveTrain;
    }
    public void driveWithGamepad(){
        driveTrain.driveWithGamepad();
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

    public Gamepad getGamepad1(){
        return gamepad1;
    }

    public Gamepad getGamepad2() {
        return gamepad2;
    }

    public void setGamepad(Gamepad g1) {
        gamepad1 = g1;
    }

    public void setGamepad2(Gamepad gamepad2) {
        this.gamepad2 = gamepad2;
    }



}
