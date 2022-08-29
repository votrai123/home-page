import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function loadGLTFModel(
  scene: any,
  glbPath: any,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new DRACOLoader();
    //dracoLoader.setDecoderPath('/images/');
    //dracoLoader.setPath('/mac.glb');
    dracoLoader.setDecoderPath('/draco/glb/'); //copypasted draco/gltf/all files in public folder

    //loader.setPath('/images/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      '/draco_mac.glb',
      gltf => {
        console.log(gltf, '==== success');
        const obj = gltf.scene;
        obj.name = 'dog';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child: any) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        console.log(error, '==== erro');
        reject(error);
      }
    );
  });
}
