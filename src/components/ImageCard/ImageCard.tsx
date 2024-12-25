import s from "./ImageCard.module.css"
import { Image } from "../../../api";


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
