import { Button } from '../../shared/components/ui/button';

export function Profile() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black/70">
      <div className="flex h-[685px] w-[735px] flex-col rounded-[10px] bg-white">
        <div className="h-[71px] p-[29px]">
          <span className="border-blue mx-[29px] my-[27px] border-b-4 pb-[18px] text-[14px] font-medium">
            Профиль
          </span>
        </div>

        <div className="flex h-full flex-col items-start border-black">
          <div className="border-gray flex h-full justify-end gap-[17px] border-y-1 px-[29px] pt-[29px]">
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

          <div className="flex h-[95px] items-center justify-end px-[29px]">
            <Button className="bg-yellow h-[40px] w-40 cursor-pointer shadow-md hover:bg-amber-300 hover:shadow-lg">
              <span className="text-dark-blue text-[15px] font-bold">Создать</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
