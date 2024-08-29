import React,{ useEffect, useRef } from 'react'
import './Skills.css'
import shape1 from '../../assets/shape1.jpg'
import my_skills from '../../assets/my_skills' // Import JSON file

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const element = skillsRef.current;
        const rect = element.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (inView) {
          element.classList.add('animate');
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div id='skills' ref={skillsRef} className='skills'>
       <div className="skill-title">
        <h1>My Skills</h1>
        <img src={shape1} alt="Decorative shape" />
       </div>

       <div className="skill-container">
           {my_skills.map((skill) => (
               <div key={skill.id} className="skill-format">
                   <p>{skill.name}</p>
                   <img src={skill.image} alt={skill.name} />
               </div>
           ))}
       </div>
    </div>
  )
}

export default Skills

