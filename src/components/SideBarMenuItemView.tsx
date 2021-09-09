import { SidebarMenuItem } from "../types/types";
import { classNames } from "./util/classes";

import "../scss/SideBarMenuItemView.scss";

interface SideBarMenuItemViewProps {
  item: SidebarMenuItem;
  isOpen: boolean;
}

export default function SideBarMenuItemView({
  item,
  isOpen,
}: SideBarMenuItemViewProps) {
  return (
    <div className="SideBarMenuItemView">
      <a href={item.url}>
        <div className={classNames("ItemContent", isOpen ? "" : "collapsed")}>
          <div className="icon">
            <item.icon size="32" />
          </div>
          <span className="label">{item.label}</span>
        </div>
      </a>
      {isOpen ? "" : <div className="tooltip">{item.label}</div>}
    </div>
  );
}
