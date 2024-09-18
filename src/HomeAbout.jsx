import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function HomeAbout() {
    const homeAboutRef = useRef(null);
    useGSAP(() => {
        gsap.from(homeAboutRef.current, {
            y: 100,
            duration: 1.5,
            opacity: 0,
            scrollTrigger: {
                trigger: homeAboutRef.current,
                start: "top 70%"
            }
        })
    })
    return (
        <>
            <section ref={homeAboutRef} className="HomeAbout">
                <h3>About <span>Me!</span> <a href="/about">↗</a></h3>
                <p>
                    Hi, I'm Gaurav, a passionate web developer and problem solver with a strong foundation in C++. I specialize in creating responsive, dynamic websites that deliver seamless user experiences. My expertise in full-stack development allows me to work across various technologies, bringing creative ideas to life with precision. With a knack for solving complex coding challenges, I take pride in writing clean, efficient code. I'm always eager to explore new technologies and push the boundaries of what's possible in web development. Let's build something great together!
                </p>
            </section>
        </>
    )
}

export default HomeAbout;