import Point from "./classes/Point";
import PixelType from "./types/PixelType";
import LinearGradient from "./ui/LineGradient";

(function () {
  console.log("Hello");
  const div = document.createElement("div");

  const pixel1: PixelType = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 100,
  };
  const point1 = new Point({
    pixel: pixel1,
    placement: 0,
  });

  const pixel2: PixelType = {
    red: 255,
    green: 255,
    blue: 255,
    alpha: 100,
  };

  const point2 = new Point({
    pixel: pixel2,
    placement: 0,
  });

  const LinearGradientSlider = new LinearGradient(
    point1.get(),
    point2.get(),
    50,
    500
  );

  LinearGradientSlider.render(div);

  document.body.appendChild(div);
})();
