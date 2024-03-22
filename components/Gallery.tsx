import { ComponentProps, useMemo, useState } from "react";
import { Image, Gallery as GridGallery } from "react-grid-gallery";
import Modal from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface CustomImage extends Image {
  original: string;
}

type Props = Readonly<
  Omit<ComponentProps<typeof GridGallery>, "images"> & {
    images: CustomImage[];
  }
>;

export const Gallery = ({ images, ...rest }: Props) => {
  const [index, setIndex] = useState(-1);

  const currentImage = useMemo(() => images[index], [images, index]);

  const nextIndex = useMemo(
    () => (index + 1) % images.length,
    [images.length, index]
  );

  const nextImage = useMemo(
    () => images[nextIndex] || currentImage,
    [currentImage, images, nextIndex]
  );

  const prevIndex = useMemo(
    () => (index + images.length - 1) % images.length,
    [images.length, index]
  );

  const prevImage = useMemo(
    () => images[prevIndex] || currentImage,
    [currentImage, images, prevIndex]
  );

  return (
    <div>
      <GridGallery<CustomImage>
        images={images}
        onClick={(index: number, item: CustomImage) => setIndex(index)}
        enableImageSelection={false}
        {...rest}
      />
      {!!currentImage && (
        <Modal
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={() => setIndex(-1)}
          onMovePrevRequest={() => setIndex(prevIndex)}
          onMoveNextRequest={() => setIndex(nextIndex)}
        />
      )}
    </div>
  );
};
