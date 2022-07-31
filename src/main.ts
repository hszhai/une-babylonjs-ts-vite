import './style.css'
import * as BABYLON from 'babylonjs'

const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const engine = new BABYLON.Engine(canvas, true)
const scene = new BABYLON.Scene(engine)

const camera = new BABYLON.ArcRotateCamera(
  'camera', 
  -Math.PI / 2, Math.PI / 2.5, 15, 
  new BABYLON.Vector3(0, 0, 0)
)
camera.attachControl(canvas, true)

const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;

const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
sphere.position.y = 1;

const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

engine.runRenderLoop( () => {
  scene.render()
})