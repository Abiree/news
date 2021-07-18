import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import News from "./components/News/News";
const Users = () => {
 // state
 const [users, setUsers] = React.useState([]);
 // effects
 React.useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users")
     .then((res) => res.json())
     .then((users) => {
       setUsers(users);
     })
     .catch((err) => {});
 }, []);
 // render
 return (
   <div>
     <h2>Users</h2>
     <ul>
       {users.map((user) => (
         <li key={user.id}>
           {user.name} ({user.email})
         </li>
       ))}
       </ul>
   </div>
 );
};
const App = () => (
 <BrowserRouter>
   <Route path="/" exact component={Users} />
   <Route path="/news" exact component={News} />

 </BrowserRouter>
);
export default App;