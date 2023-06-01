import Gradient from "../classes/Gradient";
import PointType from "../types/PointType";

class RadialGradient extends Gradient {
  constructor(startingPoint: PointType, endingPoint: PointType) {
    super(startingPoint, endingPoint);
  }
}

export default RadialGradient;
