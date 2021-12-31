import Footer from './components/Footer/Footer.component';
import Navbar from './components/Navbar/Navbar.component';
import Sidebar from './components/Sidebar/Sidebar.component';

function App() {
  return (
    <div>
      <header><Navbar /></header>
      <Sidebar />
      <footer><Footer /></footer>   
    </div>
  );
}

export default App;
