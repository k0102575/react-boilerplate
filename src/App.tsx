import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Container from './features/Layout/components/Container';
import MainRoutes from './features/Home/Routes';
import ProductRoutes from './features/Product/Routes';
import ErrorBoundary from './features/Layout/components/ErrorBoundary';
import NotFoundPage from './components/ErrorPage/NotFoundPage';

const App = () => {
  // react query
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ErrorBoundary>
          <Routes>
            <Route element={<Container />}>
              <Route index element={<MainRoutes />} />
              <Route path="product/*" element={<ProductRoutes />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
