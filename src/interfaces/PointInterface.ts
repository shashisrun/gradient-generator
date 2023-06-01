import PointType from "../types/PointType";

interface PointInterface {
  point: PointType;
  get(): PointType;
  set(point: PointType): void;
}

export default PointInterface;
