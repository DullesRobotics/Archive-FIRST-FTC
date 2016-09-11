/**
 * @fileoverview Project utilities.
 * @author lizlooney@google.com (Liz Looney)
 */

/**
 * Fetches the list of projects (as json) and calls the callback.
 */
function fetchProjects(callback) {
  if (typeof blocksIO !== 'undefined') {
    // FtcBlocks.html is within the WebView component within the Android app.
    fetchProjectsViaBlocksIO(callback);
  } else if (window.location.protocol === 'http:') {
    // FtcBlocks.html is in a browser, loaded as an http:// URL.
    fetchProjectsViaHttp(callback);
  } else if (window.location.protocol === 'file:') {
    // FtcBlocks.html is in a browser, loaded as a file:// URL.
    fetchProjectsViaFile(callback);
  }
}

/**
 * Opens the project with the given name.
 */
function openProjectBlocks(projectName) {
  if (typeof blocksIO !== 'undefined') {
    // FtcBlocks.html is within the WebView component within the Android app.
    openProjectBlocksViaBlocksIO(projectName);
  } else if (window.location.protocol === 'http:') {
    // FtcBlocks.html is in a browser, loaded as an http:// URL.
    openProjectBlocksViaHttp(projectName);
  } else if (window.location.protocol === 'file:') {
    // FtcBlocks.html is in a browser, loaded as a file:// URL.
    openProjectBlocksViaFile(projectName);
  }
}

/**
 * Returns true if the given project name contains only valid characters.
 * This function does not check whether the project exists.
 */
function isValidProjectName(projectName) {
  if (projectName) {
    return /^[a-zA-Z0-9]+$/.test(projectName);
  }
  return false;
}

/**
 * Creates the blocks for a new project.
 */
function createBlocks() {
  var blkContent = 
      '<xml xmlns="http://www.w3.org/1999/xhtml">\n' +
      '  <block type="procedures_defnoreturn" deletable="false" editable="false" x="50" y="50">\n' +
      '    <field name="NAME">runOpMode</field>\n' +
      '    <comment pinned="true" h="80" w="160">This function is executed when this Op Mode is selected from the Driver Station.</comment>\n' +
      '    <statement name="STACK">\n' +
      '      <block type="comment">\n' +
      '        <field name="COMMENT">Put initialization blocks here.</field>\n' +
      '        <next>\n' +
      '          <block type="linearOpMode_waitForStart">\n' +
      '            <next>\n' +
      '              <block type="comment">\n' +
      '                <field name="COMMENT">Put run blocks here.</field>\n' +
      '                <next>\n' +
      '                  <block type="controls_whileUntil">\n' +
      '                    <field name="MODE">WHILE</field>\n' +
      '                    <value name="BOOL">\n' +
      '                      <block type="linearOpMode_opModeIsActive">\n' +
      '                      </block>\n' +
      '                    </value>\n' +
      '                    <statement name="DO">\n' +
      '                      <block type="comment">\n' +
      '                        <field name="COMMENT">Put loop blocks here.</field>\n' +
      '                        <next>\n' +
      '                          <block type="linearOpMode_idle">\n' +
      '                          </block>\n' +
      '                        </next>\n' +
      '                      </block>\n' +
      '                    </statement>\n' +
      '                  </block>\n' +
      '                </next>\n' +
      '              </block>\n' +
      '            </next>\n' +
      '          </block>\n' +
      '        </next>\n' +
      '      </block>\n' +
      '    </statement>\n' +
      '  </block>\n' +
      '</xml>\n';
  return blkContent;
}

/**
 * Creates the javascript for a new project.
 */
function createJavascript() {
  return
      'function runOpMode() {\n' +
      '  linearOpMode.waitForStart();\n' +
      '  while (linearOpMode.opModeIsActive()) {\n' +
      '    linearOpMode.idle();\n' +
      '  }\n' +
      '}\n';
}

/**
 * Fetches the blocks of an existing project and calls the callback
 */
function fetchBlocks(projectName, callback) {
  if (typeof blocksIO !== 'undefined') {
    // FtcBlocks.html is within the WebView component within the Android app.
    fetchBlocksViaBlocksIO(projectName, callback);
  } else if (window.location.protocol === 'http:') {
    // FtcBlocks.html is in a browser, loaded as an http:// URL.
    fetchBlocksViaHttp(projectName, callback);
  } else if (window.location.protocol === 'file:') {
    // FtcBlocks.html is in a browser, loaded as a file:// URL.
    fetchBlocksViaFile(projectName, callback);
  }
}

function saveProject(projectName, blkContent, jsContent, callback) {
  if (typeof blocksIO !== 'undefined') {
    // FtcBlocks.html is within the WebView component within the Android app.
    saveProjectViaBlocksIO(projectName, blkContent, jsContent, callback);
  } else if (window.location.protocol === 'http:') {
    // FtcBlocks.html is in a browser, loaded as an http:// URL.
    saveProjectViaHttp(projectName, blkContent, jsContent, callback);
  } else if (window.location.protocol === 'file:') {
    // FtcBlocks.html is in a browser, loaded as a file:// URL.
    saveProjectViaFile(projectName, blkContent, jsContent, callback);
  }
}

function renameProject(oldProjectName, newProjectName, callback) {
  if (typeof blocksIO !== 'undefined') {
    // FtcBlocks.html is within the WebView component within the Android app.
    renameProjectViaBlocksIO(oldProjectName, newProjectName, callback);
  } else if (window.location.protocol === 'http:') {
    // FtcBlocks.html is in a browser, loaded as an http:// URL.
    renameProjectViaHttp(oldProjectName, newProjectName, callback);
  } else if (window.location.protocol === 'file:') {
    // FtcBlocks.html is in a browser, loaded as a file:// URL.
    renameProjectViaFile(oldProjectName, newProjectName, callback);
  }
}

function copyProject(oldProjectName, newProjectName, callback) {
  if (typeof blocksIO !== 'undefined') {
    // FtcBlocks.html is within the WebView component within the Android app.
    copyProjectViaBlocksIO(oldProjectName, newProjectName, callback);
  } else if (window.location.protocol === 'http:') {
    // FtcBlocks.html is in a browser, loaded as an http:// URL.
    copyProjectViaHttp(oldProjectName, newProjectName, callback);
  } else if (window.location.protocol === 'file:') {
    // FtcBlocks.html is in a browser, loaded as a file:// URL.
    copyProjectViaFile(oldProjectName, newProjectName, callback);
  }
}

function deleteProjects(csvProjectNames, callback) {
  if (typeof blocksIO !== 'undefined') {
    // FtcBlocks.html is within the WebView component within the Android app.
    deleteProjectsViaBlocksIO(csvProjectNames, callback);
  } else if (window.location.protocol === 'http:') {
    // FtcBlocks.html is in a browser, loaded as an http:// URL.
    deleteProjectsViaHttp(csvProjectNames, callback);
  } else if (window.location.protocol === 'file:') {
    // FtcBlocks.html is in a browser, loaded as a file:// URL.
    deleteProjectsViaFile(csvProjectNames, callback);
  }
}

//..........................................................................
// Code used when FtcBlocks.html is within the WebView component within the
// Android app.

function fetchProjectsViaBlocksIO(callback) {
  var jsonProjects = blocksIO.fetchProjects();
  if (jsonProjects) {
    callback(jsonProjects, '');
  } else {
    callback(null, 'Fetch projects failed.');
  }
}

function openProjectBlocksViaBlocksIO(projectName) {
  blocksIO.openProjectBlocks(projectName);
}

function fetchBlocksViaBlocksIO(projectName, callback) {
  var blkContent = blocksIO.fetchBlocks(projectName);
  if (blkContent) {
    callback(blkContent, '');
  } else {
    callback(null, 'Fetch blocks failed.');
  }
}

function saveProjectViaBlocksIO(projectName, blkContent, jsContent, callback) {
  var success = blocksIO.saveProject(projectName, blkContent, jsContent);
  if (success) {
    callback(true, '');
  } else {
    // TODO(lizlooney): Provide more information about the error.
    callback(false, 'Save project failed.');
  }
}

function renameProjectViaBlocksIO(oldProjectName, newProjectName, callback) {
  var success = blocksIO.renameProject(oldProjectName, newProjectName);
  if (success) {
    callback(true, '');
  } else {
    // TODO(lizlooney): Provide more information about the error.
    callback(false, 'Rename project failed.');
  }
}

function copyProjectViaBlocksIO(oldProjectName, newProjectName, callback) {
  var success = blocksIO.copyProject(oldProjectName, newProjectName);
  if (success) {
    callback(true, '');
  } else {
    // TODO(lizlooney): Provide more information about the error.
    callback(false, 'Copy project failed.');
  }
}

function deleteProjectsViaBlocksIO(csvProjectNames, callback) {
  var success = blocksIO.deleteProjects(csvProjectNames);
  if (success) {
    callback(true, '');
  } else {
    // TODO(lizlooney): Provide more information about the error.
    callback(false, 'Delete projects failed.');
  }
}

//..........................................................................
// Code used when FtcBlocks.html is in a browser, loaded as a http:// URL.

var URI_LIST = '/list';
var URI_LOAD = '/load';
var URI_SAVE = '/save';
var URI_RENAME = '/rename';
var URI_COPY = '/copy';
var URI_DELETE = '/delete';
var PARAM_PROJECT = 'project';
var PARAM_NEWPROJECT = 'newproject';
var PARAM_BLK = 'blk';
var PARAM_JS = 'js';

function fetchProjectsViaHttp(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', URI_LIST, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var jsonProjects = xhr.responseText;
        callback(jsonProjects, '');
      } else {
        // TODO(lizlooney): Use specific error messages for various xhr.status values.
        callback(null, 'Fetch projects failed. Error code ' + xhr.status + '. ' + xhr.statusText);
      }
    }
  };
  xhr.send();
}

function openProjectBlocksViaHttp(projectName) {
  // Go to FtcBlocks.html?project=<projectName>.
  window.location.href = 'FtcBlocks.html?project=' + encodeURIComponent(projectName);
}

function fetchBlocksViaHttp(projectName, callback) {
  var xhr = new XMLHttpRequest();
  var params = PARAM_PROJECT + '=' + encodeURIComponent(projectName);
  xhr.open('POST', URI_LOAD, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var blkContent = xhr.responseText;
        callback(blkContent, '');
      } else {
        // TODO(lizlooney): Use specific error messages for various xhr.status values.
        callback(null, 'Fetch blocks failed. Error code ' + xhr.status + '. ' + xhr.statusText);
      }
    }
  };
  xhr.send(params);
}

function saveProjectViaHttp(projectName, blkContent, jsContent, callback) {
  var xhr = new XMLHttpRequest();
  var params = PARAM_PROJECT + '=' + encodeURIComponent(projectName) +
      '&' + PARAM_BLK + '=' + encodeURIComponent(blkContent) +
      '&' + PARAM_JS + '=' + encodeURIComponent(jsContent);
  xhr.open('POST', URI_SAVE, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(true, '');
      } else {
        // TODO(lizlooney): Use specific error messages for various xhr.status values.
        callback(false, 'Save project failed. Error code ' + xhr.status + '. ' + xhr.statusText);
      }
    }
  };
  xhr.send(params);
}

function renameProjectViaHttp(oldProjectName, newProjectName, callback) {
  var xhr = new XMLHttpRequest();
  var params = PARAM_PROJECT + '=' + encodeURIComponent(oldProjectName) +
      '&' + PARAM_NEWPROJECT + '=' + encodeURIComponent(newProjectName);
  xhr.open('POST', URI_RENAME, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(true, '');
      } else {
        // TODO(lizlooney): Use specific error messages for various xhr.status values.
        callback(false, 'Rename project failed. Error code ' + xhr.status + '. ' + xhr.statusText);
      }
    }
  };
  xhr.send(params);
}

function copyProjectViaHttp(oldProjectName, newProjectName, callback) {
  var xhr = new XMLHttpRequest();
  var params = PARAM_PROJECT + '=' + encodeURIComponent(oldProjectName) +
      '&' + PARAM_NEWPROJECT + '=' + encodeURIComponent(newProjectName);
  xhr.open('POST', URI_COPY, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(true, '');
      } else {
        // TODO(lizlooney): Use specific error messages for various xhr.status values.
        callback(false, 'Copy project failed. Error code ' + xhr.status + '. ' + xhr.statusText);
      }
    }
  };
  xhr.send(params);
}

function deleteProjectsViaHttp(csvProjectNames, callback) {
  var xhr = new XMLHttpRequest();
  var params = PARAM_PROJECT + '=' + encodeURIComponent(csvProjectNames);
  xhr.open('POST', URI_DELETE, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(true, '');
      } else {
        // TODO(lizlooney): Use specific error messages for various xhr.status values.
        callback(false, 'Delete projects failed. Error code ' + xhr.status + '. ' + xhr.statusText);
      }
    }
  };
  xhr.send(params);
}

//..........................................................................
// Code used when FtcBlocks.html is in a browser, loaded as a file:// URL.

function fetchProjectsViaFile(callback) {
  var jsonProjects = '[' +
      '{ "name": "Autonomous", "dateModifiedMillis": 1464391007000},' +
      '{ "name": "LineFollow", "dateModifiedMillis":1464591007000},' +
      '{ "name": "TeleBot", "dateModifiedMillis":1464191007000}' +
      ']';
  callback(jsonProjects, '');
}

function openProjectBlocksViaFile(projectName) {
  // Go to FtcBlocks.html?project=<projectName>.
  window.location.href = 'FtcBlocks.html?project=' + encodeURIComponent(projectName);
}

function fetchBlocksViaFile(projectName, callback) {
  var fakeBlkContent = createBlocks();
  callback(fakeBlkContent, '');
}

function saveProjectViaFile(projectName, blkContent, jsContent, callback) {
  console.log('blkContent is ' + blkContent);
  console.log('jsContent is ' + jsContent);
  callback(true, '');
  //callback(false, 'Save project failed.');
}

function renameProjectViaFile(projectName, blkContent, jsContent, callback) {
  callback(true, '');
  //callback(false, 'Rename project failed.');
}

function copyProjectViaFile(projectName, blkContent, jsContent, callback) {
  callback(true, '');
  //callback(false, 'Copy project failed.');
}

function deleteProjectsViaFile(csvProjectNames, callback) {
  callback(true, '');
  //callback(false, 'Delete projects failed.');
}
