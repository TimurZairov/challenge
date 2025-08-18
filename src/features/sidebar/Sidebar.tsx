import { clock, questionMark, statistics, user, version } from '@/assets/svg';

export function Sidebar() {
  const categories = [
    { icon: user, name: 'Пользователи' },
    { icon: statistics, name: 'Challenges' },
    { icon: clock, name: 'История покупок' },
    { icon: questionMark, name: 'Тех-поддержка' },
    { icon: version, name: 'Версия 0.0.1' },
  ];

  return (
    <section className="flex min-h-200 flex-col border-red-500 bg-white shadow-md">
      <div className="w-[300px] border-r-1 pt-12 pl-12">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <div className="mb-[30px] flex flex-row items-center">
              <img src={cat.icon} />
              <span className="text-dark-gray ml-3">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
