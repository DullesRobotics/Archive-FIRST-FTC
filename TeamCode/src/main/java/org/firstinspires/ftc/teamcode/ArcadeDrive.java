package org.firstinspires.ftc.teamcode;

import com.dullesrobotics.ftc.libraries.BasicRobot;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;

/**
 * Created by Kenneth on 11/6/2016.
 */

public class ArcadeDrive extends OpMode {
    BasicRobot robot;
    @Override
    public void init() {
        robot = new BasicRobot(hardwareMap.dcMotor.get("FLM"),hardwareMap.dcMotor.get("FRM"),hardwareMap.dcMotor.get("BLM"),hardwareMap.dcMotor.get("BRM"),gamepad1);
    }

    @Override
    public void loop() {

    }
}
