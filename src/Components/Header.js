import { Link } from 'react-router-dom';
import '../Styles/Header.css'

function Header()
{
    return<>
    <div className='Header-container'>
        <div className='Name-container'>
            Srikanth Maram
        </div>
        <div className='Nav-bar-container'>
          <Link to={"/"} ><h5>Home</h5></Link>
           <Link to={"/about"}><h5>About Me</h5></Link>
           <Link to={"/mywork"}><h5>My Work</h5></Link>
           <Link to={"/contact"}><h5>Contact Me</h5></Link>
        </div>
</div>
    </>
}
export default Header;