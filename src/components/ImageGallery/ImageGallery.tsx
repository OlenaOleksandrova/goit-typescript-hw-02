// import s from "./ImageGallery.module.css"
// import ImageCard from "../ImageCard/ImageCard"

// const ImageGallery = ({ images, onImageClick }) => {
//     if (!images.length) return ""
//     return (
//     <ul className={s.gallery}>
//       {images.map((image) => (
//         <li className={s.item}
//           key={image.id}
//         onClick={()=> onImageClick(image)}>
//           <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
//         </li>
//       ))}
//     </ul>
//     )
// }
// export default ImageGallery

import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

type Image = {
  id: string;
  urls: {
    small: string;
  };
  alt_description?: string;
};

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (image: Image) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (!images.length) return null;

  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li className={s.item} key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;