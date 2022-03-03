import React, { useContext } from "react";

import { CartButton } from "./ButtonStyle";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from "../Context/AppContext";

const AddToCartBtn = ({ item }) => {
  const { setShoppingItems, shoppingItems } = useContext(AppContext);

  const addToCart = () => {
    setShoppingItems((value) => {
      return [...value, { item: { ...item }, quantity: 1 }];
    });
    localStorage.setItem(
      `item_${item._id}`,
      JSON.stringify({ item: item, quantity: item.quantity })
    );
  };

  // const [currentUser, setCurrentUser] = useState(
  //   sessionStorage.getItem("LoggedInAs")
  //     ? JSON.parse(sessionStorage.getItem("LoggedInAs"))
  //     : null
  // );
  // sessionStorage.setItem("LoggedInAs", JSON.stringify(loggedInUser.data));

  const isAlreadyAdded = shoppingItems.filter(
    (shoppingItem) => shoppingItem.item._id === item._id
  );

  return (
    <CartButton
      onClick={!isAlreadyAdded.length && addToCart}
      disabled={item.numInStock === 0}
    >
      <FiShoppingCart />
    </CartButton>
  );
};
export default AddToCartBtn;
