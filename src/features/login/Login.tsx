import { Button } from "../../shared/components/ui/button";

export function Login() {
  return (
    <div className="h-105 w-105 bg-white rounded-[10px] shadow-[0_4px_20px_var(--color-shadow)] flex flex-col items-start">
        <div className="w-full py-[27px] pl-[17px] ">
            <p className="font-medium text-14px border-b-3 inline pb-[27px] border-blue ">
                Авторизируйтесь
            </p>
        </div>
    <div className="flex border-y-1 flex-col px-[17px] pt-6 items-center w-full">
        <div className="flex flex-col items-start w-full">
            <p className="text-black font-medium text-[12px] mb-[10px] ">
                Email
            </p>
            <input type="email" className="text-[14px] w-full h-40px border-1 border-gray bg-light-gray rounded-[6px] px-3 py-1 mb-[13px] focus:shadow-medium "/>
            <p className="text-black font-medium text-[12px] mb-[10px] ">
                Пароль
            </p>
            <input type="password" placeholder="" required className="w-full h-40px border-1 border-gray bg-light-gray rounded-[6px] px-3 py-1 focus:shadow-medium "/>
            <div className="flex items-center justify-start gap-[16px] mt-[15px] mb-4">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 6.25L7 8.5L13 2.5" stroke="#30C086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 7V11.5C13 11.8978 12.842 12.2794 12.5607 12.5607C12.2794 12.842 11.8978 13 11.5 13H2.5C2.10218 13 1.72064 12.842 1.43934 12.5607C1.15804 12.2794 1 11.8978 1 11.5V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H9.25" stroke="#30C086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="font-medium text-[12px] text-dark-gray ">Запомнить меня</p>
            </div>
        </div>
        <div className="flex items-center justify-center mb-[25px] ">
            <Button className="bg-yellow w-[129px] h-[42px] rounded-[10px] flex justify-center items-center cursor-pointer hover:border-1 hover:bg-yellow-400 shadow-[0_1px_5px_rgba(0,0,0,0.25)] transition-colors duration-300 ease-in-out">
                <span className="font-bold text-15px text-black">Войти</span>
            </Button>
        </div>
    </div>
        <div>

        </div>
    </div>
  )
}
