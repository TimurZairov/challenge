import { calendar, search } from "../../assets/svg";
import { Button } from "../../shared/components/ui/button";
import { Schema } from "../schema/Schema";


export function Table() {
  return (
    <div className="shadow-md h-auto flex-grow rounded-[10px] bg-white m-[14px] pt-7">
        <div>
            <div className="flex items-center justify-center px-[14px] gap-[11px] pb-[22px] border-b ">
                <span className="font-medium text-[14px] ">Пользователи</span>
                <div className="relative flex items-center hover:shadow-sm">
                    <img src={search} alt="#" className="absolute w-[15px] ml-2"/>
                    <input type="text" className="border w-187 h-[33px] rounded-[6px] bg-light-gray border-gray pl-7 text-3 focus:shadow-md shadow-xs transition-colors duration-300 ease-in-out "/>
                </div>
                <Button className="w-[185px] h-[33px] hover:bg-gray shadow-xs hover:shadow-md cursor-pointer text-dark-gray border-1 border-gray bg-light-gray transition-colors duration-300 ease-in-out"><img src={calendar} alt='#' className="w-[15px] "/>Выберите дату</Button>
            </div>
            <div>
                <Schema/>
            </div>
        </div>
    </div>
  )
}
