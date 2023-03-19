export default function pattern001(context, width, height, inputs) {
  context.lineWidth = width * 0.005;

  const invert = inputs?.invert;

  context.strokeStyle = invert ? "white" : "black";
  context.fillStyle = invert ? "black" : "white";
  context.fillRect(0, 0, width, height);

  const cols = 5;
  const rows = 5;

  const x = width * 0.19;
  const y = height * 0.19;

  const w = width * 0.10;
  const h = height * 0.10;

  const gapCols = width * 0.025;
  const gapRows = height * 0.025;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const offsetCols = ((w + gapCols) * i);
      const offsetRows = ((h + gapRows) * j);

      const xWithOffset = x + offsetCols;
      const yWithOffset = y + offsetRows;

      context.beginPath();
      context.rect(xWithOffset, yWithOffset, w, h);
      context.stroke();

      const diffSmall = w * 0.125;

      const xSmallWithOffset = xWithOffset + diffSmall;
      const ySmallWithOffset = yWithOffset + diffSmall;

      const wSmall = w - (diffSmall * 2);
      const hSmall = h - (diffSmall * 2);

      if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(xSmallWithOffset, ySmallWithOffset, wSmall, hSmall);
        context.stroke();
      }
    }
  }
}