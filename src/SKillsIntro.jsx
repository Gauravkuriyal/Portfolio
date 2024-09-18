import "./css/Skills.css";
import Range from "./utils/Range";

function SkillsIntro() {
    return(
        <>
            <section className="SkillsIntro">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis blanditiis cum architecto. Officiis quos doloribus voluptates maiores non perspiciatis omnis libero. Expedita doloremque fugiat maxime maiores cum alias ipsum et?
                <ul>
                    <li><p>HTML</p> <Range value="70" imagePath="html.png" color="skyblue" /></li>
                    <li><p>CSS</p> <Range value="60" imagePath="CSS.png" color="yellow" /></li>
                    <li><p>Javascript</p> <Range value="75" imagePath="JavaScript.png" color="violet" /></li>
                    <li><p>C</p> <Range value="80" imagePath="c-programming.png" color="blue" /> </li>
                    <li><p>C++</p><Range value="65" imagePath="c++.png" color="blueviolet" /> </li>
                    <li><p>NodeJs</p> <Range value="80" imagePath="nodejs.png" color="green" /></li>
                    <li><p>ReactJs</p> <Range value="65" imagePath="react.png" color="blue" /></li>
                    <li><p>Python</p> <Range value="55" imagePath="python.png" color="orange" /></li>
                    <li><p>Django</p><Range value="67" imagePath="django.png" color="brown" /></li>
                    <li><p>MongoDb</p><Range value="88" imagePath="mongodb.png" color="teal" /></li>
                </ul>
            </section>
        </>
    )
}

export default SkillsIntro;