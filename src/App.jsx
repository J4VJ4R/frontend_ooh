import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,

} from 'react-router-dom'
import './scss/app.scss';
import MenuNav from './components/menu-nav';
import CardTable from './components/card-table';
import CardTable1 from './components/card-table1';
import CardTable2 from './components/card-table2';
import CardTable3 from './components/card-table3';
import CardTable4 from './components/card-table4';
import CardTable5 from './components/card-table5';
import CardTable6 from './components/card-table6';
import CardTable7 from './components/card-table7';
import CardTable8 from './components/card-table8';
import qr from './assets/qr.png'

// import ButtonCircle from './components/button-circle'
function App() {
return (
<Router>
  <Switch>

    <Route exact path="/">
      <div className="App container-custom bg-1 pb-4">
        <MenuNav></MenuNav>
        {/* nine cards for canvas board */}
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center pt-2'>
            <CardTable />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center pt-2'>
            <CardTable1 table="M2" />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center pt-2'>
            <CardTable2 />
          </div>
          <div className='col-xs-12 col-sm-4 d-flex justify-content-center pt-2'>
            <CardTable8 />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center pt-2'>
            <CardTable3 />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center pt-2'>
            <CardTable4 />
          </div>
          <div className='col-xs-12  col-sm-6 col-md-4 d-flex justify-content-center pt-2'>
            <CardTable5 />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center pt-2'>
            <CardTable6 />
          </div>
          <div className='col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center pt-2'>
            <CardTable7 />
          </div>
        </div>
      </div>
    </Route>
    <Route path="/qr">
      <div className="container-fluid qr-bg d-colum " height={1500}>
        <div className="container">
          <MenuNav></MenuNav>
          <img src={qr} alt='table' className='m-5 img-fluid mx-auto qr'></img>
        </div>
      </div>
    </Route>
  </Switch>
</Router>
);
}

export default App;