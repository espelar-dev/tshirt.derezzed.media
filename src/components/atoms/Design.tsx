import { useRouter } from "next/router";
import { useEffect } from "react";
import designs from "../../designs";

function drawdesign(id: string, inputs?: any) {
  var canvas = document.querySelector("canvas");

  if (canvas) {
    var ctx = canvas.getContext("2d");
    const draw = designs[id];

    draw(ctx, canvas.width, canvas.height, inputs);
    // const img = canvas.toDataURL("image/png");
    // document.write('<img src="' + img + '"/>');
  }
}

const Design = ({ id }) => {
  const canvasProps = { width: 500, height: 500 };

  const inputs = { invert: false };

  useEffect(() => {
    if (id && typeof id === "string") {
      drawdesign(id, inputs);
    }
  });

  return (
    <div>
      <div>
        <canvas width={canvasProps.width} height={canvasProps.height}></canvas>
      </div>
    </div>
  );
}

export default Design;