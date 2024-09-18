import { useState } from "react";

function SVGBackground() {
    let windowDim = {
        windowHeight : window.innerHeight, 
        windowWidth : window.innerWidth
    }

    // const [windowDim, setWindowDim] = useState({windowHeight: window.innerHeight, windowWidth : window.innerWidth});
    // window.addEventListener('resize',()=>{
    //     setWindowDim({windowHeight : window.innerHeight, windowWidth : window.innerWidth});
    // })
    return(
        <>
            <svg width="100%" height="100vh">
                <path d={`M 0 ${windowDim.windowHeight/2} C ${windowDim.windowWidth/2} ${windowDim.windowHeight/2} ${windowDim.windowWidth/2} 0 ${windowDim.windowWidth/2} 0`} stroke="rgba(0, 0, 0, 0.145)" fill="transparent" strokeWidth="2" />
            </svg>
            <svg width="100%" height="100vh">
                <path d={`M ${windowDim.windowWidth/2} 0 C ${windowDim.windowWidth/2} ${windowDim.windowHeight/2} ${windowDim.windowWidth} ${windowDim.windowHeight/2} ${windowDim.windowWidth} ${windowDim.windowHeight/2}`} stroke="rgba(0, 0, 0, 0.145)" fill="transparent" strokeWidth="2" />
            </svg>
            <svg width="100%" height="100vh">
                <path d={`M 0 ${windowDim.windowHeight/2} C ${windowDim.windowWidth/2} ${windowDim.windowHeight/2} ${windowDim.windowWidth/2} ${windowDim.windowHeight} ${windowDim.windowWidth/2} ${windowDim.windowHeight}`} stroke="rgba(0, 0, 0, 0.145)" fill="transparent" strokeWidth="2" />
            </svg>
            <svg width="100%" height="100vh">
                <path d={`M ${windowDim.windowWidth} ${windowDim.windowHeight/2} C ${windowDim.windowWidth/2} ${windowDim.windowHeight/2} ${windowDim.windowWidth/2} ${windowDim.windowHeight} ${windowDim.windowWidth/2} ${windowDim.windowHeight}`} stroke="rgba(0, 0, 0, 0.145)" fill="transparent" strokeWidth="2" />
            </svg>
        </>
    )
}

export default SVGBackground;