import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/ErrorPage/NotFoundPage';
import GlobalLayout from './components/Layout/GlobalLayout';
import MainRoutes from './features/Home/Routes';
import ProductRoutes from './features/Product/Routes';

const App = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route index element={<MainRoutes />} />
        <Route path="product/*" element={<ProductRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
