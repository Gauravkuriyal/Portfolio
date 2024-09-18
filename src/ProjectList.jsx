import Project from "./ProjectListProject";

function ProjectList() {
    
    return (
        <>
            <section className="ProjectList">
                <Project link="https://www.ninetalespublishings.com/" VideoPath="Ninetales.mp4" ProjectName="Ninetales Publishings" Desc={`
                    A fully responsive website for publishing house called Ninetales Publishings using Node and Express as backend and Mongo Atlas as the database. Implemented user authentication and payment gateway, enhancing user experience and security. It also has e-commerce facility like add to cart option and order facility with an inbuilt bill generation system which generated bill as user places the order with appropriate details.`}/>
                <Project link="https://github.com/Gauravkuriyal/Cryptosafe" VideoPath="Cryptosafe.mp4" ProjectName="CryptoSafe" Desc={`
                    Cryptosafe is a secure platform built using Django, where users can store their data in encrypted form. Users provide their email for authentication, after which their data is encrypted and a unique key is provided to the user after encryption. The key is essential for decrypting and retrieving the data, and Cryptosafe ensures that even the system administrators cannot recover the original data if the key is lost. In case of unauthorized access, the data is locked, and the user is notified via provided email.`}/>
                <Project link="https://gauravkuriyal.github.io/Bounce-ball/" VideoPath="BouncingBall.mp4" ProjectName="Bouncing ball" Desc={`
                    Welcome to the Bouncing Ball game! This is a web-based game inspired by the classic Flappy Bird, where a ball falls by default, and you can make it fly using the up arrow key. The objective is to navigate the ball through the gaps in the scrolling pillars. The game is created using HTML, CSS, and JavaScript and can be played directly in your web browser.`}/>
                <Project link="https://gauravkuriyal.github.io/Snake-Game/" VideoPath="SnakeGame.mp4" ProjectName="Snake Game" Desc={`
                    Welcome to the classic Snake game! This is a web-based implementation of the popular Snake game, created using HTML, CSS, and JavaScript. The game can be played directly in your web browser.\n- Simple and intuitive user interface\n- Classic gameplay experience\n- Real-time update of game state\n- Increasing difficulty as the snake grows\n- Responsive design for different screen sizes`}/>
                <Project link="https://gauravkuriyal.github.io/Minesweeper" VideoPath="Minesweeper.mp4" ProjectName="Minesweeper" Desc={`
                    Welcome to the Minesweeper game! This is a web-based implementation of the classic Minesweeper game, created using HTML, CSS, and JavaScript. The game can be played directly in your web browser.\n- Simple and intuitive user interface\n- Classic Minesweeper gameplay\n- Multiple difficulty levels\n- Real-time update of game state\n- Responsive design for different screen sizes`}/>
                <Project link="https://gauravkuriyal.github.io/Weather-Forecast/" VideoPath="Weather-Forecast.mp4" ProjectName="Weather Forecast" Desc={`
                    A webpage based apllication which provides weather details like temperature, rainfall, humidity, wind speed, and more by entering City Name. It makes use of HTML, CSS and JavaScript with help of API calling.`}/>
                <Project link="https://gauravkuriyal.github.io/Tic-Tac-Toe" VideoPath="TicTacToe.mp4" ProjectName="Tic Tac Toe" Desc={`
                    Welcome to the Tic Tac Toe game! This is a simple web-based implementation of the classic Tic Tac Toe game, created using HTML, CSS, and JavaScript. The game can be played by two players on the same device.\n- Simple and intuitive user interface\n- Interactive gameplay for two players\n- Real-time update of game state\n- Highlighting the winning combination\n- Responsive design for different screen sizes`}/>
                
            </section>
        </>
    )
}

export default ProjectList;