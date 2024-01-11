import './Header.css'

function Header(){
    return(
        <>
     <div className="Header">
        <div className="left">
            <p>Joseph A.</p>
        </div>
        <div className="listDiv">
            <img src='./src/assets/list.png'/>
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