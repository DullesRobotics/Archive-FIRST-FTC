package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;

/**
 * Created by Kenneth on 11/4/2016.
 */

public class BasicAutonomous extends LinearOpMode {
    DcMotor leftMotor;
    DcMotor rightMotor;
    @Override
    public void runOpMode() throws InterruptedException {
        leftMotor = hardwareMap.dcMotor.get("leftMotor");
        rightMotor = hardwareMap.dcMotor.get("rightMotor");
        rightMotor.setDirection(DcMotorSimple.Direction.REVERSE);
        leftMotor.setZeroPowerBehavior(DcMotor.ZeroPowerBehavior.BRAKE);
        rightMotor.setZeroPowerBehavior(DcMotor.ZeroPowerBehavior.BRAKE);

        waitForStart();

        //Drive Straight
        leftMotor.setPower(1);
        rightMotor.setPower(1);
        sleep(1000);

        //Point turn Right
        leftMotor.setPower(0.5);
        rightMotor.setPower(-0.5);
        sleep(1000);

        //Drive Straight
        leftMotor.setPower(1);
        rightMotor.setPower(1);
        sleep(1000);

        //Point turn Right
        leftMotor.setPower(0.5);
        rightMotor.setPower(-0.5);
        sleep(1000);

        //Drive Straight
        leftMotor.setPower(1);
        rightMotor.setPower(1);
        sleep(1000);

        //Point turn Right
        leftMotor.setPower(0.5);
        rightMotor.setPower(-0.5);
        sleep(1000);

        //Drive Straight
        leftMotor.setPower(1);
        rightMotor.setPower(1);
        sleep(1000);

        //Point turn Right
        leftMotor.setPower(0.5);
        rightMotor.setPower(-0.5);
        sleep(1000);

    }
}
