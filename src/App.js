
import { Fragment } from 'react';
import './App.css';
import Header from './components/header';


function App() {
  

 
  return (
    <Fragment>

      <Header />
      
    </Fragment>
  );
}


export default App;









/*
const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestireapi.com/products')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  console.log(data);


<div className='App bg-homeBg'>
      <h2>Hello</h2>

      {data.map((post) => {
        <div className='border bg-red-400'>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      })}

    </div>
    */