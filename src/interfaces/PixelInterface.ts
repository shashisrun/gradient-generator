import PixelType from "../types/PixelType";

interface PixelInterface {
  pixel: PixelType;
  get(): PixelType;
  set(pixel: PixelType): void;
}

export default PixelInterface;
