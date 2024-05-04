import React from 'react';
import "./footer1.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer1() {
  return (
    <div className="footer">
      <div className='insideTop'>
      <div className='logo'>
        <img src="pdea1.jpeg" alt="College logo" />
      </div>

      <div className='description'>
        <h2>Locate us:</h2>
        <a href="https://www.google.com/maps/place/Pune+District+Education+Association's+College+of+Engineering/@18.5265452,73.978963,19z/data=!4m6!3m5!1s0x3bc2c258af5922cf:0xde3b91beb5003629!8m2!3d18.5241648!4d73.9827771!16s%2Fg%2F1vnrp1lj?entry=ttu">PDEA COEM</a>
        <p>Pune District Education Association's College of Engineering, Manjari (Bk) <br/>
        Manjari Bk, Pincode: 412307 <br/>
         <br/>
         Contact us:+91546568113 <br />
        </p>
      </div>

      <div className='sharelink'>
        <h3>Stay Up To Date With What's Happening</h3>
        <div className='symbol'>
          <a href="https://www.instagram.com/your-instagram"><InstagramIcon sx={{ fontSize: 40 }} /> </a>
          <a href="https://www.facebook.com/your-facebook"><FacebookIcon sx={{ fontSize: 40 }}/></a>
          <a href="https://web.whatsapp.com/your-whatsapp"><WhatsAppIcon sx={{ fontSize: 40 }}/></a>
          <a href="https://www.linkedin.com/in/your-linkedin"><LinkedInIcon sx={{ fontSize: 40 }}/></a>
          <a href="https://www.linkedin.com/in/your-linkedin"><XIcon sx={{ fontSize: 40 }}/></a>

        </div>
      </div>
      </div>

      <div className='insideBottom'>
          <p>© 2022 PDEA College Of Engineering. All Rights Reserved.</p>
        </div>
    </div>
    
  );
}

export default Footer1;
