import PixelType from "../types/PixelType";
import PointType from "../types/PointType";

interface GradientInterface {
  points: PointType[];
  activePoint: PointType;
  getGradience(): PixelType[];
  addPoint(point: PointType): void;
  removePoint(point: PointType): void;
  setCurrentPointer(point: PointType): void;
}

export default GradientInterface;
