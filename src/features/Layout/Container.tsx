import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

/*
  Component
*/
const Container = () => {
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

export default Container;
