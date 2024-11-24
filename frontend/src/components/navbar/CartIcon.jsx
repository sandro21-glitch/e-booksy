import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  return (
    <li className="relative">
      <FaShoppingCart className="text-[1.5rem]" />
      <span
        className="absolute -right-1 -top-1 text-[.7rem] text-white w-[.9rem] h-[.9rem] bg-red-600
     rounded-full flex items-center justify-center"
      >
        0
      </span>
    </li>
  );
};

export default CartIcon;
