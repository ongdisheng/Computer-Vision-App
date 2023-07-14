// import dependencies
import { useRef, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as coco from "@tensorflow-models/coco-ssd"
import Webcam from "./Webcam"
import Canvas from "./Canvas"
import { drawRect } from "../utility"
import {
  Flex,
  Box,
  Button,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const ObjDetect = ({ addToast }) => {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const navigate = useNavigate()

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

export default ObjDetect