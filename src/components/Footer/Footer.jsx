import React from 'react'
import './Footer.css'

import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='social-icons'>
        <img src={youtube_icon} alt="YouTube" />
        <img src={facebook_icon} alt="Facebook" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={instagram_icon} alt="Instagram" />
      </div>

      <ul>
        <li><a href="#">Audio and Subtitles</a></li>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Cookie Preferences</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Gift Cards</a></li>
      </ul>

      <p className='copyright-text'>
        This is a clone of Netflix for educational purposes only.
        All rights belong to Netflix.
      </p>

      <p>&copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>

    </div>
  )
}

export default Footer