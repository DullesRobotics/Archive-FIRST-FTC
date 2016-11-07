package org.firstinspires.ftc.teamcode;

import com.dullesrobotics.ftc.libraries.ArcadeDrive;
import com.dullesrobotics.ftc.libraries.BasicRobot;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

/**
 * Created by Kenneth on 11/6/2016.
 */
@TeleOp
public class ArcadeDriveTeleOp extends OpMode {
    BasicRobot robot;
    ArcadeDrive ArcDrive;
    @Override
    public void init() {
        robot = new BasicRobot(hardwareMap.dcMotor.get("FLM"),hardwareMap.dcMotor.get("FRM"),hardwareMap.dcMotor.get("BLM"),hardwareMap.dcMotor.get("BRM"),gamepad1);
        ArcDrive = new ArcadeDrive(robot);
        robot.setDriveTrain(ArcDrive);
    }

    @Override
    public void loop() {
        robot.driveWithGamepad();
    }
}
