import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

/*
  Component
*/
const GlobalLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default GlobalLayout;
