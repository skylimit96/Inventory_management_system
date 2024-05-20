import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
        <Dashboard className="dashboard" />
      </main>
    </div>
  );
}

export default App;
