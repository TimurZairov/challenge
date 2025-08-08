import { clock, questionMark, statistics, user, version } from "../../assets/svg"


export function Sidebar() {
  const categories = [
    {icon: user, name: 'Пользователи' },
    {icon: statistics, name: 'Challenges' },
    {icon: clock, name: 'История покупок' },
    {icon: questionMark, name: 'Тех-поддержка' },
    {icon: version, name: 'Версия 0.0.1' }
  ]

  return (
    <section className="bg-white shadow-md flex flex-col min-h-200 border-red-500">
        <div  className="w-[300px] border-r-1 pt-12 pl-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-start ">
                <div className="flex items-center flex-row mb-[30px]">
                  <img src={cat.icon}/>
                  <span className="text-dark-gray ml-3">{cat.name}</span>
                </div>
              </div>
            ))}
        </div>
    </section>
  )
}
