/**
 * @fileoverview Comment blocks.
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are defined in vars.js:
// commentColor

Blockly.Blocks['comment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(''), 'COMMENT');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(commentColor);
  }
};

Blockly.JavaScript['comment'] = function(block) {
  return '';
};
