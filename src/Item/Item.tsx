import Button from "@material-ui/core/Button";
import { Wrapper, Image } from "./Item.styles";
import { CartItemType } from "../App";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Modal from "../Modal/Modal";

type Props = {
  item: any;
  handleAddToCart: (clickedItem: CartItemType) => void;
  id: number;
};

const Item: React.FC<Props> = ({ item, handleAddToCart, id }) => {
  console.log(id);
  const images: any = [];
  return (
    <>
      <Wrapper>
        <Image>
          <Carousel infiniteLoop emulateTouch swipeable dynamicHeight>
            {item.itemImageCollection.items.map((image: any, i: any) => {
              images.push({
                title: item.title,
                image: image.url
              });
              return (
                <div key={item.id} className="mainImage">
                  <img src={image.url} alt={item.title} />
                </div>
              );
            })}
          </Carousel>
        </Image>
        <div className="details">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <Modal images={item.itemImageCollection.items} />
          <h3 className="price">Price: {item.price} kn</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
      </Wrapper>
    </>
  );
};
export default Item;
