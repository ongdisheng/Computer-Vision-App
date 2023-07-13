import ReactWebcam from "react-webcam"
import { forwardRef } from "react"

const Webcam = forwardRef((props, ref) => {
  return (
    <ReactWebcam
      ref={ref}
      muted={true} 
      style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
        zindex: 9,
        width: 640,
        height: 480,
        borderRadius: '10px',
        boxShadow: 'lg'
      }}
    />
  )
})

export default Webcam