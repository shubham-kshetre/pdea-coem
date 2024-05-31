import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-column">
                    <img src="/pdea1.jpeg"  alt="Logo" />
                    <p>Pune District Education Association's College of Engineering, Manjari (Bk)
    Manjari Bk, Pincode: 412307</p>
                    <p>Contact us:+91546568113</p>
                </div>
                <div className="footer-column">
                    <h3>Social Media</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Faculty</li>
                        <li>Office</li>
                        <li>Mail</li>
                        <li>Department</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Admission Inquiry</h3>
                    <ul>
                        <li>Toll-Free Number</li>
                        <li>FE Admission</li>
                        <li>Engineering Admission</li>
                        <li>College Contact</li>
                        <li>MBA Admission</li>
                        <li>DSE Admission</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>SPPU</li>
                        <li>Samaj Kalyan</li>
                        <li>PDEA Pune</li>
                        <li>Anti Ragging</li>
                        <li>AICTE</li>
                        <li>MAHADBT</li>
                        <li>DTE</li>
                        <li>RO-DTE Pune</li>
                        <li>Women's DRI Cell</li>
                        <li>Mandatory SID</li>
                    </ul>
                </div>
            </footer>
            <div style={{textAlign:'center'}}>
            <p>© 2022 PDEA College Of Engineering. All Rights Reserved.</p>
            </div>
        </>
    );
};

export default Footer;
