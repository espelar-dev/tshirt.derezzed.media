export default function design001(context: any, width: number, height: number, inputs: any) {
  const invert = inputs?.invert;

  const mux = (width || height) / 500;

  context.strokeStyle = invert ? "white" : "black";
  context.fillStyle = invert ? "black" : "white";
  context.fillRect(0, 0, width, height);
  context.lineWidth = 5 * mux;

  const cols = 5;
  const rows = 5;

  const x = 10 * mux;
  const y = 10 * mux;

  const w = (400 / 5) * mux;
  const h = (400 / 5) * mux;

  const gapCols = 20 * mux;
  const gapRows = 20 * mux;

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