import './Footer.css'

function Footer(){
    return(
        <>
    <div className="FooterContainer">
       <div className="footerDiv">
       <h1>Contact me</h1>
        <p>If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it</p>
        <input className='input1' placeholder='Name'/>
        <input className='input2' placeholder='example@gmail.com'/>
        <input className='input3' placeholder='Write your message here...'/>
        <button>Get In Touch</button>
        <hr/>
       </div> 
    </div>
        
        
        </>
    )
}



export default Footer