// draw bounding rectangles enclosing detected objects
export const drawRect = (preds, ctx) => {
  // loop through each prediction
  preds.forEach(pred => {

    // extract box and prediction class
    const [x, y, width, height] = pred.bbox
    const predClass = pred.class

    // set style
    ctx.font = '18px Arial'
    ctx.fillStyle = 'green'
    ctx.strokeStyle = 'green'

    // draw rectangle and text
    ctx.beginPath()
    ctx.fillText(predClass, x, y)
    ctx.rect(x, y, width, height)
    ctx.stroke()
  })
}