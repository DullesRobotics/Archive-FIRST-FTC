/**
 * @fileoverview FTC robot blocks related to color.
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// colorIdentifier
// The following are defined in vars.js:
// getPropertyColor
// functionColor

Blockly.Blocks['color_getProperty'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['Red', 'Red'],
        ['Green', 'Green'],
        ['Blue', 'Blue'],
        ['Alpha', 'Alpha'],
        ['Hue', 'Hue'],
        ['Saturation', 'Saturation'],
        ['Value', 'Value'],
    ];
    this.setOutput(true);
    this.appendDummyInput()
        .appendField(createNonEditableField('Color'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('COLOR')
        .appendField('color')
        .setAlign(Blockly.ALIGN_RIGHT);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['Red', 'The red of the given color'],
        ['Green', 'The green of the given color.'],
        ['Blue', 'The blue of the given color.'],
        ['Alpha', 'The alpha of the given color.'],
        ['Hue', 'The hue of the given color'],
        ['Saturation', 'The saturation of the given color.'],
        ['Value', 'The value of the given color.'],
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

Blockly.JavaScript['color_getProperty'] = function(block) {
  var property = block.getFieldValue('PROP');
  var color = Blockly.JavaScript.valueToCode(
      block, 'COLOR', Blockly.JavaScript.ORDER_NONE);
  var code = colorIdentifier + '.get' + property + '(' + color + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

// Functions

Blockly.Blocks['color_rgbToColor'] = {
  init: function() {
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('Color'))
        .appendField('.')
        .appendField(createNonEditableField('rgbToColor'));
    this.appendValueInput('RED')
        .appendField('red')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('GREEN')
        .appendField('green')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('BLUE')
        .appendField('blue')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip('Make a color from red, green, and blue.');
    this.setColour(functionColor);
  }
};

Blockly.JavaScript['color_rgbToColor'] = function(block) {
  var red = Blockly.JavaScript.valueToCode(
      block, 'RED', Blockly.JavaScript.ORDER_NONE);
  var green = Blockly.JavaScript.valueToCode(
      block, 'GREEN', Blockly.JavaScript.ORDER_NONE);
  var blue = Blockly.JavaScript.valueToCode(
      block, 'BLUE', Blockly.JavaScript.ORDER_NONE);
  var code = colorIdentifier + '.rgbToColor(' + red + ', ' + green + ', ' + blue + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.Blocks['color_argbToColor'] = {
  init: function() {
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('Color'))
        .appendField('.')
        .appendField(createNonEditableField('argbToColor'));
    this.appendValueInput('ALPHA')
        .appendField('alpha')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('RED')
        .appendField('red')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('GREEN')
        .appendField('green')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('BLUE')
        .appendField('blue')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip('Make a color from alpha, red, green, and blue.');
    this.setColour(functionColor);
  }
};

Blockly.JavaScript['color_argbToColor'] = function(block) {
  var alpha = Blockly.JavaScript.valueToCode(
      block, 'ALPHA', Blockly.JavaScript.ORDER_NONE);
  var red = Blockly.JavaScript.valueToCode(
      block, 'RED', Blockly.JavaScript.ORDER_NONE);
  var green = Blockly.JavaScript.valueToCode(
      block, 'GREEN', Blockly.JavaScript.ORDER_NONE);
  var blue = Blockly.JavaScript.valueToCode(
      block, 'BLUE', Blockly.JavaScript.ORDER_NONE);
  var code = colorIdentifier + '.argbToColor(' + alpha + ', ' + red + ', ' + green + ', ' + blue + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.Blocks['color_hsvToColor'] = {
  init: function() {
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('Color'))
        .appendField('.')
        .appendField(createNonEditableField('hsvToColor'));
    this.appendValueInput('HUE')
        .appendField('hue')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('SATURATION')
        .appendField('saturation')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('VALUE')
        .appendField('value')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip('Make a color from hue, saturation, and value.');
    this.setColour(functionColor);
  }
};

Blockly.JavaScript['color_hsvToColor'] = function(block) {
  var hue = Blockly.JavaScript.valueToCode(
      block, 'HUE', Blockly.JavaScript.ORDER_NONE);
  var saturation = Blockly.JavaScript.valueToCode(
      block, 'SATURATION', Blockly.JavaScript.ORDER_NONE);
  var value = Blockly.JavaScript.valueToCode(
      block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
  var code = colorIdentifier + '.hsvToColor(' + hue + ', ' + saturation + ', ' + value + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.Blocks['color_ahsvToColor'] = {
  init: function() {
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('Color'))
        .appendField('.')
        .appendField(createNonEditableField('hsvToColor'));
    this.appendValueInput('ALPHA')
        .appendField('alpha')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('HUE')
        .appendField('hue')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('SATURATION')
        .appendField('saturation')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('VALUE')
        .appendField('value')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip('Make a color from alpha, hue, saturation, and value.');
    this.setColour(functionColor);
  }
};

Blockly.JavaScript['color_ahsvToColor'] = function(block) {
  var alpha = Blockly.JavaScript.valueToCode(
      block, 'ALPHA', Blockly.JavaScript.ORDER_NONE);
  var hue = Blockly.JavaScript.valueToCode(
      block, 'HUE', Blockly.JavaScript.ORDER_NONE);
  var saturation = Blockly.JavaScript.valueToCode(
      block, 'SATURATION', Blockly.JavaScript.ORDER_NONE);
  var value = Blockly.JavaScript.valueToCode(
      block, 'VALUE', Blockly.JavaScript.ORDER_NONE);
  var code = colorIdentifier + '.ahsvToColor(' + alpha + ',' + hue + ', ' + saturation + ', ' + value + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.Blocks['color_textToColor'] = {
  init: function() {
    this.setOutput(true);
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('Color'))
        .appendField('.')
        .appendField(createNonEditableField('textToColor'));
    this.appendValueInput('TEXT')
        .appendField('text')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip('Make a color from text.');
    this.setColour(functionColor);
  }
};

Blockly.JavaScript['color_textToColor'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(
      block, 'TEXT', Blockly.JavaScript.ORDER_NONE);
  var code = colorIdentifier + '.textToColor(' + text + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}
