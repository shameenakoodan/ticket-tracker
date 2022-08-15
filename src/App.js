import './App.scss';
import EmployeeContainer from './container/EmployeeContainer';
import ticketData from './data/ticketData';

const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
        Ticket Tracker
      </header>
      <main>
          <EmployeeContainer EmployeeArr ={ticketData} />
      </main>
    </div>
  );
}

export default App;