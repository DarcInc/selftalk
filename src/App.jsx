import React from 'react';
import Body from './redux/components/body';
import TopNavigation from './redux/components/topnav';
import BottomNavigation from './redux/components/bottomnav';
import './App.css';

const app = (props) => {
  return (
    <>
      <TopNavigation />
      <section className='body'>
        <Body />
      </section>
      <BottomNavigation />
    </>
  );
}

export default app;
