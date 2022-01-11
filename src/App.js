import AppTable from './components/AppTable/AppTable.component';
import Footer from './components/Footer/Footer.component';
import Navbar from './components/Navbar/Navbar.component';
import Sidebar from './components/Sidebar/Sidebar.component';

function App() {
  return (
    <div>
      <header><Navbar /></header>
      <Sidebar />
      <AppTable />
      <footer><Footer /></footer>   
    </div>
  );
}

export default App;
