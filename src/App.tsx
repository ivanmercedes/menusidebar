import "normalize.css";
import SidebarManu from "./components/SidebarMenu";
import { SidebarMenuCard, SidebarMenuItem } from "./types/types";
import { FcAdvertising } from "react-icons/fc";
import profileImage from "./images/ivan.jpg";

function App() {
  const items: SidebarMenuItem[] = [
    {
      id: "1",
      label: "Hola",
      icon: FcAdvertising,
      url: "/",
    },
    {
      id: "2",
      label: "Hola",
      icon: FcAdvertising,
      url: "/",
    },
    {
      id: "3",
      label: "Hola",
      icon: FcAdvertising,
      url: "/",
    },
  ];

  const card: SidebarMenuCard = {
    id: "card01",
    displayName: "Ivan Mercedes",
    title: "caca",
    photoUrl: profileImage,
    url: "/",
  };

  return (
    <div>
      <SidebarManu items={items} card={card} />
    </div>
  );
}

export default App;
