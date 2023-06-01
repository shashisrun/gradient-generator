import PixelInterface from "../interfaces/PixelInterface";
import PixelType from "../types/PixelType";

class Pixel implements PixelInterface {
  pixel: PixelType;
  constructor(pixel: PixelType | undefined) {
    if (!pixel) {
      this.pixel = {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 100,
      };
      return;
    }
    this.pixel = pixel;
  }

  set(pixel: PixelType): void {
    this.pixel = pixel;
  }

  public get(): PixelType {
    return this.pixel;
  }
}

export default Pixel;
