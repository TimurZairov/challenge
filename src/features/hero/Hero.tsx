import { hamburger, notification, planetIcon } from "../../assets/svg";

export function Hero() {
  return (
    <div className="h-20 shadow-md bg-white flex items-center justify-end border-b-1 gap-[19px] px-10 w-full">
        <img src={planetIcon} className="w-[22px] "/>
        <img src={notification} className="w-[22px] "/>
        <img src={hamburger} className="w-[22px] "/>
    </div>
  )
}
