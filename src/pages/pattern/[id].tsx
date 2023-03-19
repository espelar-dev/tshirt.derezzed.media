import { useRouter } from "next/router";
import { useEffect } from "react";
import patterns from "../../../patterns";

function drawPattern(id: string, inputs?: any) {
  var canvas = document.querySelector("canvas");

  if (canvas) {
    var ctx = canvas.getContext("2d");
    const draw = patterns[id];

    draw(ctx, canvas.width, canvas.height, inputs);

    // const img = canvas.toDataURL("image/png");
    // document.write('<img src="' + img + '"/>');
  }
}

const Pattern = () => {
  const router = useRouter();
  const { id } = router.query || "";

  const inputs = { invert: true };

  useEffect(() => {
    if (id && typeof id === "string") {
      drawPattern(id);
    }
  });

  return (
    <div>
      <div>
        <canvas width="500" height="500"></canvas>
      </div>
    </div>
  );
}

export default Pattern