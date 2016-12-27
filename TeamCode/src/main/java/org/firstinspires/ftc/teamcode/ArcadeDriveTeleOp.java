package org.firstinspires.ftc.teamcode;

import com.dullesrobotics.ftc.libraries.ArcadeDrive;
import com.dullesrobotics.ftc.libraries.BasicRobot;
import com.dullesrobotics.ftc.libraries.WheeledShooter;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

/**
 * Created by Kenneth on 11/6/2016.
 */
public class ArcadeDriveTeleOp extends OpMode {
    BasicRobot robot;
    ArcadeDrive ArcDrive;
    WheeledShooter shooter;
    private String shooterMotor1; //This is for Wheeled Shooter and Flicker Shooter
    private String shooterMotor2; //This is for Wheeled Shooter
    @Override
    public void init() {
        robot = new BasicRobot(hardwareMap.dcMotor.get("FLM"),hardwareMap.dcMotor.get("FRM"),hardwareMap.dcMotor.get("BLM"),hardwareMap.dcMotor.get("BRM"),hardwareMap.dcMotor.get(shooterMotor1),gamepad1);
        ArcDrive = new ArcadeDrive(robot);
        robot.setDriveTrain(ArcDrive);
        shooter = new WheeledShooter(hardwareMap.dcMotor.get(shooterMotor1),hardwareMap.dcMotor.get(shooterMotor2));
    }

    @Override
    public void loop() {
        robot.driveWithGamepad();
        if (robot.getGamepad1().a)  //change
            shooter.shootForward();
        else if(robot.getGamepad1().b) //change
            shooter.shootBackward();
        else if(robot.getGamepad1().x) //change
            shooter.stop();
    }
}
