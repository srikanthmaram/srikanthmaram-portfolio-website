import '../Styles/Achievements.css';
import badge from '../Images/badge.png';
function Achievements() {
    return <>
        <div className='achievements-container'>
            <div className='achievements-header'>
                <h3>Achievements : </h3>
            </div>
            <hr className='horizontal-line'/>
            
            <div className='achievements'>
                <div className='achievement-container'>
                    <img src={badge} alt='badge' /> <h5>Secured a ranking of 1004 out of 100000 participants in TCS Codevita Season
10, showcasing exceptional problem-solving and coding skills.</h5>
                </div>
                <div className='achievement-container'>
                    <img src={badge} alt='badge' /> <h5>
Awarded second place in the HITAM Project Expo 2022 for creating a robust
ESIC Hostel/Quarters Management System.</h5>
                </div>
                <div className='achievement-container'>
                    <img src={badge} alt='badge' /> <h5>Earned 2 Stars and 1572 rating on Codechef.</h5>
                </div>
                <div className='achievement-container'>
                    <img src={badge} alt='badge' /> <h5>Completed over 200 programming challenges on Leetcode.</h5>
                </div>
            </div>
        </div>
    </>
}
export default Achievements;