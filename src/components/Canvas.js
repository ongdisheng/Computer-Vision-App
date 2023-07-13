import { forwardRef } from "react"

const Canvas = forwardRef((props, ref) => {
  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
        zindex: 8,
        width: 640,
        height: 480,
        borderRadius: '10px'
      }}
    />
  )
})

export default Canvas