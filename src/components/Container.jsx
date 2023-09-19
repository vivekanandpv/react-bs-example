import React from 'react';
import Banner from './Banner';
import CardHolder from './CardHolder';

const Container = (props) => {
  return (
    <>
      <main>
        <Banner />
        <CardHolder />
      </main>
    </>
  );
};

export default Container;
