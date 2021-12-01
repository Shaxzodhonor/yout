import './App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

//pages
import Home from './pages/home/home';
import Channel from './pages/channel/channel';
import Empty from './pages/emty';



//components
import Header from './components/Header/header';
import Menu from './components/menu/menu';
import PlayPage from './pages/play/play';

//images
import Face from '@mui/icons-material/Face';

function App() {
  const [menuState, setMenuState] = useState({todo: false, value: "60px",  overflowY: 'hidden' });
  const [data, setData] = useState([]);
  useEffect(() => {
    
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then(data => setData(data))
  },[]);

  return (
    <div className="App">
      <Header menuState={menuState} setMenuState={setMenuState} />
      <div style={{backgroundColor: '#000', display: 'flex', height: 'calc(100vh - 64px)', }}>
      {/* menu-wrap */}
        <div  className='menu-wrap' style={{ width: menuState.value, height: '100%',  overflowX: 'hidden',  overflowY: menuState.overflowY}}>
          <Menu menuState={menuState} />
      {/* subscribe-wrap */}
          <div className='subscribe' style={{display: 'none'}}>
          <h4 style={{ color: 'white', marginLeft: '16px'}}>Subscriptions</h4>
          {data.length > 0 && ( 
          <ul style={{paddingLeft: '20px'}}>
            {data.map(user => (
              <li key={user.id} className='subscriptions'>
                <Link className='subscriptions' to={`/channel/${user.id}`}>
                <Face color="secondary" style={{verticalAlign: 'middle', marginRight: '10px'}} />
                <span>{user.name}</span>
                </Link>
              </li>))}
          </ul>)}
        </div>    
      </div>
        
      <div className='render-page'>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/channel/:userId'  component={Channel} />
          <Route path='/channel' exact  component={Channel} />
          <Route path='/play/:photosId' component={PlayPage} />
          <Route path='/empty' component={Empty} />
          <Route path='*' exact ><h1>ERROR</h1></Route>
        </Switch>

      </div>
      
      </div>
    </div>
  );
}

export default App;
