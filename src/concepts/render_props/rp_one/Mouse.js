import { useState } from "react"

export default function Mouse(props) {

  console.log(props.render);
  const [mousePosition, setMousePosition] = useState({ x: '', y: '' });

  const handleMouseEvent = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (
    <div  >

      {/* receiving as prop */}
      {/* {props.render(mousePosition, handleMouseEvent)} */}

      {/* receiving as children */}
      {props.children(mousePosition, handleMouseEvent)}
    </div>

  )
}
