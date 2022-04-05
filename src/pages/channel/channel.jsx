import './channel.scss';

//Images 
import MargaretImg from '../../assets/images/MargaretImg.jpg';
import FloraImg from '../../assets/images/FloraImg.jpg';
import VioletImg from '../../assets/images/Violet-Img.jpg';
import Phillip from '../../assets/images/Phillip.jpg';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Channel() {
  const {userId} =  useParams();
  const [photos, setPhotos] = useState([]);

  useEffect( () => {
    document.querySelector('.render-page').scrollTo(0, 1);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId ? userId : 1}/albums`)
    .then(res => res.json())
    .then(async data => {

      const userAlbums = data.reduce((acc, id) => {
        return [...acc, id.id]
      },[]);

      const result = await Promise.all(
        userAlbums.map(id => {
          return new Promise((resolve) => {
            fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
              .then(response => {
                return new Promise(() => {
                  response.json()
                    .then(todo => {
                      resolve(todo)
                    })
                })
              })
          })
        })
      ).then(data => data);
  
      setPhotos(result.reduce((acc, curr) => [...acc, ...curr],[]));

      })

  },[userId]);

  

  return (
    <div className="channel">
    <header>
      <div className="header-img">
      </div>
      <div className="header-title-wrap">
        <div className="header-left">
          <img src={MargaretImg} alt="avatar" width="60" height="60" />
          <div>
            <h4 className="header-title">Margaret Phelps</h4>
            <span className="header-subtitle">245K subscribed</span>
          </div>
        </div>
        <div className="header-right">
          <span className="notification"></span>
          <button type="button">Subscribe 2.3m</button>
        </div>
      </div>
        <nav className="site-nav">
          <ul className="site-nav__list">
            <li className="site-nav__item">
                <Link to='/' className="site-nav__link">Home</Link>
            </li>
            <li className="site-nav__item">
            <Link to='/' className="site-nav__link">Vedios</Link>
            </li>
            <li className="site-nav__item">
            <Link to='/' className="site-nav__link">PlayLists</Link>
            </li>
            <li className="site-nav__item">
            <Link to='/' className="site-nav__link">Channels</Link>
            </li>
            <li className="site-nav__item">
            <Link to='/' className="site-nav__link">Discussion</Link>
            </li>
            <li className="site-nav__item">
            <Link to='/' className="site-nav__link">About</Link>
            </li>
          </ul>
        </nav>
      
    </header>
    <div className="intro">
      <div className="intro-video"></div>
      <div className="intro-title-wrap">
        <h3 className="intro-title">Choosing The Best Audio Player Software For Your Computer</h3>
        <p className="intro-text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
        <span className="intro-subtitle">11k views  ·  6 months ago</span>
      </div>
      <div className="recomend-channel">
        <span>Recommended channel</span>
        <ul className="recomend-list">
          <li>
            <img src={FloraImg} alt="FloraImg" />
            <span>Flora Benson</span>
          </li>
          <li>
            <img src={VioletImg} alt="Violet-Img" />
            <span>Flora Benson</span>
          </li>
          <li>
            <img src={Phillip} alt="Phillip Mullins" />
            <span>Flora Benson</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="channel-vedios">
        <h3>Margaret Phelps videos</h3>
      { photos.length > 0 && <ul className="channel-list">
        {photos.map(photo => (
          <li key={photo.id} className="channel-item">
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
  )
}

export default Channel;