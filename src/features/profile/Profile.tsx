import { addIcon } from '../../assets/svg';
import { Button } from '../../shared/components/ui/button';

export function Profile() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black/70">
      <div className="flex h-[685px] w-[735px] flex-col rounded-[10px] bg-white">
        <div className="h-[71px] border-b-1 p-[29px]">
          <span className="border-blue mx-[29px] my-[27px] border-b-4 pb-[18px] text-[14px] font-medium">
            Профиль
          </span>
        </div>
        <div>
          <div className="flex h-full flex-col items-start border-black">
            <div className="border-gray flex h-full w-full justify-end gap-[17px] px-[29px] pt-[29px]">
              <div className="flex flex-1 flex-col items-start">
                <span className="text-3 text-dark-gray mb-[10px] font-medium">Challenge name</span>
                <input
                  type="text"
                  className="bg-light-gray border-g h-10 w-full rounded-[6px] border-1 p-3 focus:shadow-sm"
                />
              </div>
              <div className="flex flex-1 flex-col items-start">
                <span className="text-3 text-dark-gray mb-[10px] font-medium">Exp/coins</span>
                <input
                  type="text"
                  className="bg-light-gray border-g h-10 w-full rounded-[6px] border-1 p-3 focus:shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[9px] flex items-end gap-2 pl-[52px]">
          <div className="border-dark-gray mb-2 h-[26px] w-[11px] border-b-1 border-l-1 border-dashed"></div>
          <span className="text-dark-blue text-[12px] font-bold">Day 1</span>
        </div>

        <div className="ml-[42px] flex items-center">
          <img src={addIcon} alt="#" className="mr-[5px] h-4 w-4 flex-shrink-0" />
          <label className="flex w-full flex-col pr-[29px]">
            <span className="text-3 text-dark-blue mb-[10px] font-medium">Challenge name</span>
            <input
              type="text"
              className="border-g bg-light-gray box-border h-10 w-full rounded-[6px] border-1 p-3 focus:shadow-sm"
            />
            <div className="mt-[11px]">
              <span className="text-skyblue">+ Add new day</span>
            </div>
          </label>
        </div>
        <div className="mt-4 mb-[19px] flex h-[224px] flex-col gap-[9px] px-[29px]">
          <span className="text-dark-gray">Description</span>
          <textarea className="bg-light-gray box-border h-56 w-full resize-none rounded-[6px] border-1 p-3 focus:shadow-sm" />
        </div>

        <div className="flex h-[95px] items-center justify-end border-t px-[29px]">
          <Button className="bg-yellow h-[40px] w-40 cursor-pointer shadow-md hover:bg-amber-300 hover:shadow-lg">
            <span className="text-dark-blue text-[15px] font-bold">Создать</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
