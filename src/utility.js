// draw bounding rectangles enclosing detected objects
export const drawRect = (preds, ctx) => {
  // loop through each prediction
  preds.forEach(pred => {

    // extract box and prediction class
    const [x, y, width, height] = pred.bbox
    const predClass = pred.class

    // set style
    ctx.font = 'bold 18px Arial'
    ctx.fillStyle = 'green'
    ctx.strokeStyle = 'green'
    ctx.lineWidth = 3

    // draw rectangle and text
    ctx.beginPath()
    ctx.fillText(predClass, x, y - 5)
    ctx.rect(x, y, width, height)
    ctx.stroke()
  })
}

// points for fingers
const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
}

export const drawHand = (hands, ctx) => {
  // verify if there is hand in current frame
  if (hands.length > 0) {
    hands.forEach(hand => {
      // grab keypoints
      const keypoints = hand.keypoints

      // draw finger lines
      for (let i = 0; i < Object.keys(fingerJoints).length; i++) {
        let finger = Object.keys(fingerJoints)[i]
        //  loop through pairs of joints
        for (let j = 0; j < fingerJoints[finger].length - 1; j++) {
          // retrieve pairs of joints
          const firstJointIndex = fingerJoints[finger][j]
          const secondJointIndex = fingerJoints[finger][j + 1]

          // draw path
          ctx.beginPath()
          ctx.moveTo(
            keypoints[firstJointIndex].x,
            keypoints[firstJointIndex].y
          )
          ctx.lineTo(
            keypoints[secondJointIndex].x,
            keypoints[secondJointIndex].y
          )
          ctx.strokeStyle = "chartreuse"
          ctx.lineWidth = 4
          ctx.stroke()
        }
      }

      // draw poins on joints
      for (let i = 0; i < keypoints.length; i++) {
        // retrieve x coordinate
        const x = keypoints[i].x

        // retrieve y coordinate
        const y = keypoints[i].y

        // start drawing
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, 3 * Math.PI)

        // set point color
        ctx.fillStyle = "red"
        ctx.fill()
      }
    })
  }
}