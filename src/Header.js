import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import logo from './linkedin.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Header() {
  return (
    <div className='header'>

        <div className="header__left">
            <img src={logo} alt="" />

            <div className="header__search">
              <SearchIcon />
              <input type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon}title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon}title='Jobs' />
            <HeaderOption Icon={ChatIcon}title='Messaging' />
            <HeaderOption Icon={NotificationsIcon}title='Notifications' />
            <HeaderOption  
              avatar='https://media.licdn.com/dms/image/D5635AQHz7GThSFdoDg/profile-framedphoto-shrink_200_200/0/1691249002814?e=1699120800&v=beta&t=lTZ7jiZw_jtUx4hfj80QZquuSjGTp8-GzC1xN1nsgv8' title='me' 
            />
        </div>
    </div>
  )
}

export default Header