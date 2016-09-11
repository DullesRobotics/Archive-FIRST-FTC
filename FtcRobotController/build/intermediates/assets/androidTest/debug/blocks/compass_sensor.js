/**
 * @fileoverview FTC robot blocks related to compass sensor.
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// createCompassSensorDropdown
// The following are defined in vars.js:
// getPropertyColor
// functionColor

Blockly.Blocks['compassSensor_getProperty'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['Direction', 'Direction'],
        ['CalibrationFailed', 'CalibrationFailed'],
    ];
    this.setOutput(true);
    this.appendDummyInput()
        .appendField(createCompassSensorDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['Direction', 'Get the current direction, in degrees.'],
        ['CalibrationFailed', 'Check to see whether calibration failed.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
    this.setColour(getPropertyColor);
  }
};

Blockly.JavaScript['compassSensor_getProperty'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var property = block.getFieldValue('PROP');
  var code = identifier + '.get' + property + '()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// Enums

Blockly.Blocks['compassSensor_enum_compassMode'] = {
  init: function() {
    var COMPASS_MODE_CHOICES = [
        ['MEASUREMENT_MODE', 'MEASUREMENT_MODE'],
        ['CALIBRATION_MODE', 'CALIBRATION_MODE'],
    ];
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('CompassMode')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(COMPASS_MODE_CHOICES), 'COMPASS_MODE');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['MEASUREMENT_MODE', 'The compass mode for measurement.'],
        ['CALIBRATION_MODE', 'The compass mode for calibration.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('COMPASS_MODE');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
    this.setColour(getPropertyColor);
  }
};

Blockly.JavaScript['compassSensor_enum_compassMode'] = function(block) {
  var code = '"' + block.getFieldValue('COMPASS_MODE') + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Functions

Blockly.Blocks['compassSensor_setMode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createCompassSensorDropdown(), 'IDENTIFIER')
        .appendField('.setMode');
    this.appendValueInput('COMPASS_MODE')
        .appendField('compassMode')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Change to calibration or measurement mode.');
  }
};

Blockly.JavaScript['compassSensor_setMode'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var compassMode = Blockly.JavaScript.valueToCode(
      block, 'COMPASS_MODE', Blockly.JavaScript.ORDER_NONE);
  return identifier + '.setMode(' + compassMode + ');\n';
};
