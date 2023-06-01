import Range from "./Range";

type PixelType = {
  red: Range<0, 256>;
  green: Range<0, 256>;
  blue: Range<0, 256>;
  alpha: Range<0, 101>;
};
export default PixelType;
