import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header/Header.tsx';
import Footer from './components/layouts/Footer/Footer.tsx';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
