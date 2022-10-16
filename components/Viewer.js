import '@google/model-viewer';

const Viewer = () => (
  <div id="card" style={{
    width:"100%",
    height:"100%",
    zIndex:"2"
}}>
  <model-viewer
    style={{
        width:"100%",
        height:"100%",
    }}
    src="/vcs.glb"
    ios-src=""
    poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
    alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
</div>
)

export default Viewer;
