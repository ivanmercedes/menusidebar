import { useState } from "react";
import { SidebarMenuCard, SidebarMenuItem } from "../types/types";
import { classNames } from "./util/classes";

import { VscMenu } from "react-icons/vsc";
import SidebarMenuCardView from "./SidebarMenuCardView";
import SideBarMenuItemView from "./SideBarMenuItemView";

import "../scss/sidebarMenu.scss";

interface SidebarMenuProps {
  items: SidebarMenuItem[];
  card: SidebarMenuCard;
}

const SidebarManu = ({ items, card }: SidebarMenuProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classNames(
        "SidebarBarMenu",
        isOpen ? "expanded" : "collapsed",
      )}
    >
      <div className="menuButton">
        <button className="burgerBtn" onClick={handleClick}>
          <VscMenu />
        </button>
      </div>
      <SidebarMenuCardView card={card} isOpen={isOpen} />

      {items.map((item) => (
        <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
      ))}
    </div>
  );
};

export default SidebarManu;
