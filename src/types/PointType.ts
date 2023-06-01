import PixelType from "./PixelType";
import Range from "./Range";

type PointType = {
  pixel: PixelType;
  placement: Range<0, 101>;
};

export default PointType;
