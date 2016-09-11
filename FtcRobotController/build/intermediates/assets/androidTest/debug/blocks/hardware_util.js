/**
 * @fileoverview Hardware utilities.
 * @author lizlooney@google.com (Liz Looney)
 */

/**
 * Fetches the JavaScript code related to the hardware in the active configuration and calls the
 * callback.
 */
function fetchJavaScriptForHardware(callback) {
  if (typeof blocksIO !== 'undefined') {
    // FtcBlocks.html is within the WebView component within the Android app.
    fetchJavaScriptForHardwareViaBlocksIO(callback);
  } else if (window.location.protocol === 'http:') {
    // FtcBlocks.html is in a browser, loaded as an http:// URL.
    fetchJavaScriptForHardwareViaHttp(callback);
  } else if (window.location.protocol === 'file:') {
    // FtcBlocks.html is in a browser, loaded as a file:// URL.
    fetchJavaScriptForHardwareViaFile(callback);
  }
}

//..........................................................................
// Code used when FtcBlocks.html is within the WebView component within the
// Android app.

function fetchJavaScriptForHardwareViaBlocksIO(callback) {
  var jsHardware = blocksIO.fetchJavaScriptForHardware();
  if (jsHardware) {
    callback(jsHardware, '');
  } else {
    callback(null, 'Fetch JavaScript for Hardware failed.');
  }
}

//..........................................................................
// Code used when FtcBlocks.html is in a browser, loaded as a http:// URL.

function fetchJavaScriptForHardwareViaHttp(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/hardware', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var jsHardware = xhr.responseText;
        callback(jsHardware, '');
      } else {
        // TODO(lizlooney): Use specific error messages for various xhr.status values.
        callback(null, 'Fetch JavaScript for Hardware failed. Error code ' + xhr.status + '. ' + xhr.statusText);
      }
    }
  };
  xhr.send();
}

//..........................................................................
// Code used when FtcBlocks.html is in a browser, loaded as a file:// URL.

function fetchJavaScriptForHardwareViaFile(callback) {
  var jsHardware =
      "var linearOpModeIdentifier = 'linearOpMode';\n\n" +
      "var telemetryIdentifier = 'telemetry';\n\n" +
      "function createGamepadDropdown() {\n" +
      "  var CHOICES = [\n" +
      "      ['gamepad1', 'gamepad1'],\n" +
      "      ['gamepad2', 'gamepad2'],\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "var colorIdentifier = 'colorAccess';\n\n" +
      "var elapsedTimeIdentifier = 'elapsedTimeAccess';\n\n" +
      "var elapsedTimeDefaultVarName = 'timer';\n\n" +
      "function createAccelerationSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createAnalogInputDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createAnalogOutputDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createColorSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createCompassSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createCRServoDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createDcMotorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "      ['left_drive', 'left_drive'],\n" +
      "      ['right_drive', 'right_drive'],\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createGyroSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createIrSeekerSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createLedDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createLightSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createOpticalDistanceSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "      ['sensor_EOPD', 'sensor_EOPD'],\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createServoDropdown() {\n" +
      "  var CHOICES = [\n" +
      "      ['arm', 'arm'],\n" +
      "      ['claw', 'claw'],\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createServoControllerDropdown() {\n" +
      "  var CHOICES = [\n" +
      "      ['servo_controller', 'servo_controller'],\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createTouchSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "      ['touch_sensor', 'touch_sensor'],\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createUltrasonicSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function createVoltageSensorDropdown() {\n" +
      "  var CHOICES = [\n" +
      "  ];\n" +
      "  return new Blockly.FieldDropdown(CHOICES);\n" +
      "}\n\n" +
      "function addReservedWordsForHardware() {\n" +
      "  Blockly.JavaScript.addReservedWords('left_drive');\n" +
      "  Blockly.JavaScript.addReservedWords('right_drive');\n" +
      "  Blockly.JavaScript.addReservedWords('arm');\n" +
      "  Blockly.JavaScript.addReservedWords('claw');\n" +
      "  Blockly.JavaScript.addReservedWords('servo_controller');\n" +
      "  Blockly.JavaScript.addReservedWords('touch_sensor');\n" +
      "  Blockly.JavaScript.addReservedWords('sensor_EOPD');\n" +
      "  Blockly.JavaScript.addReservedWords('blocksOpMode');\n" +
      "  Blockly.JavaScript.addReservedWords('colorAccess');\n" +
      "  Blockly.JavaScript.addReservedWords('elapsedTimeAccess');\n" +
      "  Blockly.JavaScript.addReservedWords('gamepad1');\n" +
      "  Blockly.JavaScript.addReservedWords('gamepad2');\n" +
      "  Blockly.JavaScript.addReservedWords('linearOpMode');\n" +
      "  Blockly.JavaScript.addReservedWords('telemetry');\n" +
      "}\n";
  callback(jsHardware, '');
}
