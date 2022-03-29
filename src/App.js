import {useEffect, useState} from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/searchbox/SearchBox";
import './App.css';



const App = () => {
  const[searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect( ()=>{
    fetch ("https://jsonplaceholder.typicode.com/users")
      .then((response)=>response.json())
      .then((users)=>setMonsters(users));
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  },[monsters, searchField]);

  

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

  return(
    <div className="App">
    <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox 
        className="search-box"
        onChangeHandler={onSearchChange} 
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>

  );
}

// class App extends Component {
//   constructor(){
//     console.log("constructor");
//     super();
//     this.state ={
//       monsters: [],
//       searchField: "",
//     }
//   }

//   componentDidMount(){
//     console.log("mount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=> response.json())
//     .then((users)=>
//       this.setState(
//         ()=>{
//           return { monsters: users };
//         },
//         () => {
//           console.log(this.state);
//         }
//       )
//     );
//   }

//   onSearchChange = 

//   render(){ 
//     console.log("render");

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//     <div className="App">
//     <h1 className="app-title">Monsters Rolodex</h1>
//       <SearchBox 
//         className="search-box"
//         onChangeHandler={onSearchChange} 
//         placeholder="search monsters"
//       />
//       <CardList monsters={filteredMonsters} />
//     </div>
//   );}
// }

export default App;
