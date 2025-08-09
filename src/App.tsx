
import { QueryClientProvider } from '@tanstack/react-query';

import { MainPage } from './pages/mainPage/MainPage';
import { queryClient } from './config/queryClient/queryClient';



function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <MainPage/>
      </QueryClientProvider>
  )
}

export default App
