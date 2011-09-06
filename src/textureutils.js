function initTextures() {
  cubeTexture = gl.createTexture();
 cubeImage = new Image();
  //cubeImage = document.getElementById("floor");
 cubeImage.onload = function() { handleTextureLoaded(cubeImage, cubeTexture); }
 // handleTextureLoaded(cubeImage, cubeTexture);
  cubeImage.src = "textures/floor_diff.png";
}

function handleTextureLoaded(image, texture) {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  console.log(image.width);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.bindTexture(gl.TEXTURE_2D, null);
}
