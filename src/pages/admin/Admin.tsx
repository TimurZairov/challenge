import { Hero, Sidebar, Table } from "../../features";


export function Admin() {
  return (
    <section className="" >
        <Hero/>
        <div className="flex flex-row">
            <Sidebar />
            <Table />
        </div>
    </section>
  )
}
