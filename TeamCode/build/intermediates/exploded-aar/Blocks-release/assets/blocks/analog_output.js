/**
 * @fileoverview FTC robot blocks related to analog output.
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// createLedDropdown
// The following are defined in vars.js:
// functionColor

// Functions

Blockly.Blocks['analogOutput_setAnalogOutputVoltage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createLedDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(createNonEditableField('setAnalogOutputVoltage'));
    this.appendValueInput('VOLTAGE')
        .appendField('voltage')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the channel output voltage.');
  }
};

Blockly.JavaScript['analogOutput_setAnalogOutputVoltage'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var voltage = Blockly.JavaScript.valueToCode(
      block, 'VOLTAGE', Blockly.JavaScript.ORDER_NONE);
  return identifier + '.setAnalogOutputVoltage(' + voltage + ');\n';
};

Blockly.Blocks['analogOutput_setAnalogOutputFrequency'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createLedDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(createNonEditableField('setAnalogOutputFrequency'));
    this.appendValueInput('FREQUENCY')
        .appendField('frequency')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the channel output frequency.');
  }
};

Blockly.JavaScript['analogOutput_setAnalogOutputFrequency'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var frequency = Blockly.JavaScript.valueToCode(
      block, 'FREQUENCY', Blockly.JavaScript.ORDER_NONE);
  return identifier + '.setAnalogOutputFrequency(' + frequency + ');\n';
};

Blockly.Blocks['analogOutput_setAnalogOutputMode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createLedDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(createNonEditableField('setAnalogOutputMode'));
    this.appendValueInput('MODE')
        .appendField('mode')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Sets the channel operating mode.');
  }
};

Blockly.JavaScript['analogOutput_setAnalogOutputMode'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var mode = Blockly.JavaScript.valueToCode(
      block, 'MODE', Blockly.JavaScript.ORDER_NONE);
  return identifier + '.setAnalogOutputMode(' + mode + ');\n';
};
