import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <br/>
        <br/>
      </header>
      <AddTransaction />
    </div>
  );
}

export default App;
