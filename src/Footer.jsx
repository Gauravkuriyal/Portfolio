import { useGSAP } from "@gsap/react";
import "./css/Footer.css";
import Button from "./utils/Button";
import gsap from "gsap";

function Footer() {
    useGSAP(()=>{
        gsap.to("body",{
            background:"#282c35",
            duration : 1,
            scrollTrigger : {
                trigger : "footer",
                start: "top 70%",
                end : "bottom 100%",
                scrub : 2,
            }
        })
    })
    return (
        <>
            <footer>
                <hr />
                <div className="FooterContent">
                    <div className="footerText">
                        <span>Connect</span>
                        <span>with</span>
                        <span>me!</span>
                    </div>
                    <svg className="footer-arrow" version="1.1" viewBox="0 0 800 800">
                        <g className="footer-arrow" strokeWidth="10" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(1,0,0,1,38,0)">
                            <path d="M183.58029174804688 228.92651176452637Q946.5802917480469 145.92651176452637 364.5802917480469 409.92651176452637Q101.58029174804688 532.9265117645264 545.5802917480469 590.9265117645264 " markerEnd="url(#SvgjsMarker4494)">
                            </path>
                        </g>
                        <defs>
                            <marker markerWidth="4.5" markerHeight="4.5" refX="2.25" refY="2.25" viewBox="0 0 4.5 4.5" orient="auto" id="SvgjsMarker4494">
                                <polygon points="0,4.5 2.25,2.25 0,0 4.5,2.25" fill="hsl(227, 71%, 57%)">
                                </polygon>
                            </marker>
                        </defs>
                    </svg>
                    <div className="connect">
                        <div>
                            <a href="https://www.linkedin.com/in/gaurav-kuriyal-ba166530a/"><img src="/icons/linkedinColor.svg" alt="LinkedIn" width={"30px"} /></a>
                            <p>LinkedIn</p>
                        </div>
                        <div>
                            <a href="https://github.com/Gauravkuriyal"><img src="/icons/github-white.svg" alt="Github" width={"30px"} /></a>
                            <p>Github</p>
                        </div>
                        <div>
                            <a href="mailto:gauravkuriyal03@gmail.com">
                                <Button text="Send Mail" back="black" border="2px solid white" color="white" fontSize="clamp(12px,2vw,20px)" padding="10px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="NameBranding">
                    GAURAV
                </div>
            </footer>
        </>
    )
}

export default Footer;
