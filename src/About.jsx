import './About.css'
import svgOne from './assets/1.svg'
import svgTwo from './assets/2.svg'
import svgThree from './assets/3.svg'
import svgFour from './assets/4.svg'
import svgFive from './assets/5.svg'
import java from './assets/js.svg'
import html from './assets/html5.svg'
import css from './assets/css.svg'
import downArrow from './assets/down-arrow.png'
import downArrowOne from './assets/down-arrow (1).png'

function About (){
    return(
        <>
        <div className="Container">
            <div className="aboutMyself">
                <h1>About Myself</h1>
                <p className='selfp'>Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
                <p className='selfp2'>LET'S CONNECT</p>
                <div className="Icons2">
                <img src={svgOne} alt="" />
                <img src={svgTwo} alt="" />
                <img src={svgThree} alt="" />
                <img src={svgFour} alt="" />
                <img src={svgFive} alt="" />
              
            </div>
            <button>Get my resume</button>
            </div>

            <div className="Languages">
                <div className="lagDrop">
                    <p>Languages</p>
                <img src={downArrow} alt="" />
                </div>
                <div className="lagIicon">
              
                <img src={java} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />

                </div>
                <div className="frameicon">
                    <p>FRAMEWORKS</p>
                <img src={downArrowOne} alt="" />
                </div>
                <hr/>

                <div className="skillicon">
                    <p>Skils</p>
                <img src={downArrowOne} alt="" />

                </div>
                <hr/>

            </div>

        </div>
        
        </>
    )
}





export default About