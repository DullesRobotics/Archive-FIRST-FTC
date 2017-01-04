package org.firstinspires.ftc.teamcode;

import com.dullesrobotics.ftc.libraries.ArcadeDrive;
import com.dullesrobotics.ftc.libraries.RobotWithFlickerShooter;
import com.dullesrobotics.ftc.libraries.RobotWithWheeledShooter;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

/**
 * Created by Kenneth on 11/6/2016.
 */
@TeleOp(name = "ArcadeDriveTeleOp")
public class ArcadeDriveTeleOp extends OpMode {
    //private RobotWithWheeledShooter robotWithWheeledShooter;
    private RobotWithFlickerShooter robotWithFlickerShooter;
    private ArcadeDrive ArcDrive;
    private String shooterMotor1; //This is for Wheeled Shooter and Flicker Shooter
    private String shooterMotor2; //This is for Wheeled Shooter

    @Override
    public void init() {
        /*For Wheeled Shooter
        //robotWithWheeledShooter = new RobotWithWheeledShooter(hardwareMap.dcMotor.get("FLM"),hardwareMap.dcMotor.get("FRM"),hardwareMap.dcMotor.get("BLM"),hardwareMap.dcMotor.get("BRM"),gamepad1,hardwareMap.dcMotor.get("leftShooter"),hardwareMap.dcMotor.get("rightShooter"));
        ArcDrive = new ArcadeDrive(robotWithWheeledShooter);
        robotWithWheeledShooter.setDriveTrain(ArcDrive);
        */

        robotWithFlickerShooter = new RobotWithFlickerShooter(hardwareMap.dcMotor.get("BLM"),hardwareMap.dcMotor.get("BRM"),gamepad1,hardwareMap.dcMotor.get("flickerShooter"));
        ArcDrive = new ArcadeDrive(robotWithFlickerShooter);
        robotWithFlickerShooter.setDriveTrain(ArcDrive);
    }

    @Override
    public void loop() {

        /*          UNCOMMENT FOR WHEELED SHOOTER
        robotWithWheeledShooter.driveWithGamepad();
        if (robotWithWheeledShooter.getGamepad1().a)  //change
            robotWithWheeledShooter.shootForward();
        else if(robotWithWheeledShooter.getGamepad1().b) //change
            robotWithWheeledShooter.shootBackward();
        else if(robotWithWheeledShooter.getGamepad1().x) //change
            robotWithWheeledShooter.stopShooter();
            */
        robotWithFlickerShooter.driveWithGamepad();
        if (robotWithFlickerShooter.getGamepad1().a)  //change
        {
            robotWithFlickerShooter.turnForwards();
        }
        else if(robotWithFlickerShooter.getGamepad1().b) //change
        {
            robotWithFlickerShooter.turnBackwards();
        }
        else {
            robotWithFlickerShooter.stopShooter();
        }
    }
}
