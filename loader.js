export default `
.loader{
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}
body{
    background-color:#fff
  }
  .logoholder{
    position: relative;
    top:0;
    left:0;
    width: 325.58px;
    height: 157.38px;
  /*   background: rgba(255,255,255,.3); */
  }
  .gear{
    z-index:-1;
    position:absolute;
    top: -5.07px;
    left:89.84px;                     
    width:150.82px; 
    height:160.08px;
    animation: rotatepush 2s ease-in-out infinite 
  }
  .ar{
    position: absolute;
    right:0;
    top: 0;
    z-index:-2;
    animation: reveal 2s infinite
  }
  @keyframes rotatepush{
    0%{
      transform:rotate(0deg)
    }
    50%{
      transform:rotate(50deg)
    }
    100%{
      transform:rotate(0deg)
    }
  }
  @keyframes reveal{
    0%{
      transform:translatex(-50%);
      opacity:0;
    }
    50%{
      transform:translatex(0%);
      opacity:1;
    }
    100%{
      transform:translatex(-50%);
      opacity:0;
    }
  }`;