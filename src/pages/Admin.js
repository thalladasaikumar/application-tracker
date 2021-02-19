import { Header } from '../components/Header';
import { AddApplication } from '../components/AddApplication';
import {TableApplicationsView} from '../components/TableApplicationsView';
import {GlobalProvider} from '../context/GlobalState'

function Admin(props) {
  return (
    <GlobalProvider>
      <header className="App-header">
        <Header />
        <br/>
        <br/>
      </header>
      <AddApplication />
      <br/>
      <br/>
      <TableApplicationsView />
    </GlobalProvider>
  );
}

export default Admin;