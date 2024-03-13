import './About.css'
import svgOne from './assets/1.svg'

function About (){
    return(
        <>
        <div className="Container">
            <div className="aboutMyself">
                <h1>About Myself</h1>
                <p className='selfp'>Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
                <p className='selfp2'>LET'S CONNECT</p>
                <div className="Icons2">
                {/* <img src='./src/assets/1.svg'/> */}
                <img src={svgOne} alt="" />
                <img src='./src/assets/2.svg'/>
                <img src='./src/assets/3.svg'/>
                <img src='./src/assets/4.svg'/>
                <img src='./src/assets/5.svg'/>
            </div>
            <button>Get my resume</button>
            </div>

            <div className="Languages">
                <div className="lagDrop">
                    <p>Languages</p>
                    <img src='./src/assets/down-arrow.png'/>
                </div>
                <div className="lagIicon">
                <img src='./src/assets/js.svg'/>
                <img src='./src/assets/html5.svg'/>
                <img src='./src/assets/css.svg'/>

                </div>
                <div className="frameicon">
                    <p>FRAMEWORKS</p>
                    <img src='./src/assets/down-arrow (1).png'/>
                </div>
                <hr/>

                <div className="skillicon">
                    <p>Skils</p>
                    <img src='./src/assets/down-arrow (1).png'/>
                </div>
                <hr/>

            </div>

        </div>
        
        </>
    )
}





export default About