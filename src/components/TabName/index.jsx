import React, { useState } from "react";
import { NavItem, NavLink } from "reactstrap";

const TabName = ({ tab, index, onChangeMaDanhMuc }) => {
  let [activeTab, setActiveTab] = useState(1);
  const handleOnChangeMaDanhMuc = (maDanhMuc, tab) => {
    onChangeMaDanhMuc(maDanhMuc);
    if (activeTab !== tab) {
      setActiveTab(tab);
      console.log(tab);
    }
  };
  return (
    <NavItem
      className={activeTab === index + 1 ? "bg-success" : ""}
      onClick={() => handleOnChangeMaDanhMuc(tab.maDanhMuc, index + 1)}
    >
      <NavLink>{tab.tenDanhMuc}</NavLink>
    </NavItem>
  );
};

export default TabName;
