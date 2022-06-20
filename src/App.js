import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import Product from './components/Product';
import Products from './Products.json';
import Basket from './components/Basket';
import Navbar from './components/Navbar';


function App() {
  const [money, setMoney] = useState(1000000)
  const [basket, setBasket]= useState([])
  const [total, setTotal]= useState(0)

const resetBasket = () => {
  setBasket([]);
}

useEffect( () => {
  setTotal( basket.reduce((acc, item) => {
    return acc + (item.amount * (Products.find(product => product.id === item.id).price))
  },0)
  )
  
}, [basket])

  return (
    <div >
        <Header total={total} money ={money} />
        <Navbar />
        <div className='container products'> 
        {Products.map(product => (
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
        ))}
        </div>
        {
          total > 0 && (<Basket resetBasket={resetBasket} products={Products} total={total} basket={basket} />)
        }
        
        
    </div>
  );
}

export default App;
