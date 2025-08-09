import { useState, type FormEvent } from "react";
import { Button } from "../../shared/components/ui/button";
import { useAuth } from "../../shared/hooks/auth";
import { Checkbox } from "../checkbox/Checkbox";

export function LoginForm() {
    const {handleLogin} = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleLogin.mutateAsync({
            email, password
        })
    }

  return (
    <div className="h-105 w-105 bg-white rounded-[10px] shadow-[0_4px_20px_var(--color-shadow)] flex flex-col items-start">
        <div className="w-full py-[27px] pl-[17px] ">
            <p className="font-medium text-14px border-b-3 inline pb-[27px] border-blue ">
                Авторизируйтесь
            </p>
        </div>
    <div className="flex border-y-1 flex-col px-[17px] pt-6 items-center w-full">
        <form onSubmit={event => login(event)} className="flex flex-col items-start w-full">
            <p className="text-black font-medium text-[12px] mb-[10px] ">
                Email
            </p>
            <input type="text" onChange={event=>setEmail(event.target.value)} className="text-[14px] w-full h-40px border-1 border-gray bg-light-gray rounded-[6px] px-3 py-1 mb-[13px] focus:shadow-medium "/>
            <p className="text-black font-medium text-[12px] mb-[10px] ">
                Пароль
            </p>
            <input type="password" onChange={event => setPassword(event.target.value)} placeholder="" required className="w-full h-40px border-1 border-gray bg-light-gray rounded-[6px] px-3 py-1 focus:shadow-medium "/>
            <div className="flex items-center justify-start mt-[15px] mb-4">
                    <Checkbox/>
                    <p className="font-medium text-[12px] text-dark-gray ml-1">Запомнить меня</p>
            </div>
        <div className="flex items-center justify-center mb-[25px] ">
            <Button className="bg-yellow w-[129px] h-[42px] rounded-[10px] flex justify-center items-center cursor-pointer hover:border-1 hover:bg-yellow-400 shadow-[0_1px_5px_rgba(0,0,0,0.25)] transition-colors duration-300 ease-in-out">
                <span className="font-bold text-15px text-black">Войти</span>
            </Button>
        </div>
        </form>
    </div>
    </div>
  )
}
