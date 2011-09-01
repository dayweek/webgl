var mvMatrixStack = [];

function mvPushMatrix(m) {
  if (m) {
    mvMatrixStack.push(M4x4.clone(m));
    mvMatrix = M4x4.clone(m);
  } else {
    mvMatrixStack.push(M4x4.clone(mvMatrix));
  }
}

function mvPopMatrix() {
  if (!mvMatrixStack.length) {
    throw("Can't pop from an empty matrix stack.");
  }
  
  mvMatrix = mvMatrixStack.pop();
  return mvMatrix;
}

function mvRotate(angle, axis) {
  var inRadians = angle * Math.PI / 180.0;
  
  M4x4.rotate(inRadians, axis, mvMatrix, mvMatrix);
}

function loadIdentity() {
  mvMatrix = M4x4.clone(M4x4.identity);
}

function multMatrix(m) {
  mvMatrix = M4x4.mul(mvMatrix, m);
}

function mvTranslate(v) {
  M4x4.translate(v, mvMatrix, mvMatrix);
}

function setMatrixUniforms() {
  var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
  gl.uniformMatrix4fv(pUniform, false, new Float32Array(perspectiveMatrix));

  var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
  gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix));
}
requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
     window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame ||
     window.oRequestAnimationFrame ||
     window.msRequestAnimationFrame ||
     function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
       window.setTimeout(callback, 1000/60);
     };
})();
