import { useRef, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as posenet from "@tensorflow-models/posenet"
import Webcam from "./Webcam"
import Canvas from "./Canvas"
import {
  Flex,
  Box,
  Button
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { drawBody } from "../utility"

const BodyDetect = ({ addToast }) => {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const navigate = useNavigate()

  // main function
  const runBody = async () => {
    // load network
    const detectorConfig = {
      architecture: 'MobileNetV1',
      outputStride: 16,
      inputResolution: { width: 640, height: 480 },
      multiplier: 0.75
    }
    const net = await posenet.load(detectorConfig)

    // detect hands in given frames (loop) 
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

      // body pose detections
      const estimationConfig = {
        maxPoses: 5,
        flipHorizontal: false,
        scoreThreshold: 0.5,
        nmsRadius: 20
      }
      const poses = await net.estimateSinglePose(video, estimationConfig)

      // draw mesh
      if (canvasRef.current != null) {
        const ctx = canvasRef.current.getContext("2d")

        // draw body skeleton
        drawBody(poses.keypoints, ctx)
      }
    }
  }

  useEffect(() => {
    runBody()
    addToast('Hang on tight while we are loading the model')
  }, [])

  return (
    <div>
      <Flex direction="column" marginTop="130px" minHeight="562px">
        <Box>
          <Webcam ref={webcamRef} />
          <Canvas ref={canvasRef} />    
          <Flex marginTop="520px" justifyContent="center" alignItems="center">
            <Button
              px={4}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={() => navigate('/products')}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
                Back to List
            </Button>
          </Flex>  
        </Box>  
      </Flex>
    </div>
  )
}


export default BodyDetect