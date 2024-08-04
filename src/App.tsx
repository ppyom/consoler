import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header/Header.tsx';
import Footer from './components/layouts/Footer/Footer.tsx';

const App = () => {
  return (
    <>
      <Header />
      <main>{Outlet}</main>
      <Footer />
    </>
  );
};

export default App;
