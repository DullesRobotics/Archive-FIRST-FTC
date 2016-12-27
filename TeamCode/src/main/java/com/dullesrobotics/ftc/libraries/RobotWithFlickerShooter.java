package com.dullesrobotics.ftc.libraries;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.Gamepad;

/**
 * Created by Kenneth on 12/27/2016.
 */

public class RobotWithFlickerShooter extends BasicRobot {
    private DcMotor shooterMotor;
    public RobotWithFlickerShooter(DcMotor frontLeft, DcMotor frontRight, DcMotor backLeft, DcMotor backRight, Gamepad g1, DcMotor shooter){
        super(frontLeft,frontRight,backLeft,backRight, g1);
        shooterMotor = shooter;
    }
    public RobotWithFlickerShooter(DcMotor frontLeft, DcMotor frontRight, DcMotor backLeft, DcMotor backRight, Gamepad g1, Gamepad g2,DcMotor shooter){
        super(frontLeft,frontRight,backLeft,backRight, g1,g2);
        shooterMotor = shooter;
    }
}
