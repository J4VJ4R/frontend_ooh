import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,

} from 'react-router-dom'
import './scss/app.scss';
import MenuNav from './components/menu-nav';
import CardTable from './components/card-table';
import Table from './components/table';
import Categories from './components/categories';
import Inventary from './components/inventary';
import InventaryTable from './components/inventary-table';
import OrderTable from './components/order-table';
import VerticalNav from './components/vertical-nav';
import EntriesTable from './components/entries-table';
import OutputsTable from './components/outputs-table';
import ButtonCircle from './components/button-circle'
function App() {
return (
<Router>
  <Switch>

    <Route exact path="/">
      <div className="App container bg-loto-1 pb-4">
        <MenuNav></MenuNav>
        <div className='row'>
          <div className='col d-flex justify-content-center pt-2'>
            <CardTable table="M1" />
          </div>
          <div className='col d-flex justify-content-center pt-2'>
            <CardTable table="M2" />
          </div>
          <div className='col d-flex justify-content-center pt-2'>
            <CardTable table="M3" />
          </div>
        </div>
      </div>
    </Route>
    
    <Route path="/comanda1">
      <div className="App container bg-loto-1 pb-4">
        <MenuNav></MenuNav>
        <Table />
        <Categories></Categories>
      </div>
    </Route>
    <Route path="/caja1">
      <div className="App container bg-loto-1 pb-4">
        <MenuNav></MenuNav>
        <Inventary></Inventary>
      </div>
    </Route>
    <Route path="/inventario-total">
      <div className="App container bg-loto-1 pb-4">
        <MenuNav></MenuNav>
        <h2 className="text-light">Fecha: Martes 21 - 12 - 21</h2>
        <div className='row'>
          <div className="col-sm-12 col-md-2">
            <VerticalNav/>
          </div>
          <div className="col">
            <InventaryTable></InventaryTable>
          </div>
        </div>
      </div>
    </Route>
    <Route path="/salidas">
      <div className="App container bg-loto-1 pb-4">
        <MenuNav></MenuNav>
        <h2 className="text-light">Fecha: Martes 21 - 12 - 21</h2>
        <div className='row'>
          <div className=" col-sm-12 col-md-2">
            <VerticalNav/>
          </div>
          <div className="col">
            <OutputsTable/>
          </div>
        </div>
      </div>
    </Route>
    <Route path="/entradas">
      <div className="App container bg-loto-1 pb-4">
        <MenuNav></MenuNav>
        <h2 className="text-light">Fecha: Martes 21 - 12 - 21</h2>
        <div className='row'>
          <div className=" col-sm-12 col-md-2">
            <VerticalNav/>
          </div>
          <div className="col">
            <EntriesTable/>
          </div>
        </div>
        
      </div>
    </Route>
    <Route path="/pedidos">
      <div className="App container bg-loto-1 pb-4 mr-0">
        <MenuNav></MenuNav>
        <h2 className="text-light">Fecha: Martes 21 - 12 - 21</h2>
        <div className='row'>
          <div className=" col-sm-12 col-md-2">
            <VerticalNav/>
          </div>
          <div className="col">
            <OrderTable/>
          </div>
        </div>
        
      </div>
    </Route>
  </Switch>
</Router>
);
}

export default App;