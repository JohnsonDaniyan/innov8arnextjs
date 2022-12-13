import '@google/model-viewer';
import { useEffect } from 'react';
import axios from 'axios'


const Viewer = () => { 

//   const getModel = async () => {
//     await axios.get("https://d2zes9ifb0ot5n.cloudfront.net/Egg+incubator1.glb")
//     .then((res) => {
//         dispatch(getFootballersData(res.data))
//         console.log(res.data)
//     })
// }
// useEffect(() => {
//   getModel()
// },[])


  return(
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
    src="https://d2zes9ifb0ot5n.cloudfront.net/Mobility.glb"
    poster="/cardimg.png"
    alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
</div>
)}

export default Viewer;
