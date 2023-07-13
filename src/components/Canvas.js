// import dependencies
import { useRef, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as coco from "@tensorflow-models/coco-ssd"
import Webcam from "react-webcam"
import { drawRect } from "../utility"

const Canvas = () => {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  // main function
  const runCoco = async () => {
    // load network
    const net = await coco.load()

    // detect objects in given frames (loop) 
    setInterval(() => {
      detect(net)
    }, 10)
  }

  const detect = async (net) => {
    // verify if data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // retrieve video properties
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      // set video height and width
      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      // set canvas height and width
      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      // model predictions
      const preds = await net.detect(video)

      // draw mesh
      const ctx = canvasRef.current.getContext("2d")

      // draw bounding rectangles
      drawRect(preds, ctx)
    }
  }

  useEffect(()=>{runCoco()},[]);

  return (
    <div>
      <header>
        <Webcam
          ref={webcamRef}
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
          }}
        />

        <canvas
          ref={canvasRef}
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
          }}
        />
      </header>
    </div>
  )
}

export default Canvas