import { Button } from "../../shared/components/ui/button";



export function Profile() {

  return (
    <div className="bg-black/70 w-full h-full relative flex items-center justify-center">
      <div className="w-[735px] h-[685px] bg-white rounded-[10px] flex flex-col ">
          <div className="h-[71px] p-[29px]">
            <span className="font-medium text-[14px] border-b-4 border-blue pb-[18px] my-[27px] mx-[29px]">Профиль</span>
          </div>
          <div className="border-y-1 border-gray h-full px-[29px] pt-[29px] flex justify-between ">
            <div className="flex flex-col items-start">
              <span className="mb-[10px] font-medium text-dark-gray">Challenge name</span>
              <input type="text" className="h-10 rounded-[6px] bg-light-gray border-1 border-g p-3 focus:shadow-sm "/>
            </div>
            <div className="flex flex-col items-start">
              <span className="mb-[10px] font-medium text-dark-gray">Exp/coins</span>
              <input type="text" className="h-10 rounded-[6px] bg-light-gray border-1 border-g p-3 focus:shadow-sm "/>
            </div>
          </div>
          <div className="h-[95px] flex items-center justify-end px-[29px]">
            <Button className="w-40 h-[40px] bg-yellow cursor-pointer hover:bg-amber-300 shadow-md hover:shadow-lg ">
              <span className="font-bold text-[15px] text-dark-blue">Создать</span>
            </Button>
          </div>
      </div>
    </div>
  )
}
