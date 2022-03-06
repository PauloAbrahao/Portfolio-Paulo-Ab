$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        textColour: "#4db5ff",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
        freezeDecel: true,
        initial: [0.2, -0.4],
      },
      "tags"
    )
  ) {
    // something went wrong hide the canvas container,
    $("#myCanvasContainer");
  }
});
