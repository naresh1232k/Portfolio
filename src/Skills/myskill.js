import './myskill.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/js.png';
import bootstrap from '../assets/bootstrap.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import github from '../assets/github.png';
import git from '../assets/Git-Icon.png';

const Myskill = () => {
  return (
    <section id='skills'>

     <div className='skill-div'>
      <img  className='skill-img' src={html} alt='img'/>
      <img className='skill-img' src={css} alt='img'/>
      <img className='skill-img' src={javascript} alt='img'/>
      <img className='skill-img' src={bootstrap} alt='img'/>
      <img className='skill-img' src={python} alt='img'/>
      <img className='skill-img' src={java} alt='img'/>
      <img className='skill-img' src={git} alt='img'/>
      <a  href="https://github.com/naresh1232k">
      <img id='github' className='skill-img' src={github} alt='img'/>
      </a>

     </div>

    </section>
  )
}

export default Myskill;