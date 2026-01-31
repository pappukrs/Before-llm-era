import './App.css';
import Counter from './features/counter/counter'
import Users from './features/users/users';


function App() {
  return (
    <div  style = {{textAlign: 'Center', marginTop: '50px'}}>
    <h1>Coder Going to Before Gpt Era</h1>
    <Counter/>
    <Users/>
    </div>
  );
}

export default App;
