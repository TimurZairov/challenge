import { editButton, toTrashButton } from "../../assets/svg";



export function Schema() {
  return (
        <div className="w-full overflow-y-auto px-4">
            <table className="w-full">
                <thead>
                    <tr className="even:bg-muted m-0 p-0">
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        ID
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        Дата регистрации
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        Страна
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        e-mail
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        Full name
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        Challenges
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        Tasks
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        Coins
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        Completed
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        Position
                        </th>
                        <th className="border-b-1 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        Edit
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-muted m-0 p-0">
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        10204566
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        20/06/20205
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Узбекистан
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        test@test.com
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Tima Zairov
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        200
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        200
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        1400
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        187
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        1
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        <div className="flex justify-between">
                            <img src={editButton} alt="#" />
                            <img src={toTrashButton} alt="#" />
                        </div>
                        </td>
                    </tr>
                    <tr className="even:bg-muted m-0 p-0">
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        10204566
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        20/06/20205
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Узбекистан
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        test@test.com
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Tima Zairov
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        200
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        200
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        1400
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        187
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        1
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        <div className="flex justify-between">
                            <img src={editButton} alt="#" />
                            <img src={toTrashButton} alt="#" />
                        </div>
                        </td>
                    </tr>
                    <tr className="even:bg-muted m-0 p-0">
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        10204566
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        20/06/20205
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Узбекистан
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        test@test.com
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Tima Zairov
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        200
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        200
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        1400
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        187
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        1
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        <div className="flex justify-between">
                            <img src={editButton} alt="#" />
                            <img src={toTrashButton} alt="#" />
                        </div>
                        </td>
                    </tr>
                    <tr className="even:bg-muted m-0 p-0">
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        10204566
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        20/06/20205
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Узбекистан
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        test@test.com
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Tima Zairov
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        200
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        200
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        1400
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        187
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        1
                        </td>
                        <td className="border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        <div className="flex justify-between">
                            <img src={editButton} alt="#" />
                            <img src={toTrashButton} alt="#" />
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
