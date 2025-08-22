import React from 'react'

const MainLayout = ({Children}) => {
  return <div className='container mx-auto my-32'>{Children}</div>;
};

export default MainLayout;