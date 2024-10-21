import React, { useState } from "react";
import popcornSVG from "../svg/popcorn.svg";
import logoutSVG from "../svg/logout.svg";

const Header = () => {
  const [userName, setUserName] = useState("Theo");

  return (
    <header className="mb-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={popcornSVG} alt="popcorn icon" />
          <h1 className="text-[2.5rem] font-bold">Netlike</h1>
        </div>
        <div className="flex items-center gap-4">
          <p>
            Hey <span className="font-semibold">{userName}</span> !
          </p>

          <img src={logoutSVG} alt="logout svg" className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
