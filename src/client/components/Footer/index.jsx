import React from 'react';
import FbImage from './Facebook.png';
import InstaImage from './Instagram.png';
import TwitterImage from './Twitter.png';
import './footer.scss';

const Footer = (props) => {
  return (
    <div className="ui-lib-footer">
      <table>
        <tr>
          <th className="th__logo"> </th>
          <th>Company</th>
          <th>Legal</th>
          <th>Contact</th>
          <th>Follow us:</th>
        </tr>
        <tr>
          <td> </td>
          <td>About</td>
          <td>Terms of Use</td>
          <td>Contact: contact@anteelo.com</td>
          <td>
            <img src={FbImage} alt=""/>
            <img src={InstaImage} alt=""/>
            <img src={TwitterImage} alt=""/>
          </td>
        </tr>
        <tr>
          <td> </td>
          <td>FAQs</td>
          <td>Privacy Policy</td>
          <td>Email: support@anteelo.com</td>
        </tr>
        <tr>
          <td> </td>
          <td>Sign Up</td>
          <td> </td>
          <td>Join Our Facebook Group: Anteelodesign</td>
        </tr>
      </table>
    </div>
  );
}

export default Footer;
