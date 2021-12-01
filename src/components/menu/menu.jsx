import * as React from 'react';
import { Link } from 'react-router-dom';


import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeOutlined from '@mui/icons-material/HomeOutlined';
import WhatshotOutlined from '@mui/icons-material/WhatshotOutlined';
import SubscriptionsOutlined from '@mui/icons-material/SubscriptionsOutlined';
import FolderOutlined from '@mui/icons-material/FolderOutlined';
import AlarmOnOutlined from '@mui/icons-material/AlarmOnOutlined';
import StarOutlineOutlined from '@mui/icons-material/StarOutlineOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import SportsEsportsOutlined from '@mui/icons-material/SportsEsportsOutlined';
import AudiotrackOutlined from '@mui/icons-material/AudiotrackOutlined';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import MenuBook from '@mui/icons-material/MenuBook';

function Menu(){
  return (
    <div>
      <List>  
        <Link to='/' >
          <ListItem button>
            <ListItemIcon >
              <HomeOutlined style={{ color: 'white'}} />
            </ListItemIcon>
            <ListItemText style={{color: 'white'}}>Home</ListItemText>
          </ListItem>
        </Link>  
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <WhatshotOutlined  style={{ color: 'white'}}/>
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>Trending</ListItemText>
            </ListItem>
            </Link>
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <SubscriptionsOutlined style={{ color: 'white'}}/>
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>Subscriptions</ListItemText>
            </ListItem>
            </Link>
          </List>

          <List>
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <FolderOutlined  style={{ color: 'white'}}/>
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>Library</ListItemText>
            </ListItem>
            </Link>
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <MenuBook style={{ color: 'white'}}/>
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>History</ListItemText>
            </ListItem>
            </Link>
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <AlarmOnOutlined style={{ color: 'white'}} />
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>Watch later</ListItemText>
            </ListItem>
            </Link>
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <StarOutlineOutlined  style={{ color: 'white'}}/>
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>Favourites</ListItemText>
            </ListItem>
            </Link>
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <FavoriteBorderOutlined  style={{ color: 'white'}}/>
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>Liked videos</ListItemText>
            </ListItem>
            </Link>
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <AudiotrackOutlined  style={{ color: 'white'}}/>
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>Music</ListItemText>
            </ListItem>
            </Link>
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <SportsEsportsOutlined  style={{ color: 'white'}}/>
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>Games</ListItemText>
            </ListItem>
            </Link>
            <Link to='/empty'>
            <ListItem button>
              <ListItemIcon>
                <ExpandMoreOutlined  style={{ color: 'white'}}/>
              </ListItemIcon>
              <ListItemText style={{ color: 'white'}}>More</ListItemText>
            </ListItem>
            </Link>
          </List>
    </div>
  )
}

export default Menu;