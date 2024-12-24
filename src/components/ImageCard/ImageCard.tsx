import s from "./ImageCard.module.css"

// const ImageCard = ({ image, onClick }) => {
//     return (
//       <div className={s.card} onClick={onClick}>
//       <img className={s.img} src={image.urls.small} alt={image.alt_description} />
//     </div>
//     )
// }
// export default ImageCard
type Image = {
  id: string;
  urls: {
    small: string;
    regular: string; // змінила
  };
  alt_description?: string;
};

type ImageCardProps = {
  image: Image;
  onClick: () => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={s.card} onClick={onClick}>
      <img className={s.img} src={image.urls.small} alt={image.alt_description || "Image"} />
    </div>
  );
};

export default ImageCard;
