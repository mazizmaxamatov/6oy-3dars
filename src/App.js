import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import './App.css';
import Header from './components/header';



function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);


  console.log(data);


  return (
    <Fragment>

      <Header />

      <div className='App max-w-[1440px] mx-auto' >
          <h1>hello</h1>

        {data.map((post) => {
          return (
            <div className='border bg-[black] text-[#FFFFFF]'>
              <h1>{post.category}</h1>
              <h2>{post.price}</h2>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          )
        })}
      </div>

    </Fragment>
  );
}


export default App;
