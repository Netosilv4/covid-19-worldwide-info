import React from 'react';
import '../../styles/footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div>
        Developed by
        <a className="FooterLink" href="https://www.linkedin.com/in/netosilv4/" target="blank">José Reginaldo Da Silva Neto</a>
      </div>
      <div>
        Collaboration
        {' '}
        <a className="FooterLink" href="https://www.linkedin.com/in/carolinebenichio/" target="blank">Caroline Benichio</a>
      </div>
    </footer>
  );
}

export default Footer;
