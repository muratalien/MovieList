import { useState } from "react";;

function Movie(props) {
  const [count, setCount, visible, setVisible] = useState(0);
  

  return (
    <>
    <div className='col-3'>
        <div className='movie-header'>
          <h4>{props.header}</h4>
        </div>
        <div className='movie-img'>
          <img src={props.img} />
        </div>
        <div className='movie-year'>
          <h5>{props.year}</h5>
        </div>
        <button onClick={props.onClick}>click</button>
      </div></>
  )
}

export default Movie