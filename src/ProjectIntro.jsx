import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectIntro() {
    useGSAP(()=>{
        gsap.from(".ProjectIntro .heading span",{
            y : 200,
            duration:0.5,
            stagger:0.1
        })
    })
    return (
        <>
            <section className="ProjectIntro">
                <div className="heading">
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>J</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>
                    <span>S</span>
                </div>
                <p>
                    Showcasing my journey through innovative projects that blend with cutting-edge web development
                </p>
            </section>
        </>
    )
}

export default ProjectIntro;