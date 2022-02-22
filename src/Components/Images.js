import { useSelector } from "react-redux";
import Image from "./Image";

const Images = () => {
  const { images, isLoading, lastQuery, error } = useSelector((state) => state.images);

  const imageItems = images.map((image, index) => {
    return(
      <Image key={index} image={image} index={index}/>
    );
  });

  if (!isLoading) {
    if (!error) {
      return(
        <>
          {imageItems}
        </>
      );
    } else {
      return(
        <p>No Results for {lastQuery}</p>
      );
    }
  } else {
    return(
      <p>Searching for {lastQuery}...</p>
    );
  }
}

export default Images;