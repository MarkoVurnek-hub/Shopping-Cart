import { Wrapper, StyledButton } from "./CartItem.styles";
import { CartItemType } from "../App";
import gsap from "gsap";
type Props = {
  item: any;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div className="cartItem">
      <h3>{item.title}</h3>
      <div className="buttons"></div>
      <div className="information">
        <p>Price: {item.price} kn</p>
      </div>
      <StyledButton
        size="small"
        disableElevation
        variant="contained"
        onClick={() => {
          const tl = gsap.timeline();
          tl.from(".cartItem", {
            duration: 1,
            autoAlpha: 0,
            x: 450
          });
          removeFromCart(item.id);
        }}
      >
        Remove item from Cart
      </StyledButton>

      {item.itemImageCollection.items.map((image: any, i: any) => {
        if (i === 0) {
          return <img key={item.title} src={image.url} alt={item.title} />;
        }
      })}
    </div>
  </Wrapper>
);

export default CartItem;
