import NextImage from "next/legacy/image";
import image from "./my-image.jpg";

export function MyImage() {
  console.log(image);
  return <NextImage src={image} alt="Please load me" />;
}
