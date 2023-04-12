import { useRouter } from "next/router";
import { useEffect } from "react";
import designs from "../../designs";

export type InputValues = {
  invert?: boolean;
}

export type Input = Record<string, InputValues>

const inputs: Input = {
  design001: {
    invert: false
  },
  design002: {}
};

function drawdesign(id: string, inputs: InputValues) {
  var canvas: HTMLCanvasElement | null = document.querySelector("canvas");

  if (canvas) {
    var ctx = canvas.getContext("2d");

    if (ctx) {
      const draw = designs[id];
      draw(ctx, canvas.width, canvas.height, inputs);
    }
    
    // const img = canvas.toDataURL("image/png");
    // document.write('<img src="' + img + '"/>');
  }
}

const Design = ({ id }: { id: string }) => {
  const canvasProps = { width: 500, height: 500 };

  useEffect(() => {
    if (id && typeof id === "string") {
      drawdesign(id, inputs[id])
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