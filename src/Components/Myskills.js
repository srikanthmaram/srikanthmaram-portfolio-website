import '../Styles/Myskills.css';
import c_logo from '../Images/C_language.png';
import cpplogo from '../Images/c++.jpg';
import javalogo from '../Images/java-logo.png';
import html_logo from '../Images/html.png';
import css_logo from '../Images/css.png';
import javascript from '../Images/javascript_logo.png';
import React_logo from '../Images/react.png';
import springboot_logo from  '../Images/springboot.png';
import php_logo from '../Images/php.png';
import bootstrap_lgo from '../Images/bootstrap.jpeg';
import mysql_logo from '../Images/mysql.png';

function Myskills()
{

    return<>
    <div className='Myskills-container'>
    <div className='Myskills-header'>
            <h3>My Skills : </h3>
         </div>
         <div className='Myskills-content-container'>
        <img src={c_logo} alt='c' height={'62px'} width={'58px'}/>
        <img src={cpplogo} alt='cpp' height={'67px'} width={'67px'} />
        <img src={javalogo} alt='java' height={'67px'} width={'89px'}/>
        <img src={html_logo} alt='html' height={'68px'} width={'83px'}/>
        <img src={css_logo} alt='css' height={'66px'} width={'66px'} />
        <img src={javascript} alt='javascript' height={'67px'} width={'70px'}/>
        <img src={React_logo} alt='rect' height={'72px'} width={'100px'} />
        <img src={springboot_logo} alt='springboot' height={'70px'} width={'102px'}/>
        <img src={php_logo} alt='php' height={'64px'} width={'102px'}/>
        <img src={mysql_logo} alt='mysql'height={'64px'} width={'110px'} />
        <img src={bootstrap_lgo} alt='boostrap'height={'60px'} width={'75px'} />

    </div>
    </div>
    </>
}
export default Myskills;