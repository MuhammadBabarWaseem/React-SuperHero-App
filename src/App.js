import './App.css';
import { ChakraProvider} from '@chakra-ui/react'
import CardList from './Component/CardList';
import SearchField from './Component/SearchField';
import { useState, useEffect } from 'react';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  
  console.log('Rendered');
  
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://superhero-search.p.rapidapi.com/api/heroes?rapidapi-key=5eb309fd17msh63c6d4f5865c13ap16c590jsn4f0519828b0f')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  
  return (
    <ChakraProvider>
      <div className="App" >
        <center><h1 className='app-title'>Super Heroes</h1>  </center>
        <SearchField onChangeHandler={onSearchChange} /> <br />
        <CardList monsters={filteredMonsters} />
      </div>
    </ChakraProvider>
  );
}


export default App;

