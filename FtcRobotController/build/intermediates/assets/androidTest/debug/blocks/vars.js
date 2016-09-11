var projectName;

var setPropertyColor = 147;
var getPropertyColor = 151;
var functionColor = 289;
var commentColor = 200;

function createNonEditableField(label) {
  var field = new Blockly.FieldTextInput(label);
  field.CURSOR = '';
  field.showEditor_ = function(opt_quietInput) {};
  return field;
}
