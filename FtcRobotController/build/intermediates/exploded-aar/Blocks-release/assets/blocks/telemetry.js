/**
 * @fileoverview FTC robot blocks related to telemetry.
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// telemetryIdentifier
// The following are defined in vars.js:
// functionColor

// Functions

Blockly.Blocks['telemetry_addNumericData'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('telemetry'))
        .appendField('.')
        .appendField(createNonEditableField('addData'));
    this.appendValueInput('KEY')
        .appendField('key')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('NUMBER')
        .appendField('number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Add a numeric data point.');
  }
};

Blockly.JavaScript['telemetry_addNumericData'] = function(block) {
  var key = Blockly.JavaScript.valueToCode(
      block, 'KEY', Blockly.JavaScript.ORDER_COMMA);
  var number = Blockly.JavaScript.valueToCode(
      block, 'NUMBER', Blockly.JavaScript.ORDER_COMMA);
  return telemetryIdentifier + '.addNumericData(' + key + ', ' + number + ');\n';
};

Blockly.Blocks['telemetry_addTextData'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('telemetry'))
        .appendField('.')
        .appendField(createNonEditableField('addData'));
    this.appendValueInput('KEY')
        .appendField('key')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('TEXT')
        .appendField('text')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Add a text data point.');
  }
};

Blockly.JavaScript['telemetry_addTextData'] = function(block) {
  var key = Blockly.JavaScript.valueToCode(
      block, 'KEY', Blockly.JavaScript.ORDER_COMMA);
  var text = Blockly.JavaScript.valueToCode(
      block, 'TEXT', Blockly.JavaScript.ORDER_COMMA);
  return telemetryIdentifier + '.addTextData(' + key + ', ' + text + ');\n';
};

Blockly.Blocks['telemetry_update'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('telemetry'))
        .appendField('.')
        .appendField(createNonEditableField('update'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(functionColor);
    this.setTooltip('Send data to the driver station.');
  }
};

Blockly.JavaScript['telemetry_update'] = function(block) {
  return telemetryIdentifier + '.update();\n';
};