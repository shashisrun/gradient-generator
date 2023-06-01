import PointInterface from "../interfaces/PointInterface";
import PointType from "../types/PointType";

class Point implements PointInterface {
  point: PointType;
  constructor(point: PointType) {
    this.point = point;
  }
  get(): PointType {
    return this.point;
  }
  set(point: PointType): void {
    this.point = point;
  }
}

export default Point;
