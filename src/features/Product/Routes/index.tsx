import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '@/components/ErrorPage/NotFoundPage';
import DetailPage from '../pages/DetailPage';
import ListPage from '../pages/ListPage';

const ProductRoutes = () => {
  return (
    <Routes>
      <Route index element={<ListPage />} />
      <Route path=":productId" element={<DetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default ProductRoutes;
