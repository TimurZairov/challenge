import { type FormEvent, useState } from 'react';

import { Button } from '../../shared/components/ui/button';
import { useAuth } from '../../shared/hooks/auth';
import { Checkbox } from '../checkbox/Checkbox';

export function LoginForm() {
  const { handleLogin } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin.mutateAsync({
      email,
      password,
    });
  };

  return (
    <div className="flex h-105 w-105 flex-col items-start rounded-[10px] bg-white shadow-[0_4px_20px_var(--color-shadow)]">
      <div className="w-full py-[27px] pl-[17px]">
        <p className="text-14px border-blue inline border-b-3 pb-[27px] font-medium">
          Авторизируйтесь
        </p>
      </div>
      <div className="flex w-full flex-col items-center border-y-1 px-[17px] pt-6">
        <form onSubmit={event => login(event)} className="flex w-full flex-col items-start">
          <p className="mb-[10px] text-[12px] font-medium text-black">Email</p>
          <input
            type="text"
            onChange={event => setEmail(event.target.value)}
            className="h-40px border-gray bg-light-gray focus:shadow-medium mb-[13px] w-full rounded-[6px] border-1 px-3 py-1 text-[14px]"
          />
          <p className="mb-[10px] text-[12px] font-medium text-black">Пароль</p>
          <input
            type="password"
            onChange={event => setPassword(event.target.value)}
            placeholder=""
            required
            className="h-40px border-gray bg-light-gray focus:shadow-medium w-full rounded-[6px] border-1 px-3 py-1"
          />
          <div className="mt-[15px] mb-4 flex items-center justify-start">
            <Checkbox />
            <p className="text-dark-gray ml-1 text-[12px] font-medium">Запомнить меня</p>
          </div>
          <div className="mb-[25px] flex w-full items-center justify-center">
            <Button className="bg-yellow flex h-[42px] w-[129px] cursor-pointer items-center justify-center rounded-[10px] shadow-[0_1px_5px_rgba(0,0,0,0.25)] transition-colors duration-300 ease-in-out hover:border-1 hover:bg-yellow-400">
              <span className="text-15px font-bold text-black">Войти</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
