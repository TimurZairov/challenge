import type { PropsWithChildren } from "react";
import { Header, Sidebar } from "../../features";


export function Layout({children}:PropsWithChildren) {
  return (
    <div>
        <Header/>
        <div className="flex flex-row">
          <Sidebar />
          {children}
        </div>
    </div>
  )
}
