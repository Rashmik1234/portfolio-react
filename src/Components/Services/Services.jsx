import React, {useEffect,useRef} from 'react'
import './Services.css'
import shape1 from '../../assets/shape1.jpg'
import Services_Data from '../../assets/services_data'

const Services = () => {
  const heroRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const element = heroRef.current;
        const rect = element.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (inView) {
          element.classList.add('animate');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Trigger once on mount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div ref={heroRef} id='services' className='services'>
        <div className="services_title">
            <h1>My Services</h1>
            <img src={shape1} alt="" />
        </div>

        <div className="services-container">
                
                {Services_Data.map((Service,index)=>{
                    return <div  key={index} className='services-format'>
                        <h3>{Service.s_no}</h3>
                        <h2>{Service.s_name}</h2>
                        <p>{Service.s_desc}</p>
                       
                   
                    </div>


                })}
        </div>

    </div>
  )
}

export default Services