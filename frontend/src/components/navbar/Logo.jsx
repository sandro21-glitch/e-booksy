import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <li>
      <Link to="/" className="flex items-center gap-1 cursor-pointer">
        <FaBookOpenReader className="text-[1.5rem] dark:text-white" />
        <h6 className="font-bold text-[.9rem] dark:text-white">Store</h6>
      </Link>
    </li>
  );
};

export default Logo;
