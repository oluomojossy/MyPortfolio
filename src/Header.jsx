import './Header.css'
import list from './assets/list.png'


function Header(){
    return(
        <>
     <div className="Header">
        <div className="left">
            <p>Joseph A.</p>
        </div>
        <div className="listDiv">
            <img src={list} alt="" />

        </div>
        <div className="right">
            <p>Portfolio</p>
            <p>About</p>
            <p>Contact</p>
        </div>
     </div>
        
        </>
    )
}




export default Header