import './App.css';
import BoxLastItem from './components/boxLastItem/BoxLastItem';
import ProductosEnDb from './components/informes/ProductosEnDb';
import TotalDeImporteEnDb from './components/informes/TotalDeImporteEnDb';
// import TotalDeImporteEnDb from './components/informes/TotalDeImporteEnDb';
import TotalUsuariosEnDb from './components/informes/TotalUsuariosEnDb';
import NavBar from './components/navBar/NavBar';
import SideMenu from './components/sideMenu/SideMenu.jsx';



function App() {
  return (
    <div className='bg-light.bg-gradient'  id='wrapper'>
      <SideMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NavBar/>
          <div className="container-fluid">
            
            <div className="row">
              <ProductosEnDb />
              <TotalUsuariosEnDb />
              <TotalDeImporteEnDb />
            </div>
            <div className="row">
              <BoxLastItem />

            </div>

          </div>

          





      </div>

      </div>
    </div>

   
  );
}

export default App;
