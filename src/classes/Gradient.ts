import GradientInterface from "../interfaces/GradientInterface";
import PixelType from "../types/PixelType";
import PointType from "../types/PointType";

class Gradient implements GradientInterface {
  points: PointType[];

  constructor() {
    this.points = [];
  }
  addPoint(point: PointType): void {
    this.points.push(point);
  }
  removePoint(point: PointType): void {
    const index = this.points.findIndex(
      pointer => pointer.placement === point.placement
    );
    if (index > -1) {
      this.points.splice(index, 1);
    }
  }

  getGradience(): PixelType[] {
    // todo
    return [];
  }
}

export default Gradient;
