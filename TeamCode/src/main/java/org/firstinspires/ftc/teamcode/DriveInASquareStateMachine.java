package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.qualcomm.robotcore.util.ElapsedTime;

/**
 * Created by Kenneth on 11/4/2016.
 */

public class DriveInASquareStateMachine extends OpMode {
    DcMotor leftMotor,rightMotor;
    enum State {goingForwards, turning, finished};
    State curState = State.goingForwards;
    ElapsedTime timer;
    final double forwardTime = 5;
    final double turnTime = 1;
    int count = 1;
    @Override
    public void init() {
        leftMotor = hardwareMap.dcMotor.get("leftMotor");
        rightMotor = hardwareMap.dcMotor.get("rightMotor");
        rightMotor.setDirection(DcMotorSimple.Direction.REVERSE);
        timer = new ElapsedTime();
    }

    @Override
    public void loop() {
        double elapsedTime = timer.time();
        switch (curState){
            case goingForwards:
                leftMotor.setPower(1);
                rightMotor.setPower(1);
                if(elapsedTime>forwardTime){
                    timer.reset();
                    curState = State.turning;
                }
                break;
            case turning:
                leftMotor.setPower(0.5);
                rightMotor.setPower(-0.5);
                if(elapsedTime>turnTime){
                    timer.reset();
                    count++;
                    curState = (count <= 4) ? State.goingForwards : State.finished;
                }
                break;
            case finished:
                leftMotor.setZeroPowerBehavior(DcMotor.ZeroPowerBehavior.BRAKE);
                rightMotor.setZeroPowerBehavior(DcMotor.ZeroPowerBehavior.BRAKE);
                leftMotor.setPower(0);
                rightMotor.setPower(0);
        }
    }
}
