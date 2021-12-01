import './channelCard.scss';


function ChannelVedioCard (){

  return(
    <div className='channel__vedio-card card'>
            <span className='card__vedio-wrap'>
              <img src='' alt="" />
            </span>
            <div className='channel__vedio-title'>
              <h4>A Brief History Of Creation</h4>
              <span className='channel__vedio-subtitle'>
                <span>80k views  ·  3 days ago</span>
                <span>Dollie Blair</span>
              </span>
            </div>
          </div>
  )
};

export default ChannelVedioCard;