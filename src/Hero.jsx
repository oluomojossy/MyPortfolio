import './Hero.css'
import svgOne from './assets/1.svg'
import svgTwo from './assets/2.svg'
import svgThree from './assets/3.svg'
import svgFour from './assets/4.svg'
import svgFive from './assets/5.svg'

function Hero () {
    return(
        <>
        <div className="HeroContainer">
            <div className="HeroD">
            <div className="Text">
                <h1>I’m Joseph<br/>
Glad to see you!</h1>
<p className='p11'>I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
            <p className='p2'>LET'S CONNECT</p>
            </div>
            <div className="Icons">
            <img src={svgOne} alt="" />
                <img src={svgTwo} alt="" />
                <img src={svgThree} alt="" />
                <img src={svgFour} alt="" />
                <img src={svgFive} alt="" />
            </div>
            </div> 


        </div>
        
        
        
        </>
    )
}



export default Hero