import { ImageProps, default as NextImage } from "next/image";
import { FC } from "react";

const Image: FC<ImageProps & { size: number }> = ({ size, ...rest }) => {
  return <NextImage width={size} height={size} {...rest} />;
};
export default Image;
