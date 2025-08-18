import { Header, Sidebar } from '@/features';
import type { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
