//import React from 'react'
import book from '../assets/Images/book.png'
import habitude from '../assets/Images/habitude.png'
import noteTaker from '../assets/Images/notetaker.png'
import burger from '../assets/Images/burger.png'
import ET from '../assets/Images/ET.png'
import weather from '../assets/Images/weather.png'
import html from '../assets/Images/html.png'
import quiz from '../assets/Images/quiz.png'
import workDay from '../assets/Images/work-day.png'
import pass from '../assets/Images/pass.png'
import './portfolio.css'


function portfolio() {

    return (
        <div className="projects">
            <div className="row project-flex">
                <div className="P-link">
                    <img id="habitude" className="myLink" src={habitude} alt="Habitude Image" />
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://github.com/carolinetwyman/Habitude">Github</a>
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://habitudeapp.herokuapp.com/">Deployed</a>
                </div>
                <div className="P-link">
                    <img id="book" className="myLink" src={book} alt="Book-Market Image " />
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://github.com/marimartin/Book-Market">Github</a>
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://marimartin.github.io/Book-Market/">Deployed</a>
                </div>
            </div>
            <div className="row project-flex">
                <div className="P-link">
                    <img id="note" className="myLink" src={noteTaker} alt="Note-Taker Image" />
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://github.com/Bbeyenene/Note-Taker"> Github</a>
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://infonotebook.herokuapp.com/">Deployed</a>
                </div>
                <div className="P-link">
                    <img id="burger" className="myLink" src={burger} alt="Burger-Yummy Image" />
                    <a className="btn btn-warning " rel="noopener" target="_blank" href="https://github.com/Bbeyenene/Burger-Yummy">Github</a>
                    <a className="btn btn-warning btn-lg " rel="noopener" target="_blank" href="https://burgeryammy.herokuapp.com/">Deployed</a>
                </div>
            </div>
            <div className="row project-flex">
                <div className="P-link">
                    <img id="burger" className="myLink" src={ET} alt="Employee-Tracker Image" />
                    <a class="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://github.com/Bbeyenene/Employee-Tracker">Github </a>
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="#">No Deployed</a>
                </div>
                <div className="P-link">
                    <img id="weather" className="myLink" src={weather} alt="Weather-Forcast Image" />
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://github.com/Bbeyenene/Weather-Forcast">Github</a>
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://bbeyenene.github.io/Weather-Forcast/waz-app.html">Deployed</a>
                </div>
            </div>
            <div className="row project-flex">

                <div className="P-link">
                    <img id="team" className="myLink" src={html} alt="Generated html Image" />
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://github.com/Bbeyenene/Employee-Information-Template-Engine">Deployed</a>
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://bbeyenene.github.io/Employee-Information-Template-Engine/output/team.html">Deployed</a>
                </div>
                <div className="P-link">
                    <img id="quiz" className="myLink" src={quiz} alt="Code-Quize Image" />
                    <a class="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://github.com/Bbeyenene/Code-Quize">Github</a>
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://bbeyenene.github.io/Code-Quize/">Deployed</a>
                </div>
            </div>
            <div className="row project-flex">
                <div className="P-link">
                    <img id="work-day" className="myLink" src={workDay} alt="Work-Day-Scheduler Image" />
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://github.com/Bbeyenene/Work-Day-Scheduler">Github</a>
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://bbeyenene.github.io/Work-Day-Scheduler/">Deployed</a>
                </div>
                <div className="P-link">
                    <img id="pass" className="myLink" src={pass} alt="Password-generator Image" />
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://github.com/Bbeyenene/Passwor-generator">Github</a>
                    <a className="btn btn-warning btn-lg" rel="noopener" target="_blank" href="https://bbeyenene.github.io/Passwor-generator/password.html">Deployed</a>
                </div>
            </div>
        </div>
    )
}

export default portfolio;