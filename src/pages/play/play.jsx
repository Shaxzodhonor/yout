import  './play.scss';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// images 
import like from '../../assets/images/like.png';
import dissLike from '../../assets/images/disslike.png';
import more from '../../assets/images/More.png';
import { useEffect, useState } from 'react';

function PlayPage () {
  const {photosId} = useParams()
  const [photoSrc, setPhotoSrc] = useState('https://via.placeholder.com/150/6e2251');
  const [album, setAlbum] = useState([])
  

  useEffect(() => {

    document.querySelector('.render-page').scrollTo(0, 1);

    fetch(`https://jsonplaceholder.typicode.com/photos/${photosId}`)
    .then(res => res.json())
    .then(data => {
      setPhotoSrc(data)
      fetch(`https://jsonplaceholder.typicode.com/albums/${data.albumId}/photos`)
      .then(res => res.json())
      .then(data => setAlbum(data))
    })

  
  }, [photosId])

  return (
    <div className="player-page">
    <div className="player-left">
{/* berlgan apimizda vedio emas img bo'lganligi sababli  shunaqa yomon yo'llardan yurdik  hayot majburladi*/}
      <div className="select-vedio-wrap" style={{padding: '1px', backgroundImage: `url(${photoSrc.url})`,  }}>
      </div>

      <h4 className="select-vedio-title">Dude You Re Getting A Telescope</h4>
      <div className="select-vedio-subtitle-wrap">
        <span>123k views</span>
        <div className="liked-buttons">
          <button >
            <img src={like} alt='like' />  
            123k
          </button>
          <button>
            <img src={dissLike} alt='dissLike' />  123k
          </button>
          <button>share</button>
          <button className="more-btn">
            <img src={more} alt='more'/>
          </button>
        </div>
      </div>
      <div className="select-vedio-channel-wrap">
        <div>
          <h4>Food & Drink</h4>
          <span>Published on 14 Jun 2019</span>
          <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
          <button className="more-btn" type="button">Show more</button>
        </div>
        <button className="subscribe-btn" type="button">Subscribe 2.3m</button>
      </div>
    </div>
    <div className="player-right">
      <div className="player-next-wrap">
        <span className="player-next">Next</span>
        <span className="player-autoplay">Autoplay</span>
      </div>
    {album.length > 0 && <ul className="play-list">
      {album.map(arr => (
        <li key={arr.id} className="play-list-item">
          <Link to={`/play/${arr.id}`}>
          <span className="play-item-img">
            <img src={arr.url} alt="arr.title" width='100%' height='120px' style={{display: 'block', height: '100%'}} />
          </span>
          <h4 className="play-item-title">{arr.title}</h4> 
          <div className="play-item-text-wrap">
           <span>123k views</span>
           <span>Dollie Blair</span>
        </div>
          </Link>
      </li>))}
    </ul> }
    </div>
  </div>
  )
}

export default PlayPage;