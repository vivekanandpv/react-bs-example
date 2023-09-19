import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import ThemeChanger from './components/ThemeChanger';

const App = (props) => {
  return (
    <>
      <ThemeChanger />
      <Navbar />
      <Container />
      <Footer />
    </>
  );
};

export default App;
