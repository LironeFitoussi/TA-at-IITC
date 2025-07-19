import { useState } from "react";

// Redux Imports
import { addItem } from "../store/slices/cartSlice.js";
import { useDispatch } from "react-redux";

const ProductItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  function handleAddItem(item) {
    const itemData = {
      ...item,
      quantity,
      totalItemPrice: item.price * quantity,
    };

    dispatch(addItem(itemData));
  }

  return (
    <div>
      <span>
        {item.name} - {item.price}₪
      </span>
      <div>
        <button onClick={() => setQuantity((state) => state + 1)}>+</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((state) => state - 1)}>-</button>
      </div>
      <button onClick={() => handleAddItem(item)}>Add To Cart</button>
    </div>
  );
};

export default ProductItem;
