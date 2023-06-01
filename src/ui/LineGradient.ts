import Gradient from "../classes/Gradient";
import PointType from "../types/PointType";

class LinearGradient extends Gradient {
  height: number;
  width: number;
  sliderElement: HTMLElement;

  constructor(
    startingPoint: PointType,
    endingPoint: PointType,
    height: number,
    width: number
  ) {
    super(startingPoint, endingPoint);
    this.height = height;
    this.width = width;
    this.sliderElement = document.createElement("div");
    this.sliderElement.style.width = `${this.width} px`;
    this.sliderElement.style.height = `${this.height} px`;
  }

  render(parent: HTMLElement) {
    parent.appendChild(this.sliderElement);
  }
}

export default LinearGradient;
