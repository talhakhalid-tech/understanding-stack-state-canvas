window.onload = function () {
  //definitions
  const canvas = document.querySelector("canvas");
  canvas.width = 600;
  canvas.height = 450;
  const context = canvas.getContext("2d");

  //Stack State (LIFO- Last In First Out)

  //Rect 1
  context.fillStyle = "red";
  context.fillRect(50, 100, 100, 100);
  context.save(); //Pushing in stack state with fillStyle "red"

  //Rect 2
  context.fillStyle = "green";
  context.fillRect(250, 100, 100, 100);
  context.save(); //Pushing in stack state with fillStyle "green"

  //Rect 3
  context.fillStyle = "blue";
  context.fillRect(450, 100, 100, 100);
  context.save(); //Pushing in stack state with fillStyle "blue"

  //Rect 4
  context.restore(); //poping out from stack state with fillStyle "blue"
  context.fillRect(50, 250, 100, 100);

  //Rect 5
  context.restore(); //poping out from stack state with fillStyle "green"
  context.fillRect(250, 250, 100, 100);

  //Rect 6
  context.restore(); //poping out from stack state with fillStyle "red"
  context.fillRect(450, 250, 100, 100);
};
