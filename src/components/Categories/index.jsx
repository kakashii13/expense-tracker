import { GiClothes } from "react-icons/gi";
import {
  MdDirectionsCar,
  MdFlight,
  MdLightbulbOutline,
  MdOutlineAttachMoney,
  MdOutlineCreditCard,
  MdOutlineHealthAndSafety,
  MdOutlineHome,
  MdOutlineMenuBook,
  MdOutlineShoppingBag,
  MdShoppingCart,
} from "react-icons/md";

export const CATEGORIES = [
  { name: "Market", icon: MdShoppingCart },
  { name: "Card", icon: MdOutlineCreditCard },
  { name: "Health", icon: MdOutlineHealthAndSafety },
  { name: "Car", icon: MdDirectionsCar },
  { name: "Holidays", icon: MdFlight },
  { name: "Light", icon: MdLightbulbOutline },
  { name: "Shopping", icon: MdOutlineShoppingBag },
  { name: "Rent", icon: MdOutlineHome },
  { name: "Education", icon: MdOutlineMenuBook },
  { name: "Taxes", icon: MdOutlineAttachMoney },
  { name: "Clothing", icon: GiClothes },
];
