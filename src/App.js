import './App.scss';
import TopNavbar from './components/Navbar/TopNavbar';
import Navbar from './components/Navbar/Navbar';
import Boardcolumns from './components/Content/Boardcolumns';

function App() {
  return (
    <div className="container">
      <TopNavbar />
      <Navbar />
      <Boardcolumns />
    </div>
  );
}

export default App;
