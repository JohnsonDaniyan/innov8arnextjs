import '@google/model-viewer';

const Viewer = () => (
  <div id="card" style={{
    width:"100%",
    height:"100%",
    zIndex:"10"
}}>
  <model-viewer
    style={{
        width:"100%",
        height:"100%",
    }}
    src="https://d2zes9ifb0ot5n.cloudfront.net/VCS+(1).usdz"
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
