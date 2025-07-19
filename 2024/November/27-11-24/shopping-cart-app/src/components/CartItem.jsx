import { useDispatch } from "react-redux";
import { removeItem } from "../store/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function handleRemoveItem(id) {
    dispatch(removeItem(id));
  }
  return (
    <li style={{ margin: "10px 0" }}>
      <span>
        {item.name}: {item.price}₪ x {item.quantity} = ₪{item.totalItemPrice}
      </span>
      <button onClick={() => handleRemoveItem(item.id)}>Remove Item</button>
    </li>
  );
};

export default CartItem;
