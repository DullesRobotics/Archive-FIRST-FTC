/**
 * @fileoverview Toolbox utilities.
 * @author lizlooney@google.com (Liz Looney)
 */

/**
 * Fetches the toolbox (as xml) and calls the callback.
 */
function fetchToolbox(callback) {
  if (typeof blocksIO !== 'undefined') {
    // FtcBlocks.html is within the WebView component within the Android app.
    fetchToolboxViaBlocksIO(callback);
  } else if (window.location.protocol === 'http:') {
    // FtcBlocks.html is in a browser, loaded as an http:// URL.
    fetchToolboxViaHttp(callback);
  } else if (window.location.protocol === 'file:') {
    // FtcBlocks.html is in a browser, loaded as a file:// URL.
    fetchToolboxViaFile(callback);
  }
}

function addToolboxIcons(workspace) {
  var children = workspace.toolbox_.tree_.getChildren();
  for (var i = 0, child; child = children[i]; i++) {
    child.setIconClass('toolbox-node-icon ' + child.getText() + '-icon');
  }
}

//..........................................................................
// Code used when FtcBlocks.html is within the WebView component within the
// Android app.

function fetchToolboxViaBlocksIO(callback) {
  var xmlToolbox = blocksIO.fetchToolbox();
  if (xmlToolbox) {
    callback(xmlToolbox, '');
  } else {
    callback(null, 'Fetch toolbox failed.');
  }
}

//..........................................................................
// Code used when FtcBlocks.html is in a browser, loaded as a http:// URL.

function fetchToolboxViaHttp(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/toolbox', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var xmlToolbox = xhr.responseText;
        callback(xmlToolbox, '');
      } else {
        // TODO(lizlooney): Use specific error messages for various xhr.status values.
        callback(null, 'Fetch toolbox failed. Error code ' + xhr.status + '. ' + xhr.statusText);
      }
    }
  };
  xhr.send();
}

//..........................................................................
// Code used when FtcBlocks.html is in a browser, loaded as a file:// URL.

function fetchToolboxViaFile(callback) {
  var xmlToolbox =
      '<xml id="toolbox" style="display: none">' +
      '  <category name="LinearOpMode">' +
      '    <block type="linearOpMode_waitForStart"></block>' +
      '    <block type="linearOpMode_idle"></block>' +
      '    <block type="linearOpMode_sleep">' +
      '      <value name="MILLISECONDS">' +
      '        <block type="math_number">' +
      '          <field name="NUM">1000</field>' +
      '        </block>' +
      '      </value>' +
      '    </block>' +
      '    <block type="linearOpMode_opModeIsActive"></block>' +
      '    <block type="linearOpMode_isStarted"></block>' +
      '    <block type="linearOpMode_isStopRequested"></block>' +
      '  </category>' +
      '  <category name="Gamepad">' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">A</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">AtRest</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">B</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">Back</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">DpadDown</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">DpadLeft</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">DpadRight</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">DpadUp</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">Guide</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">LeftBumper</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">LeftStickButton</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">LeftStickX</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">LeftStickY</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">LeftTrigger</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">RightBumper</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">RightStickButton</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">RightStickX</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">RightStickY</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">RightTrigger</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">Start</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">X</field>' +
      '    </block>' +
      '    <block type="gamepad_getProperty">' +
      '      <field name="IDENTIFIER">gamepad1</field>' +
      '      <field name="PROP">Y</field>' +
      '    </block>' +
      '  </category>' +
      '  <category name="Telemetry">' +
      '    <block type="telemetry_addNumericData">' +
      '      <value name="KEY">' +
      '        <block type="text">' +
      '          <field name="TEXT">abc</field>' +
      '        </block>' +
      '      </value>' +
      '    </block>' +
      '    <block type="telemetry_addTextData">' +
      '      <value name="KEY">' +
      '        <block type="text">' +
      '          <field name="TEXT">abc</field>' +
      '        </block>' +
      '      </value>' +
      '    </block>' +
      '  </category>' +
      '  <category name="ElapsedTime">' +
      '    <block type="variables_set">' +
      '      <field name="VAR">timer</field>' +
      '      <value name="VALUE">' +
      '        <block type="elapsedTime_create"></block>' +
      '      </value>' +
      '    </block>' +
      '    <block type="elapsedTime_getProperty">' +
      '      <field name="PROP">StartTime</field>' +
      '    </block>' +
      '    <block type="elapsedTime_getProperty">' +
      '      <field name="PROP">Seconds</field>' +
      '    </block>' +
      '    <block type="elapsedTime_getProperty">' +
      '      <field name="PROP">Milliseconds</field>' +
      '    </block>' +
      '    <block type="elapsedTime_getProperty">' +
      '      <field name="PROP">AsText</field>' +
      '    </block>' +
      '    <block type="elapsedTime_reset"></block>' +
      '  </category>' +
      '  <category name="Color">' +
      '    <block type="color_getProperty">' +
      '      <field name="PROP">Red</field>' +
      '    </block>' +
      '    <block type="color_getProperty">' +
      '      <field name="PROP">Green</field>' +
      '    </block>' +
      '    <block type="color_getProperty">' +
      '      <field name="PROP">Blue</field>' +
      '    </block>' +
      '    <block type="color_getProperty">' +
      '      <field name="PROP">Alpha</field>' +
      '    </block>' +
      '    <block type="color_getProperty">' +
      '      <field name="PROP">Hue</field>' +
      '    </block>' +
      '    <block type="color_getProperty">' +
      '      <field name="PROP">Saturation</field>' +
      '    </block>' +
      '    <block type="color_getProperty">' +
      '      <field name="PROP">Value</field>' +
      '    </block>' +
      '    <block type="color_rgbToColor"></block>' +
      '    <block type="color_argbToColor"></block>' +
      '    <block type="color_hsvToColor"></block>' +
      '    <block type="color_ahsvToColor"></block>' +
      '    <block type="color_textToColor"></block>' +
      '  </category>' +
      '  <sep></sep>' +
      '  <category name="Logic" colour="210">' +
      '    <block type="controls_if"></block>' +
      '    <block type="controls_if">' +
      '      <mutation else="1"></mutation>' +
      '    </block>' +
      '    <block type="controls_if">' +
      '      <mutation elseif="1" else="1"></mutation>' +
      '    </block>' +
      '    <block type="logic_compare"></block>' +
      '    <block type="logic_operation"></block>' +
      '    <block type="logic_negate"></block>' +
      '    <block type="logic_boolean"></block>' +
      '    <block type="logic_null"></block>' +
      '    <block type="logic_ternary"></block>' +
      '  </category>' +
      '  <category name="Loops" colour="120">' +
      '    <block type="controls_repeat_ext">' +
      '      <value name="TIMES">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">10</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="controls_whileUntil"></block>' +
      '    <block type="controls_for">' +
      '      <value name="FROM">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">1</field>' +
      '        </shadow>' +
      '      </value>' +
      '      <value name="TO">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">10</field>' +
      '        </shadow>' +
      '      </value>' +
      '      <value name="BY">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">1</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="controls_forEach"></block>' +
      '    <block type="controls_flow_statements"></block>' +
      '  </category>' +
      '  <category name="Math" colour="230">' +
      '    <block type="math_number"></block>' +
      '    <block type="math_arithmetic">' +
      '      <value name="A">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">1</field>' +
      '        </shadow>' +
      '      </value>' +
      '      <value name="B">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">1</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="math_single">' +
      '      <field name="OP">NEG</field>' +
      '    </block>' +
      '    <block type="math_single">' +
      '      <field name="OP">ABS</field>' +
      '    </block>' +
      '    <block type="math_single">' +
      '      <field name="OP">ROOT</field>' +
      '    </block>' +
      '    <block type="math_trig">' +
      '      <value name="NUM">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">45</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="math_constant"></block>' +
      '    <block type="math_number_property">' +
      '      <value name="NUMBER_TO_CHECK">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">0</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="math_round">' +
      '      <value name="NUM">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">3.1</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="math_on_list"></block>' +
      '    <block type="math_modulo">' +
      '      <value name="DIVIDEND">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">64</field>' +
      '        </shadow>' +
      '      </value>' +
      '      <value name="DIVISOR">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">10</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="math_constrain">' +
      '      <value name="VALUE">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">50</field>' +
      '        </shadow>' +
      '      </value>' +
      '      <value name="LOW">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">1</field>' +
      '        </shadow>' +
      '      </value>' +
      '      <value name="HIGH">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">100</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="math_random_int">' +
      '      <value name="FROM">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">1</field>' +
      '        </shadow>' +
      '      </value>' +
      '      <value name="TO">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">100</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="math_random_float"></block>' +
      '  </category>' +
      '  <category name="Text" colour="160">' +
      '    <block type="text"></block>' +
      '    <block type="text_join"></block>' +
      '    <block type="text_append">' +
      '      <value name="TEXT">' +
      '        <shadow type="text"></shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="text_length">' +
      '      <value name="VALUE">' +
      '        <shadow type="text">' +
      '          <field name="TEXT">abc</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="text_isEmpty">' +
      '      <value name="VALUE">' +
      '        <shadow type="text">' +
      '          <field name="TEXT"></field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="text_indexOf">' +
      '      <value name="VALUE">' +
      '        <block type="variables_get">' +
      '          <field name="VAR">{textVariable}</field>' +
      '        </block>' +
      '      </value>' +
      '      <value name="FIND">' +
      '        <shadow type="text">' +
      '          <field name="TEXT">abc</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="text_charAt">' +
      '      <value name="VALUE">' +
      '        <block type="variables_get">' +
      '          <field name="VAR">{textVariable}</field>' +
      '        </block>' +
      '      </value>' +
      '    </block>' +
      '    <block type="text_getSubstring">' +
      '      <value name="STRING">' +
      '        <block type="variables_get">' +
      '          <field name="VAR">{textVariable}</field>' +
      '        </block>' +
      '      </value>' +
      '    </block>' +
      '    <block type="text_changeCase">' +
      '      <value name="TEXT">' +
      '        <shadow type="text">' +
      '          <field name="TEXT">abc</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="text_trim">' +
      '      <value name="TEXT">' +
      '        <shadow type="text">' +
      '          <field name="TEXT">abc</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '  </category>' +
      '  <category name="Lists" colour="260">' +
      '    <block type="lists_create_with">' +
      '      <mutation items="0"></mutation>' +
      '    </block>' +
      '    <block type="lists_create_with"></block>' +
      '    <block type="lists_repeat">' +
      '      <value name="NUM">' +
      '        <shadow type="math_number">' +
      '          <field name="NUM">5</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="lists_length"></block>' +
      '    <block type="lists_isEmpty"></block>' +
      '    <block type="lists_indexOf">' +
      '      <value name="VALUE">' +
      '        <block type="variables_get">' +
      '          <field name="VAR">{listVariable}</field>' +
      '        </block>' +
      '      </value>' +
      '    </block>' +
      '    <block type="lists_getIndex">' +
      '      <value name="VALUE">' +
      '        <block type="variables_get">' +
      '          <field name="VAR">{listVariable}</field>' +
      '        </block>' +
      '      </value>' +
      '    </block>' +
      '    <block type="lists_setIndex">' +
      '      <value name="LIST">' +
      '        <block type="variables_get">' +
      '          <field name="VAR">{listVariable}</field>' +
      '        </block>' +
      '      </value>' +
      '    </block>' +
      '    <block type="lists_getSublist">' +
      '      <value name="LIST">' +
      '        <block type="variables_get">' +
      '          <field name="VAR">{listVariable}</field>' +
      '        </block>' +
      '      </value>' +
      '    </block>' +
      '    <block type="lists_split">' +
      '      <value name="DELIM">' +
      '        <shadow type="text">' +
      '          <field name="TEXT">,</field>' +
      '        </shadow>' +
      '      </value>' +
      '    </block>' +
      '    <block type="lists_sort"></block>' +
      '  </category>' +
      '  <category name="Variables" colour="330" custom="VARIABLE"></category>' +
      '  <category name="Functions" colour="290" custom="PROCEDURE"></category>' +
      '  <category name="Miscellaneous" colour="200">' +
      '    <block type="comment">' +
      '      <field name="COMMENT">Enter your comment here!</field>' +
      '    </block>' +
      '  </category>' +
      '</xml>';
  callback(xmlToolbox, '');
}
