import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function InfoCards() {
    function disperseSkill() {
        let skills = document.querySelectorAll(".SkillBanner img");
        skills.forEach((skill)=>{
            skill.style.transform = `translate(${Math.floor(-100 + Math.random()*200)}vh,${Math.floor(-100 + Math.random()*200)}vh)`;
            skill.style.opacity = 0;
        })
    }
    useEffect(()=>{
        return disperseSkill;
    },[]); 

    useGSAP(()=>{
        gsap.from(".InfoCards .cards:nth-child(even)",{
            x:1000,
            opacity:0,
            duration:1,
            stagger:0.5,
            scrollTrigger:{
                trigger: ".InfoCards",
                start: "top 80%",
                end: "top 30%",
                scrub:2,
            }
        })
        gsap.from(".InfoCards .cards:nth-child(odd)",{
            x:-1000,
            opacity:0,
            duration:1,
            stagger:0.5,
            scrollTrigger:{
                trigger: ".InfoCards",
                start: "top 80%",
                end: "top 30%",
                scrub:2,
            }
        })
        gsap.to(".SkillBanner img",{
            x:0,
            y:0,
            opacity : 1,
            ease:"elastic.out" ,
            scrollTrigger:{
                trigger: ".SkillBanner",
                end:"top 20%",
                scrub : 2,
            }
        })
    })
    disperseSkill();
    return(
        <>
        <section className="InfoCards">
            <div className="cards">Crafting responsive and dynamic websites</div>
            <div className="cards">Skilled in developing web application with MERN Stack</div>
            <div className="cards">Building RESTful APIs with Node.js and Express</div>
            <div className="cards">Versatile in Python for Backend development</div>
            <div className="cards">Profficient in C++ programming and algorithm design</div>
            <div className="cards">5 🌟 C and C++ developer on HackerRank</div>
            <div className="cards">Adept at problem solving and critical thinking</div>
            <div className="cards">Dedicated to continuous learning and improvement</div>
        </section>
        <section className="SkillBanner">
            <img src="/images/html.png" alt="HTML" />
            <img src="/images/CSS.png" alt="CSS" />
            <img src="/images/c-programming.png" alt="C-Programming" />
            <img src="/images/c++.png" alt="C++" />
            <img src="/images/JavaScript.png" alt="JavaScript" />
            <img src="/images/python.png" alt="Python" />
            <img src="/images/django.png" alt="Django" />
            <img src="/images/nodejs.png" alt="Nodejs" />
            <img src="/images/mongodb.png" alt="MongoDB" />
            <img src="/images/react.png" alt="React" />
        </section>
        </>
    )
}

export default InfoCards;