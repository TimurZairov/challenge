import { hamburger, notification, planetIcon } from '@/assets/svg';

export function Header() {
  return (
    <div className="flex h-20 w-full items-center justify-end gap-[19px] border-b-1 bg-white px-10 shadow-md">
      <img src={planetIcon} className="w-[22px]" />
      <img src={notification} className="w-[22px]" />
      <img src={hamburger} className="w-[22px]" />
    </div>
  );
}
