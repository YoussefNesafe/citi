"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog"
import ImageWrapper from "../ImageWrapper";
import { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type ImagePreviewProps = ImageProps & {
  imageWrapperClassName?: string;
  popupClassName?: string;
  skeletonClassName?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  imageWrapperClassName = "",
  popupClassName = "",
  skeletonClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handle opening and closing of the popup
  const handleOpenChange = (open: boolean) => setIsOpen(open);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {/* Render the image */}
        <ImageWrapper src={src} alt={alt} width={width} height={height} className={className} skeletonClassName={skeletonClassName} />
      </DialogTrigger>

      {/* Dialog Content for full-size image preview */}
      <DialogContent className={cn('desktop:max-h-[96vh] w-[82vw] tablet:w-[80vw] desktop:w-auto desktop:max-w-[80vw]', popupClassName)}>
        <div className="desktop:max-h-[93vh] h-auto w-auto overflow-hidden">
          <ImageWrapper src={src} alt={alt} width={width} height={height} className="object-cover w-auto h-full" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImagePreview;
