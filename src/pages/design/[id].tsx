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

const Design = () => {
  const router = useRouter();
  const { id } = router.query || "";
  const canvasProps = { width: 500, height: 500 };

  const inputs = { invert: true };

  useEffect(() => {
    if (id && typeof id === "string") {
      drawdesign(id);
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

export default Design