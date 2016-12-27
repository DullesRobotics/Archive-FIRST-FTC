/*package org.firstinspires.ftc.teamcode;

import android.app.PendingIntent;
import android.content.Intent;
import android.hardware.usb.UsbDevice;
import android.hardware.usb.UsbDeviceConnection;
import android.hardware.usb.UsbManager;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;

import com.felhr.usbserial.UsbSerialDevice;
import com.felhr.usbserial.UsbSerialInterface;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

import org.firstinspires.ftc.robotcontroller.internal.FtcRobotControllerActivity;

import java.io.UnsupportedEncodingException;
import java.util.*;


/**
 * Created by kk200 on 11/12/2016.
 */
/*
@TeleOp(name = "Arduino")
public class Arduino extends LinearOpMode {
    public final String ACTION_USB_PERMISSION = "com.hariharan.arduinousb.USB_PERMISSION";
    UsbManager usbManager;
    UsbDevice device;
    UsbDeviceConnection connection;
    //FtcRobotControllerActivity activity = new FtcRobotControllerActivity();

    public UsbSerialInterface.UsbReadCallback mCallback = new UsbSerialInterface.UsbReadCallback() {
        @Override
        public void onReceivedData(byte[] arg0){
            String data = null;
            try{
                data = new String(arg0,"UTF-8");
                data.concat("/n");
                telemetry.addData("Data Recieved",data);
                telemetry.update();
            } catch (UnsupportedEncodingException e){
                e.printStackTrace();
            }
        }
    };

    @Override
    public void runOpMode() throws InterruptedException {
        usbManager = (UsbManager) getSystemService(this.USB_SERVICE);
        connection = usbManager.openDevice(device);
        HashMap<String, UsbDevice> usbDevices = usbManager.getDeviceList();
        boolean keep = true;
        for (Map.Entry<String, UsbDevice> entry : usbDevices.entrySet()) {
            device = entry.getValue();
            int deviceVID = device.getVendorId();
            if (deviceVID == 0x2341)//Arduino Vendor ID
            {
                //PendingIntent pi = PendingIntent.getBroadcast(this, 0, new Intent(ACTION_USB_PERMISSION), 0);
                //usbManager.requestPermission(device, pi);
                keep = false;
            } else {
                connection = null;
                device = null;
            }
            if (!keep)
                break;
        }
       // activity.init(usbManager,ACTION_USB_PERMISSION,device);
        UsbSerialDevice serial = UsbSerialDevice.createUsbSerialDevice(device, connection);
        serial.open();
        serial.setBaudRate(9600);
        serial.setDataBits(UsbSerialInterface.DATA_BITS_8);
        serial.setStopBits(UsbSerialInterface.STOP_BITS_1);
        serial.setParity(UsbSerialInterface.PARITY_NONE);

        waitForStart();

        boolean sent = false;
        while(opModeIsActive()){
            /*if (!sent) {
                serial.write("Hi".getBytes());
                serial.read(mCallback);
                telemetry.addData("Data", "Hi");
                sent = true;
            }*/
                /*telemetry.addData("Status","Waiting.");
                telemetry.update();
            idle();
        }
    }
}
*/