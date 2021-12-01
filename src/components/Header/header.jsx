import './header.scss';

//images
import Logom from '../../assets/images/logo.png';
import Search from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Apps from '@mui/icons-material/Apps';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
import Notifications from '@mui/icons-material/Notifications';
import Userpic from '../../assets/images/Userpic.jpg';




function Header({ menuState, setMenuState }) {

  function Menu (){
  
    if(document.querySelector('.menu-wrap')) {
      document.querySelector('.menu-wrap').scrollTo(0, 1);
      document.querySelector('.subscribe').style.display = 'none'
     }
    if(menuState.todo){
      setMenuState({todo: false, value: '60px', overflowY: 'hidden'})
      if(document.querySelector('.menu-wrap')) {
        document.querySelector('.menu-wrap').scrollTo(0, 1);
        document.querySelector('.subscribe').style.display = 'none'
       }
      
    } else {
      setMenuState({todo: true, value: '240px', overflowY: 'auto'})
      document.querySelector('.subscribe').style.display = 'block';
    }
  }

  return (
    <header className='header'>
      <div className='header-Left'>
        <button className='menu-button' onClick={Menu}>
          <MenuIcon style={{color: 'white'}} />
        </button>
        <span className='logo-wrap'>
          <img src={Logom} alt="Logo" />
        </span>
        <form style={{display: 'flex', alignItems: 'center'}} >
          <input className='search-input' type="search" placeholder='search' id='searchInputId' />
          <label htmlFor="searchInputId" className='search-label'>
            <Search  style={{color: '#fff'}} />
          </label>
        </form>
      </div>
      <div className='header-Right'>
        <VideoCameraBack style={{color: '#747478'}} />
        <Apps style={{color: '#747478', marginLeft: '30px', marginRight: '30px'}}/>
        <div className='bell'>
          <Notifications style={{color: '#747478'}} />
        </div>
        <span>
          <img src={Userpic} alt="Userpic" style={{borderRadius: '50px', marginLeft: '50px', marginRight: '30px'}} />
        </span>
      </div>
    </header>
  )
}

export default Header;
