import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { SPACE, ACCESS_TOKEN } from "./defaults";
//Data model
import { ShopCollection, Query, Shop } from "./schema";
// Components
import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Header from "./Header/Header";
import Paper from "@material-ui/core/Paper";
// Styles
import { Wrapper, StyledPaper, StyledGrid, StyledDrawer } from "./App.styles";
import {
  withStyles,
  createStyles,
  Theme,
  makeStyles
} from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
//Contentfull client
import { client } from "./client";
// Types
export type CartItemType = {
  id: number;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

//Styles
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 660,
      md: 1250,
      lg: 1500,
      xl: 1920
    }
  }
});

const StyledLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#fdfcfa"
  },
  barColorPrimary: {
    backgroundColor: "#00264d"
  }
})(LinearProgress);

//Query
const query = `query{
  shopCollection{
    items{
      id,
      price,
      title,
      description,
      itemImageCollection{
        items{
          url
        }
      }
    }
  }
}`;

const getProducts = async (): Promise<CartItemType[]> => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${SPACE}?access_token=${ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    }
  );

  const items: any = [];

  const data = await response.json();
  data.data.shopCollection.items.map((data: any) => {
    items.push({ ...data, amount: 0 });
  });

  return items;
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  console.log("Test1");
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id ? { ...item, amount: item.amount } : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <StyledLinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <>
      <Header
        numberOfItems={getTotalItems(cartItems)}
        isOpen={setCartOpen}
        showCartIcon={true}
        title={"Shoes"}
      />
      <Wrapper>
        <StyledDrawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
            isOpen={setCartOpen}
          />
        </StyledDrawer>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={2}>
            {data?.map(item => (
              <StyledGrid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <StyledPaper elevation={10}>
                  <Item
                    item={item}
                    handleAddToCart={handleAddToCart}
                    id={item.id}
                  />
                </StyledPaper>
              </StyledGrid>
            ))}
          </Grid>
        </MuiThemeProvider>
      </Wrapper>
    </>
  );
};

export default App;
