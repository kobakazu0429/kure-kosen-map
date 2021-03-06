import * as THREE from "three";

export class Viewer {
  constructor(containerId: string, image: any, width: number, height: number) {
    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);

    const geometry = new THREE.SphereBufferGeometry(500, 60, 40);

    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale(-1, 1, 1);

    const texture = new THREE.TextureLoader().load(image);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.mesh = new THREE.Mesh(geometry, material);

    this.scene = new THREE.Scene();
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);

    const container = document.getElementById(containerId) as HTMLDivElement;
    if (!container) return;
    this.container = container;

    this.appendDom();
    this.animate();
    this.addEvent();
  }

  private container?: HTMLDivElement;

  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  private mesh: THREE.Mesh<THREE.SphereBufferGeometry, THREE.MeshBasicMaterial>;

  private isUserInteracting = false;
  private onPointerDownMouseX = 0;
  private onPointerDownMouseY = 0;
  private onPointerDownLon = 0;
  private onPointerDownLat = 0;

  private pos = {
    lon: 0,
    lat: 0,
  };

  public update() {
    if (this.isUserInteracting === false) {
      this.pos.lon += 0.1;
    }

    this.pos.lat = Math.max(-85, Math.min(85, this.pos.lat));
    const phi = THREE.MathUtils.degToRad(90 - this.pos.lat);
    const theta = THREE.MathUtils.degToRad(this.pos.lon);

    const x = 500 * Math.sin(phi) * Math.cos(theta);
    const y = 500 * Math.cos(phi);
    const z = 500 * Math.sin(phi) * Math.sin(theta);

    this.camera.lookAt(x, y, z);

    this.renderer.render(this.scene, this.camera);
  }
  public dispose() {
    this.container?.removeChild(this.renderer.domElement);
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.update();
  }

  private appendDom() {
    this.container?.appendChild(this.renderer.domElement);
  }

  private addEvent() {
    const onPointerDown = (event: any) => {
      if (event.isPrimary === false) return;

      this.isUserInteracting = true;

      this.onPointerDownMouseX = event.clientX;
      this.onPointerDownMouseY = event.clientY;

      this.onPointerDownLon = this.pos.lon;
      this.onPointerDownLat = this.pos.lat;

      document.addEventListener("pointermove", onPointerMove, false);
      document.addEventListener("pointerup", onPointerUp, false);
    };

    const onPointerMove = (event: any) => {
      if (event.isPrimary === false) return;

      this.pos.lon =
        (this.onPointerDownMouseX - event.clientX) * 0.1 +
        this.onPointerDownLon;
      this.pos.lat =
        (event.clientY - this.onPointerDownMouseY) * 0.1 +
        this.onPointerDownLat;
    };

    const onPointerUp = (event: any) => {
      if (event.isPrimary === false) return;

      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };

    const onDocumentMouseWheel = (event: any) => {
      const fov = this.camera.fov + event.deltaY * 0.05;

      this.camera.fov = THREE.MathUtils.clamp(fov, 10, 75);

      this.camera.updateProjectionMatrix();
    };

    this.container?.addEventListener("pointerdown", onPointerDown, false);
    this.container?.addEventListener("wheel", onDocumentMouseWheel, false);
  }
}
