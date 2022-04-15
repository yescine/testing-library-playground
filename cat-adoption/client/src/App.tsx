import React from 'react';
import './App.css';
import Card,{Props as CardProps} from './components/Card';
import Cards,{Props as CardsProps} from './components/Cards';

const cardsProp: CardsProps["cats"] = [{
  email: "email@email.com",
  image: { alt: "cute cat", url: "https://images.unsplash.com/photo-1562955239-78d8c23a3542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" },
  isFavorite: true,
  name: "name",
  phone: "123123",
}];

function App() {
  return (
    <div className="App">
      <Cards cats={[...cardsProp,...cardsProp]} />
    </div>
  );
}

export default App;
