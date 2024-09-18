import Button from "./utils/Button";
import "./css/Header.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Header() {
    useGSAP(
        ()=>{
            let tl1 = gsap.timeline();
            
            tl1.from(".headerTitle",{
                opacity:0,
                x:-100,
                duration:0.5
            })
            tl1.from("header .headerPart2 li",{
                opacity:0,
                y:-100,
                duration:0.2,
                stagger:0.1
            })
            tl1.from("header .headerPart3",{
                opacity:0,
                scale:0,
                duration:0.2,
                stagger:0.1
            })

            tl1.to("header",{
                backdropFilter : "blur(5px)",
                background : "rgba(255, 255, 255, 0.485)",
                duration:1,
            })
        }
    )
    let toggle = false;
    function showHeaderList() {
        if (!toggle) {
            gsap.to("header .headerList",{
                height : "300%",
                duration : 0.5
            })
            gsap.from("header .headerList li",{
                x : -100,
                opacity : 0,
                stagger : 0.12,
                duration : 0.5
            })
            toggle = true;
        }
        else{
            gsap.to("header .headerList",{
                height : "0%",
                duration : 0.5
            })
            toggle = false;
        }
    }

    document.addEventListener("click",(e)=>{
        if (e.target != document.querySelector("header .headerPart2Button") && toggle == true) {
            showHeaderList()
        }
    })

    return (
        <>
        <header>
            <div className="headerTitle">
                <a href="/">GAURAV</a>
            </div>
            <div className="headerPart2">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="./projects">Projects</a></li>
                </ul>
            </div>
            <div className="headerPart2Button" onClick={showHeaderList}>

            </div>
            <div className="headerList">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="./projects">Projects</a></li>
                </ul>
            </div>
            <div className="headerPart3">
                <a href="mailto:gauravkuriyal03@gmail.com" >
                    <Button text="Contact" fontSize="15px"/>
                </a>
            </div>
        </header>
        </>
    )
}

export default Header;
