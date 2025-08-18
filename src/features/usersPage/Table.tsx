import { calendar, search } from '@/assets/svg';
import { Button } from '@/shared/components/ui/button';

import { Schema } from './Schema';

export function Table() {
  return (
    <div className="m-[14px] h-auto flex-grow rounded-[10px] bg-white pt-7 shadow-md">
      <div>
        <div className="flex items-center justify-center gap-[11px] border-b px-[14px] pb-[22px]">
          <span className="text-[14px] font-medium">Пользователи</span>
          <div className="relative flex items-center hover:shadow-sm">
            <img src={search} alt="#" className="absolute ml-2 w-[15px]" />
            <input
              type="text"
              className="bg-light-gray border-gray text-3 h-[33px] w-187 rounded-[6px] border pl-7 shadow-xs transition-colors duration-300 ease-in-out focus:shadow-md"
            />
          </div>
          <Button className="hover:bg-gray text-dark-gray border-gray bg-light-gray h-[33px] w-[185px] cursor-pointer border-1 shadow-xs transition-colors duration-300 ease-in-out hover:shadow-md">
            <img src={calendar} alt="#" className="w-[15px]" />
            Выберите дату
          </Button>
        </div>
        <div>
          <Schema />
        </div>
      </div>
    </div>
  );
}
