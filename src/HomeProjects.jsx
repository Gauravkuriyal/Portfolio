import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Project from "./ProjectListProject";

function HomeProjects() {
    useGSAP(()=>{
        gsap.from(".HomeProjects",{
            y : 100,
            duration : 1.5,
            opacity : 0,
            scrollTrigger : {
                trigger : ".HomeProjects",
                start : "top 90%"
            }
        })
        gsap.to("#root",{
            func : ()=>{
                gsap.to(".HomeProjects h3, .HomeProjects h3 a",{
                    color : 'var(--light-color)',
                    duration :1,
                })
            },
            duration : 1,
            scrollTrigger : {
                trigger : ".HomeProjects",
                scrub : 2,
                start : "top 50%",
                end : "bottom 50%",
                onEnter : ()=>{
                    document.getElementById("root").style = "background : #282c35";
                },
                onEnterBack : ()=>{
                    document.getElementById("root").style = "background : #282c35";
                },
                onLeaveBack : ()=>{
                    document.getElementById("root").style = "";
                },
            } 
        })
    })

    return (
        <>
            <section className="HomeProjects">
                <h3>Works <a href="/projects">↗</a></h3>
                <div className="projects">
                    <div className="project">
                        <a href="www.ninetalespublishings.com"><img src="/images/Ninetales.png" alt="Ninetales" loading="lazy" /></a>
                        <p> <span>Ninetales</span><br />A  fully responsive website for publishing house called Ninetales Publishings using Node and Express as backend and Mongo Atlas as the database. Implemented user authentication and payment gateway, enhancing user experience and security</p>
                    </div>
                    <div className="project">
                        <a href="https://github.com/Gauravkuriyal/Cryptosafe"><img src="/images/Cryptosafe.png" alt="Cryptosafe" loading="lazy" />
                        <p> <span>Cryptosafe</span><br />Cryptosafe is a secure platform built using Django, where users can store their data in encrypted form. It encrypts data with the use of multiple encryption techniques and have proper authorization methods implemented.</p></a>
                    </div>
                    <div className="project">
                        <a href="https://gauravkuriyal.github.io/Bounce-ball/"><img src="/images/Bounceball.png" alt="Bounceball" loading="lazy" /></a>
                        <p> <span>Bounceball</span><br />Welcome to the Bouncing Ball game! This is a web-based game inspired by the classic Flappy Bird, where a ball falls by default, and you can make it fly using the up arrow key. The objective is to navigate the ball through the gaps in the scrolling pillars. The game is created using HTML, CSS, and JavaScript and can be played directly in your web browser.</p>
                    </div>
                    <div className="project">
                        <a href="https://gauravkuriyal.github.io/Minesweeper/"><img src="/images/Minesweeper.png" alt="Minesweeper" loading="lazy" /></a>
                        <p> <span>Minesweeper</span><br />Welcome to the Minesweeper game! This is a web-based implementation of the classic Minesweeper game, created using HTML, CSS, and JavaScript. The game can be played directly in your web browser.</p>
                    </div>
                    <div className="project">
                        <a href="https://gauravkuriyal.github.io/Weather-Forecast/"><img src="/images/Weather-Forecast.png" alt="Ninetales" loading="lazy" /></a>
                        <p> <span>Weather Forecast</span><br />A webpage based apllication which provides weather details like temperature, rainfall, humidity, wind speed, and more by entering City Name. It makes use of HTML, CSS and JavaScript with help of API calling.</p>
                    </div>
                    <div className="project">
                        <a href="https://gauravkuriyal.github.io/Snake-Game/"><img src="/images/Snake.png" alt="Snake" loading="lazy" /></a>
                        <p> <span>Snake</span><br />Welcome to the classic Snake game! This is a web-based implementation of the popular Snake game, created using HTML, CSS, and JavaScript. The game can be played directly in your web browser.</p>
                    </div>
                    <div className="project">
                        <a href="https://gauravkuriyal.github.io/Tic-Tac-Toe/"><img src="/images/TicTacToe.png" alt="TicTacToe" loading="lazy" /></a>
                        <p> <span>Tic Tac Toe</span><br />Welcome to the Tic Tac Toe game! This is a simple web-based implementation of the classic Tic Tac Toe game, created using HTML, CSS, and JavaScript. The game can be played by two players on the same device.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeProjects;
