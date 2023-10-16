import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import Header from "./Header";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];


console.log(uniqueList);

const Resturant = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
     
        <div className="sticky-top" > 
        <Header/>
        <Navbar  filterItem={filterItem} menuList={menuList} />
        {/* </div>
        <div> */}
        <br />
        
        <hr className="hr" />
        
        <MenuCard menuData={menuData} />
        </div>
      
      
      
    </>
  );
};

export default Resturant;