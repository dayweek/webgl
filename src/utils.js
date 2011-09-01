function loadIdentity() {
  mvMatrix = M4x4.I;
}

function multMatrix(m) {
  mvMatrix = M4x4.mul(mvMatrix, m);
}

function mvTranslate(v) {
  mvMatrix = M4x4.makeTranslate(v);
}

function setMatrixUniforms() {
  var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
  gl.uniformMatrix4fv(pUniform, false, new Float32Array(perspectiveMatrix));

  var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
  gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix));
}
