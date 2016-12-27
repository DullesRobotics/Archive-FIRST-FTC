package com.dullesrobotics.ftc.libraries;


import com.qualcomm.robotcore.hardware.DcMotor;

/**
 * Created by kk200 on 12/27/2016.
 */

public class WheeledShooter {
    private double motorSpeed1,motorSpeed2 = 0;
    private DcMotor motor1,motor2;

    public WheeledShooter(double speed1, double speed2){
        motorSpeed1 = speed1;
        motorSpeed2 = speed2;
    }
    public void setSpeed(double speed1, double speed2){
        motorSpeed1 = speed1;
        motorSpeed2 = speed2;
    }

    public void shootForward(){ //idk if this will shoot forward or backward, depends on motor
        motor1.setPower(motorSpeed1);
        motor2.setPower(-motorSpeed2);
    }

    public void shootBackward(){ //why would you shoot backward you ask? idk. maybe if the robot is turned.
        motor1.setPower(-motorSpeed1);
        motor2.setPower(motorSpeed2);
    }

    public void stop(){
        motor1.setPower(0);
        motor2.setPower(0);
    }
}
