import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/ErrorPage/NotFoundPage';
import Container from './features/Layout/Container';
import MainRoutes from './features/Home/Routes';
import ProductRoutes from './features/Product/Routes';

const App = () => {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route index element={<MainRoutes />} />
        <Route path="product/*" element={<ProductRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
