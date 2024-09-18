import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Range(props) {
    let thumb = useRef();
    let data = {
        width : props.value || 50,
        imagePath : props.imagePath || "c++.png",
    } 
    useGSAP(()=>{
        gsap.to(thumb.current,{
            width : `${data.width}%`,
            duration : 2,
        })
    })
    const ThumbStyle = {
        background : props.color|| "green",
    }
    return(
        <>
            <div className="container">
                <div style={ThumbStyle} ref={thumb} className="thumbContainer">

                </div>
                <img src={`images/${data.imagePath}`} height={"40px"} alt="" />
            </div>
        </>
    )
}

export default Range;