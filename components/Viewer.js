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
    ios-src="/vcs.usdz"
    poster="/cardimg.png"
    alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
</div>
)

export default Viewer;
