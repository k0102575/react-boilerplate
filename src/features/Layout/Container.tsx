import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import Header from './Header';

/*
  Component
*/
const Container = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Container;
