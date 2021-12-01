import './home.scss';
import { Link } from 'react-router-dom';
// images
import DollieImg from '../../assets/images/Oval.jpg';
import FoodImg from '../../assets/images/Oval2.jpg'
import { useEffect, useState } from 'react';


function Home() {

  const [photos, setPhotos] = useState([]);
  
  useEffect( () => {
    
    fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
    .then(res => res.json())
    .then(data => setPhotos(data))
    
    
    
  },[]);
  return(
    <div className="home-page">
    <div>
      {/* channel  */}
      <div className='dollie-box'>
        <div className='dollie__header'>
          <div>
           <Link to='/channel'  className='dollie__header-title'>
           <img src={ DollieImg} alt="" />
            <span className='dollie__title'>Dollie Blair</span>
           </Link>
          </div>
        </div>

        { photos.length > 0 && <ul className="dollie__vedio-list">
        {photos.map(photo => (
          <li key={photo.id} className='dollie__vedio-card'>
            <Link to={`/play/${photo.id}`}>
            <div style={{width: '220px', height: '120px', padding: '1px' }}>
              <img style={{display: 'block', height: '120px', borderRadius: '10px'}} src={photo.thumbnailUrl} alt="sd" width='220px' />
            </div>
            <div>
              <span className="channel-vedio-title">{photo.title}</span>
              <span className="channel-vedio-info">
                <span>40k views  ·  4 months ago</span>
                <span>Food & Drink</span>
              </span>
            </div>
            </Link>
        </li>
        ))}
      </ul> }

      </div>   
          {/* recommended */} 
      <div className='recommended-box'>
        <div className='recommended__header'>
          <div className='recommended__header-title-wrap'>
            <span className='recommended__title'>Recommended</span>
          </div>
        </div>
        <ul className="recommended__vedios-list">
          <li className="recommended__vedio-card">
            <span className="recommended__vedio-wrap">
            </span>
            <div className="recommended__vedio-title-wrap">
              <h4>Dude You Re Getting A Telescope</h4>
              <span className="recommended__vedio-subtitle-wrap">
                <span>80k views  ·  3 days ago</span>
                <span>Gussie French</span>
              </span>
            </div>
          </li>
          <li className="recommended__vedio-card">
            <span className="recommended__vedio-wrap">
            </span>
            <div className="recommended__vedio-title-wrap">
              <h4>Dude You Re Getting A Telescope</h4>
              <span className="recommended__vedio-subtitle-wrap">
                <span>80k views  ·  3 days ago</span>
                <span>Gussie French</span>
              </span>
            </div>
          </li>
          <li className="recommended__vedio-card">
            <span className="recommended__vedio-wrap">
            </span>
            <div className="recommended__vedio-title-wrap">
              <h4>Dude You Re Getting A Telescope</h4>
              <span className="recommended__vedio-subtitle-wrap">
                <span>80k views  ·  3 days ago</span>
                <span>Gussie French</span>
              </span>
            </div>
          </li>
          <li className="recommended__vedio-card">
            <span className="recommended__vedio-wrap">
            </span>
            <div className="recommended__vedio-title-wrap">
              <h4>Dude You Re Getting A Telescope</h4>
              <span className="recommended__vedio-subtitle-wrap">
                <span>80k views  ·  3 days ago</span>
                <span>Gussie French</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
       {/* food & drink */} 
      <div className='food-box'>
        <div className='food__header'>
          <div>
            <Link to='/channel' className='food__header-title'>
            <img src={FoodImg} alt="" />
            <span className='food__title'>Food & Drink</span>
            </Link>
          </div>
        </div>
        { photos.length > 0 && <ul className="food__vedio-list">
        {photos.map(photo => (
          <li key={photo.id} className='food__vedio-card'>
            <Link to={`/play/${photo.id}`}>
            <div style={{width: '220px', height: '120px', padding: '1px' }}>
              <img style={{display: 'block', height: '120px', borderRadius: '10px'}} src={photo.thumbnailUrl} alt="sd" width='220px' />
            </div>
            <div>
              <span className="channel-vedio-title">{photo.title}</span>
              <span className="channel-vedio-info">
                <span>40k views  ·  4 months ago</span>
                <span>Food & Drink</span>
              </span>
            </div>
            </Link>
        </li>
        ))}
      </ul> }
          
      </div> 
         
  </div>
  </div>
  )
}

export default Home;