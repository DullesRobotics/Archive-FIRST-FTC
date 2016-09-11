/**
 * @fileoverview FTC robot blocks related to gyro sensor.
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// createGyroSensorDropdown
// The following are defined in vars.js:
// functionColor
// getPropertyColor
// setPropertyColor

Blockly.Blocks['gyroSensor_setProperty'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['HeadingMode', 'HeadingMode'],
        ['I2cAddress7Bit', 'I2cAddress7Bit'],
        ['I2cAddress8Bit', 'I2cAddress8Bit'],
    ];
    this.appendValueInput('VALUE')
        .appendField('set')
        .appendField(createGyroSensorDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP')
        .appendField('to');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['HeadingMode', 'The heading mode. ' +
            'Valid values are HeadingMode_CARTESIAN or HeadingMode_CARDINAL. ' +
            'Not all gyro sensors support this feature.'],
        ['I2cAddress7Bit', 'The 7 bit I2C address of the gyro sensor. ' +
            'Not all gyro sensors support this feature.'],
        ['I2cAddress8Bit', 'The 8 bit I2C address of the gyro sensor. ' +
            'Not all gyro sensors support this feature.'],
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
    this.setColour(setPropertyColor);
  }
};

Blockly.JavaScript['gyroSensor_setProperty'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var property = block.getFieldValue('PROP');
  var value = Blockly.JavaScript.valueToCode(
      block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
  return identifier + '.set' + property + '(' + value + ');\n';
};

Blockly.Blocks['gyroSensor_getProperty'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['Heading', 'Heading'],
        ['HeadingMode', 'HeadingMode'],
        ['I2cAddress7Bit', 'I2cAddress7Bit'],
        ['I2cAddress8Bit', 'I2cAddress8Bit'],
        ['RawX', 'RawX'],
        ['RawY', 'RawY'],
        ['RawZ', 'RawZ'],
        ['RotationFraction', 'RotationFraction'],
    ];
    this.setOutput(true);
    this.appendDummyInput()
        .appendField(createGyroSensorDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['Heading', 'The integrated Z axis as a cartesian or cardinal heading, ' +
            'as a numeric value between 0 and 360. ' +
            'Not all gyro sensors support this feature.'],
        ['HeadingMode', 'The heading mode. ' +
            'Value is either HeadingMode_CARTESIAN or HeadingMode_CARDINAL. ' +
            'Not all gyro sensors support this feature.'],
        ['I2cAddress7Bit', 'The 7 bit I2C address of the gyro sensor. ' +
            'Not all gyro sensors support this feature.'],
        ['I2cAddress8Bit', 'The 8 bit I2C address of the gyro sensor. ' +
            'Not all gyro sensors support this feature.'],
        ['RawX', 'The gyro sensor\'s raw X value. ' +
            'Not all gyro sensors support this feature.'],
        ['RawY', 'The gyro sensor\'s raw Y value. ' +
            'Not all gyro sensors support this feature.'],
        ['RawZ', 'The gyro sensor\'s raw Z value. ' +
            'Not all gyro sensors support this feature.'],
        ['RotationFraction', 'The current fractional rotation of this gyro. ' +
            'The value is between 0.0 and 1.0. ' +
            'Not all gyro sensors support this feature'],
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

Blockly.JavaScript['gyroSensor_getProperty'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var property = block.getFieldValue('PROP');
  var code = identifier + '.get' + property + '()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// Enums

Blockly.Blocks['gyroSensor_enum_headingMode'] = {
  init: function() {
    var HEADING_MODE_CHOICES = [
        ['HEADING_CARTESIAN', 'HEADING_CARTESIAN'],
        ['HEADING_CARDINAL', 'HEADING_CARDINAL'],
    ];
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('HeadingMode')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(HEADING_MODE_CHOICES), 'HEADING_MODE');
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['HEADING_CARTESIAN', 'The HeadingMode value HEADING_CARTESIAN.'],
        ['HEADING_CARDINAL', 'The HeadingMode value HEADING_CARDINAL.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('HEADING_MODE');
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

Blockly.JavaScript['gyroSensor_enum_headingMode'] = function(block) {
  var code = '"' + block.getFieldValue('HEADING_MODE') + '"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// TODO(lizlooney): Should we provide constants for MIN_I2C_ADDRESS_7_BIT, MAX_I2C_ADDRESS_7_BIT,
// MIN_I2C_ADDRESS_8_BIT, and MAX_I2C_ADDRESS_8_BIT? If so, where do they belong?

// Functions

Blockly.Blocks['gyroSensor_calibrate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createGyroSensorDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(createNonEditableField('calibrate'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Calibrate the gyro. ' +
      'Not all gyro sensors support this feature. ' +
      'For the Modern Robotics device this will reset the Z axis heading.');
  }
};

Blockly.JavaScript['gyroSensor_calibrate'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  return identifier + '.calibrate();\n';
};

Blockly.Blocks['gyroSensor_isCalibrating'] = {
  init: function() {
    this.setOutput(true, 'Boolean');
    this.appendDummyInput()
        .appendField('call')
        .appendField(createGyroSensorDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(createNonEditableField('isCalibrating'));
    this.setTooltip('Is the gyro performing a calibration operation? ' +
        'Not all gyro sensors support this feature.');
    this.setColour(functionColor);
  }
};

Blockly.JavaScript['gyroSensor_isCalibrating'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var code = identifier + '.isCalibrating()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['gyroSensor_resetZAxisIntegrator'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createGyroSensorDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(createNonEditableField('resetZAxisIntegrator'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Set the integrated Z axis to zero.. ' +
        'Not all gyro sensors support this feature.');
  }
};

Blockly.JavaScript['gyroSensor_resetZAxisIntegrator'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  return identifier + '.resetZAxisIntegrator();\n';
};
