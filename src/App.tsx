import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotFoundPage from './components/ErrorPage/NotFoundPage';
import Container from './features/Layout/Container';
import MainRoutes from './features/Home/Routes';
import ProductRoutes from './features/Product/Routes';

const App = () => {
  // react query
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Container />}>
          <Route index element={<MainRoutes />} />
          <Route path="product/*" element={<ProductRoutes />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
