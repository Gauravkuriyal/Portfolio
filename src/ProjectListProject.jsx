import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import Button from "./utils/Button";

function Project(props) {
    const videoRef = useRef(null);
    const projectRef = useRef(null);
    useGSAP(()=>{
        gsap.to(videoRef.current,{
            scrollTrigger :{
                trigger:videoRef.current,
                start: 'top 10%',
                onEnter : ()=>{
                    videoRef.current.play();
                },
                onLeave : ()=>{
                    videoRef.current.pause();
                },
                onEnterBack :()=>{
                    videoRef.current.play();
                },
                onLeaveBack :()=>{
                    videoRef.current.pause();
                },
                pin:true,
            }
        })
    })
    return(
        <>
            <div ref={projectRef} className="Project">
                <video ref={videoRef} className="Video" muted>
                    <source src={`/videos/${props.VideoPath || Cryptosafe.mp4}`} type="video/mp4" />
                </video>
                <div className="ProjectInfo">
                    <h2>{`${props.ProjectName}`}</h2>
                    <p>
                        {props.Desc.split("\n").map(para => {
                            return (<>{para} <br/></>)
                        })}
                        <br />
                        <a href={props.link}><Button text={"Get Link"} back={"lightgray"}/></a>
                    </p>
                </div>
                
            </div>
        </>
    )
}

export default Project;
