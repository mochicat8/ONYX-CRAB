// var url = 'http://localhost:3000/';
// var filename = 'photos/dolphin.jpg';
var cardboard;

function setup() {

  cardboard = new Cardboard();
  imageInit(1,2, cardboard);
  cardboard.effect.separation = 0.6;
  cardboard.update = function() {
    Cardboard.prototype.update.call(this);
  };
  document.getElementById('stereoView').appendChild(cardboard.renderer.domElement);
}

function imageInit(url, filename) {

//  var pic = THREE.ImageUtils.loadTexture(url + filename, null, function() {
//    console.log('loading texture');
//  }, function(err) {
//    if (err) {
//      console.log('got an error loading texture');
//    }
//  });
//
//  var planegeometry = new THREE.PlaneGeometry( 635, 441 );
//  var planematerial = new THREE.MeshBasicMaterial({
//    color: 0xFFFFFF,
//    map: pic
//  });
//  var plane = new THREE.Mesh( planegeometry, planematerial );
//  cardboard.scene.add( plane );
//
//  cardboard.camera.position.y = 441 / 1.5;

  var pic = THREE.ImageUtils.loadTexture(url + filename, null, function() {
    console.log('loading texture');
  }, function(err) {
    if (err) {
      console.log('got an error loading texture');
    }
  });

  var planegeometry = new THREE.PlaneBufferGeometry( 635, 441 );
  var planematerial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    map: pic
  });
  var plane = new THREE.Mesh( planegeometry, planematerial );
  plane.rotation.y = -Math.PI/2;
  scene.add( plane );

  camera.position.y = -200;
  camera.position.x = -200;
  // camera.position.z = -200;

//  var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
//  cardboard.scene.add(light);
//
//  var texture = THREE.ImageUtils.loadTexture(
//    url + 'checker.png'
//  );
//  texture.wrapS = THREE.RepeatWrapping;
//  texture.wrapT = THREE.RepeatWrapping;
//  texture.repeat = new THREE.Vector2(50, 50);
//  texture.anisotropy = cardboard.renderer.getMaxAnisotropy();
//
//  var material = new THREE.MeshPhongMaterial({
//    color: 0xffffff,
//    specular: 0xffffff,
//    shininess: 20,
//    shading: THREE.FlatShading,
//    map: texture
//  });
//
//  var geometry = new THREE.PlaneGeometry(1000, 1000);
//
//  var mesh = new THREE.Mesh(geometry, material);
//  mesh.rotation.x = -Math.PI / 2;
//  cardboard.scene.add(mesh);

//  var light = new THREE.HemisphereLight(0x777777, 0x000000, 0.6);
//  scene.add(light);
//
//  var texture = THREE.ImageUtils.loadTexture(
//      url + 'checker.png'
//  );
//  texture.wrapS = THREE.RepeatWrapping;
//  texture.wrapT = THREE.RepeatWrapping;
//  texture.repeat = new THREE.Vector2(50, 50);
//  texture.anisotropy = renderer.getMaxAnisotropy();
//
//  var material = new THREE.MeshPhongMaterial({
//    color: 0xffffff,
//    specular: 0xffffff,
//    shininess: 20,
//    shading: THREE.FlatShading,
//    map: texture
//  });
//
//  var geometry = new THREE.PlaneGeometry(1000, 1000);
//
//  var mesh = new THREE.Mesh(geometry, material);
//  mesh.rotation.x = -Math.PI / 2;
//  scene.add(mesh);
}
