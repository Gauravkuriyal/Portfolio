import { useGSAP } from "@gsap/react";
import "./css/AboutApp.css";
import gsap from "gsap";

function AboutApp() {
    useGSAP(() => {
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".AboutApp",
                scrub: 2,
                start: "top 0",
                pin: true,
            }
        });
        tl1.to((".AboutApp .heading .Out"), {
            rotateY: "360deg",
            color: "transparent",
            background: "transparent",
            stagger: 0.2,
        },"same")

        tl1.to(".AboutApp .heading .In", {
            color : "black",
            rotateY: "0deg",
            stagger : 0.2,
        },"same")
    })
    return (
        <>
            <section className="AboutApp">
                <div className="heading">
                    <div className="upper">
                        <span className="Out">H<span className="In">G</span></span>
                        <span className="Out">E<span className="In">A</span></span>
                        <span className="Out">L<span className="In">U</span></span>
                        <span className="Out">L<span className="In">R</span></span>
                        <span className="Out">O<span className="In">A</span></span>
                        <span className="Out">,<span className="In">v</span></span>
                    </div>
                    
                    <div className="lower">
                        <span className="Out">T<span className="In">H</span></span>
                        <span className="Out">H<span className="In">E</span></span>
                        <span className="Out">E<span className="In">R</span></span>
                        <span className="Out">R<span className="In">E</span></span>
                        <span className="Out">E<span className="In"> </span> </span>
                        <span className="Out">!<span className="In"> </span> </span>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default AboutApp;