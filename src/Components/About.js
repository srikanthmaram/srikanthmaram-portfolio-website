import '../Styles/About.css';
import { useState } from 'react';
import Experience from './Experience';
import Education from './Eduction';
import Myskills from './Myskills';
import Achievements from './Achievements';

function About() {
    const [content, setcontent] = useState("Experience");

    return <>
        <div className="About-container">
            <div className="About-card_container">
                <div className="About-img_container">
                </div>
                <div className="About-content_container">
                    <div className='About-sections_container'>
                        <p id={content === "Education" ? 'selected' : ''} onClick={() => setcontent("Education")}>Education</p>
                        <p id={content ==="Experience" ? 'selected' : ''} onClick={() => setcontent("Experience")}>Experience</p>
                        <p id={content === "My Skills" ? 'selected' : ''} onClick={() => setcontent("My Skills")}>My Skills</p>
                        <p id={content === "Achievements" ? 'selected' : ''} onClick={() => setcontent("Achievements")}>Achievements</p>
                    </div>
                    <div className='About-content'>
                        {content ==="Experience" && <Experience />}
                        {content === "Education" && <Education />}
                        {content ==="My Skills" && <Myskills />}
                        {content ==="Achievements" && <Achievements />}
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default About;