import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./utils/Button";
function AboutScroll() {

    useGSAP(() => {
        let scrollTween = gsap.to(".AboutScroll", {
            translateX: `-${2 * document.querySelector(".AboutScroll").offsetWidth}px`,
            scrollTrigger: {
                trigger: ".AboutScroll",
                start: `top -${document.querySelector(".AboutScroll .AboutInfo").offsetHeight > window.innerHeight?document.querySelector(".AboutScroll .AboutInfo").offsetHeight - window.innerHeight : 0}px`,
                scrub: 1,
                pin: true,
                snap: [0, 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1]
            }
        })
        gsap.to(".AboutScroll .part2 img", {
            scrollTrigger: {
                trigger: ".AboutScroll .part2 img",
                start: "left 80%",
                end: "left 50%",
                scrub: 1,
                containerAnimation: scrollTween,
            }
        })
    })

    return (
        <>
            <section className="AboutScroll">
                <div className="AboutInfo">
                    Hello! I'm Gaurav, a dedicated web developer with a strong command of both front-end and back-end technologies. I specialize in building responsive, dynamic websites that are visually appealing and also offer a seamless user experience. With a solid foundation in the MERN stack, I enjoy crafting intuitive user interfaces, developing robust back-end systems, and ensuring optimized performance across platforms.
                    <br />
                    <br />
                    Apart from web development, I am proficient in C++ and have honed my skills in problem-solving and algorithmic challenges. Whether it's coding efficient solutions or debugging complex issues, I thrive on overcoming challenges with precision and creativity. My background in full-stack development allows me to tackle projects from both a technical and design perspective, ensuring well-rounded, scalable solutions.
                    <br />
                    <br />

                    I'm constantly exploring new technologies, always looking for ways to improve my craft and deliver high-quality work. If you're looking for someone who’s passionate about web development and solving complex problems, I’m eager to collaborate and bring innovative ideas to life.
                </div>
                <div className="part2">
                    <h3>Get in Touch</h3>
                    <div className="contactCard">
                        <div className="contact">
                            <p>LinkedIn</p> <a href="https://www.linkedin.com/in/gaurav-kuriyal-ba166530a/"><img height={"40px"} src="/icons/linkedinColor.svg" alt="LinkedIn" /></a>
                        </div>
                        <div className="contact">
                            <p>Github</p> <a href="https://github.com/Gauravkuriyal"><img height={"40px"} src="/icons/github-brands-solid.svg" alt="Github" /></a>
                        </div>
                        <div className="contact">
                            <p>gauravkuriyal03@gmail.com</p> <a href="#"><img height={"40px"} src="/icons/mailIcon.png" alt="Mail" /></a>
                        </div>
                    </div>
                </div>
                <div className="part3" style={{ "textAlign": "center" }}>
                    <h3>Contact Me...</h3>
                    <div className="info">
                        <form action="">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="E-mail" />
                            <input type="text" placeholder="Subject" />
                            <textarea name="Message" id="Message" placeholder="Message"></textarea>
                            <Button text="Send mail" fontSize="clamp(10px,2vw,15px)" color="black" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutScroll;