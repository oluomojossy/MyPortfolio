import './Box.css'

function Box (props){
  return(
    <>
    <div className="boxDiv" style={{flexDirection:props.flex}}>
        <div className="leftB">
            <img src={props.Img}/>
        </div>
        <div className="rightB">
            <h1>{props.h1}</h1>
        <div className='textDot'>
        <p className='p1'>Library</p>
        <div className="dot"></div>
        <p>Full Stack Dev</p>
        <div className="dot"></div>
        <p>2022</p>
        </div>
        <p className='p3'>{props.p3}</p>
        <div className="bgText">
            <div className="bgDiv">
            <p>html</p>
            </div>
            <div className="rubyDiv" style={{display:props.show}}>
            <p>{props.Ruby}</p>
            </div>
            <div className="bgDiv">
            <p>css</p>

            </div>
            <div className="bgDiv">
            <p>javascript</p>

            </div>
        </div>
        <button>See Project</button>
        </div> 
    </div>

    </>
  )
}



export default Box