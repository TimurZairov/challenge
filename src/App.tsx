import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './config/queryClient/queryClient';
import { MainPage } from './pages/mainPage/MainPage';


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
}

export default App;
