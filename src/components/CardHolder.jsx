import React from 'react';
import Card from './Card';

const CardHolder = (props) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className='album py-5 bg-body-tertiary'>
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {items.map((e, i) => (
              <div className='col' key={i}>
                <Card index={e} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHolder;
