import { Hero, Sidebar, Table } from "../../features";


export function Admin() {
  return (
    <section className="bg-light-gray">
        <Hero/>
        <div className="flex flex-row">
            <Sidebar/>
            <Table />
        </div>
    </section>
  )
}
