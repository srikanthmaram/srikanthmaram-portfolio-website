import '../Styles/Home.css';
import srikanth from '../Images/SRIKANTH.gif';


function Home() {
    return <>
        <div className='Home-container'>
            <div className='Intro_container'>
                <div className='Intro-card_container'>
                    <div className='Intro-header'>
                    <p>Hello! Everyone</p>
                    <div className="waviy">
                        <span style={{ '--i': 1 }}>W</span>
                        <span style={{ '--i': 2 }}>e</span>
                        <span style={{ '--i': 3 }}>l</span>
                        <span style={{ '--i': 4 }}>c</span>
                        <span style={{ '--i': 5 }}>o</span>
                        <span style={{ '--i': 6 }}>m</span>
                        <span style={{ '--i': 7 }}>e</span>
                    </div>
                    <p>to My E-Portfolio Website.Thanks for stopping by...</p>
                    </div>
                    <div className='Intro-paragraph'>
                        I'm Srikanth Maram, an undergraduate student with a passion for web and app development. 
                        I have experience in competitive coding on platforms such as Codechef and Leetcode.
                         I'm currently seeking software engineering roles to further enhance my skills and contribute to innovative projects. Let's connect and create something amazing together!
                    </div>
                </div>
                <div className='Image_container'>
                    <img src={srikanth} alt='srikanth' />
                </div>
            </div>
        </div>
    </>
}
export default Home;