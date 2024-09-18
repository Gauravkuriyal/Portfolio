import "./css/LandingPage.css"
import SVGBackground from "./utils/SVGBackground";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./utils/Button";

function LandingPage() {
    useGSAP(()=>{
        let tl2 = gsap.timeline();
        tl2.from(".LandingPage .content>div:nth-child(1)",{
            opacity:0,
            x:-100,
            duration:1,
        },"same")
        tl2.from(".LandingPage .content .imageContainer img:nth-child(1)",{
            opacity:0,
            x: -1000,
            ease:'elastic.inOut',
            duration:1,
        },"same")
        tl2.from(".LandingPage .content .imageContainer img:nth-child(2)",{
            opacity:0,
            x: 100,
            duration:1,
        },"same")
        // tl2.from(".LandingPage .content .imageBack",{
        //     x:-1000,
        //     opacity:0,
        //     duration:1
        // },"same")
    })
    const svgStyle = {
        transition: "all 0.3s ease 0s",
    }
    return(
        <>
        <section className="LandingPage">
            <div className="background">
                <SVGBackground />
            </div>
            <div className="content" >
                <div>
                    <h1>
                        Hey, there 👋<br />
                        I'm <span>Gaurav</span>
                    </h1>
                    <p>
                        A web developer and C++ programmer passionate about creating dynamic, responsive websites and solving challenging problems.                    </p>
                        <a href="/resume/Gaurav Kuriyal Resume.pdf" download={"Gaurav Kuriyal Resume.pdf"}><Button text="Resume"/></a>
                </div>
                <div className="imageContainer">
                    
                    <img id="sw-js-blob-svg" src="/images/LandingImage.svg" alt="" />
                    <img src="/images/Gaurav.png" alt="Gaurav" />
                </div>
            </div> 
        </section>
        </>
    )
}

export default LandingPage;