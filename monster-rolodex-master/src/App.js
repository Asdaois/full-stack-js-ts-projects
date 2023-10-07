import React, { useEffect, useState } from "react";
import CardList from "./components/CardList.component";
import { SearchBox } from "./components/SearchBox.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  const filterMonsters = (array = [], searchParams = "") => {
    if (array.length === 0) return array;
    const filteredMonsters = array.filter((monster) => {
      const monsterName = monster.name.toLowerCase();
      const search = searchParams.toLowerCase();
      return monsterName.includes(search);
    });
    return filteredMonsters;
  };

  return (
    <div className="">
      <SearchBox handleChange={setSearchField} placeholder="Meoww!!!!" />
      <CardList monsters={filterMonsters(monsters, searchField)} />
    </div>
  );
}

export default App;
