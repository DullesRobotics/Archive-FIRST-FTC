package org.firstinspires.ftc.teamcode;

import com.dullesrobotics.ftc.libraries.ArcadeDrive;
import com.dullesrobotics.ftc.libraries.RobotWithFlickerShooter;
import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;

/**
 * Created by Kenneth on 11/4/2016.
 */
@Autonomous (name = "BasicAutonomous")
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

        RobotWithFlickerShooter robotWithFlickerShooter = new RobotWithFlickerShooter(hardwareMap.dcMotor.get("BLM"),hardwareMap.dcMotor.get("BRM"),gamepad1,hardwareMap.dcMotor.get("flickerShooter"));
        ArcadeDrive ArcDrive = new ArcadeDrive(robotWithFlickerShooter);
        robotWithFlickerShooter.setDriveTrain(ArcDrive);

        waitForStart();
        //Start Changes by Karim


        //Flick
        robotWithFlickerShooter.turnForwards();
        sleep(5000);
        robotWithFlickerShooter.stopShooter();



        //Drive Straight
        ArcDrive.drive(0,1);
        sleep(5000); //TODO
        ArcDrive.drive(0,0);

    }
}
