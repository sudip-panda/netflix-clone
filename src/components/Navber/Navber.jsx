import React from 'react'
import './Navber.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
const Navber = () => {
  return (
    <div className='navber'>
      <div className='navber-left'>
       <img src={logo} alt="Netflix Logo" />
       <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
       </ul>
      </div>
      <div className='navber-right'>
      <img src={search_icon} alt="" className='icons'/>
      <p>Kids</p>
      <img src={bell_icon} alt="" className='icons'/>
      <div className='navber-profile'>
        <img src={profile_img} alt="" className='profile'/>
        <img src={caret_icon} alt=""/>
        <div className="dropdown">
          <p>sign</p>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Navber
