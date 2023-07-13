// import dependencies
import { useRef, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as coco from "@tensorflow-models/coco-ssd"
import Webcam from "./Webcam"
import Canvas from "./Canvas"
import { drawRect } from "../utility"
import {
  Flex,
  Box
} from '@chakra-ui/react'

const ObjDetect = () => {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  // main function
  const runCoco = async () => {
    // load network
    const net = await coco.load()

    // detect objects in given frames (loop) 
    setInterval(() => {
      detect(net)
    }, 100)
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

  useEffect(() => {
    runCoco()
  }, [])

  return (
    <div>
      <Flex direction="column" marginTop="150px" minHeight="542px">
        <Box>
          <Webcam ref={webcamRef} />
          <Canvas ref={canvasRef} />      
        </Box>  
      </Flex>
    </div>
  )
}

export default ObjDetect