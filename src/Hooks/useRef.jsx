import React, { useRef } from 'react'

const UseRef = () => {
      const inputElem = useRef(null)


      const seeresult = (e)=>{
        e.preventDefault()
            console.log(inputElem.current.value)
      }
     
  return (
    <div>
      <h4>React useRef hook</h4>
      <form action="">
            <input ref={inputElem} 
                    type="text" 
                    placeholder='type here'/>


            <button onClick={seeresult}>See</button>
      </form>
    </div>
  )
}

export default UseRef