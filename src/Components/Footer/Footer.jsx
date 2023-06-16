import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-top'>
        <div className='social-links'>
          <a href='' className='social-link'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='social-link'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='social-link'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='social-link'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='social-link'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='social-link'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className='footer-bottom'>
        <div className='footer-container'>
          <div className='footer-column'>
            <h6 className='footer-heading'>Useful links</h6>
            <p>
              <a href='#!' className='footer-link'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='footer-link'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='footer-link'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='footer-link'>
                Help
              </a>
            </p>
          </div>

          <div className='asba'>
            <h6 className='asba'>asba</h6>
            <p>
              <a href='#!' className='asba'>
                abba
              </a>
            </p>
            <p>
              <a href='#!' className='asba'>
                asba
              </a>
            </p>
            <p>
              <a href='#!' className='asba'>
                asba
              </a>
            </p>
            <p>
              <a href='#!' className='asba'>
                asba
              </a>
            </p>
          </div>

          <div className='footer-column'>
            <h6 className='footer-heading'>Contact</h6>
            <p>
              <i className='fas fa-home footer-icon'></i>
              New York, NY 10012, US
            </p>
            <p>
              <i className='fas fa-envelope footer-icon'></i>
              info@example.com
            </p>
            <p>
              <i className='fas fa-phone footer-icon'></i>
              + 01 234 567 88
            </p>
            <p>
              <i className='fas fa-print footer-icon'></i>
              + 01 234 567 89
            </p>
          </div>
        </div>
      </section>

      <div className='footer-bottom-text'>ASBA.@2023</div>
    </footer>
  );
}

export default Footer;
