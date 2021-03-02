import CartItem from "../CartItem/CartItem";
import { Wrapper, HeaderCart, StyledCloseIcon } from "./Cart.styles";
import { CartItemType } from "../App";
import { Dispatch, SetStateAction } from "react";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  isOpen: Dispatch<SetStateAction<boolean>>;
};

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  isOpen
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <>
      <HeaderCart>
        <h2>Shopping Cart</h2>

        <StyledCloseIcon
          onClick={() => {
            isOpen(false);
          }}
        />
      </HeaderCart>

      <Wrapper>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <h2>Total: {calculateTotal(cartItems).toFixed(2)} kn</h2>
      </Wrapper>
    </>
  );
};

export default Cart;
