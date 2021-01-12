import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import {TableApplicationsView} from './components/TableApplicationsView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <br/>
        <br/>
      </header>
      <AddTransaction />
      <br/>
      <br/>
      <TableApplicationsView />
    </div>
  );
}

export default App;
