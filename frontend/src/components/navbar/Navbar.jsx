import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ToggleSwitch from "./ToggleSwitch";
import CartIcon from "./CartIcon";
import SignUpButton from "./SignUpButton";
import { useSelector } from "react-redux";
import Profile from "./profileDropdown/Profile";
const Navbar = () => {
  const userInfo = useSelector((store) => store.auth.userInfo);

  return (
    <header className="section-center p-4">
      <nav className="">
        <ul className="flex items-center gap-5">
          <Logo />
          <SearchBar />
          <ToggleSwitch />
          <CartIcon />
          {userInfo ? <Profile /> : <SignUpButton />}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
