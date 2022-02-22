import { useDispatch } from "react-redux";
import { removeImage } from "../Slices/imagesSlice";

const Image = ({ image, index }) => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    dispatch(removeImage({ index }));
  }

  return(
    <img src={image.largeImageURL} width={600} onClick={handleOnClick}/>
  );
}

export default Image;