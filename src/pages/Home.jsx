import React from 'react';
import { useParams } from 'react-router-dom';
import NewsBlock from '../components/NewsBlock/NewsBlock';

function Home() {

 
  return (
    <div>
      <NewsBlock></NewsBlock>
    </div>
  )
}

export default Home
