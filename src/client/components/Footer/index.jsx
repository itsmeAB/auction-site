import React from 'react';
import './footer.scss';

const Footer = (props) => {
  return (
    <div className="ui-lib-footer">
      <table>
        <tr>
          <th>Company</th>
          <th>Legal</th>
          <th>Contact</th>
          <th>Follow us:</th>
        </tr>
        <tr>
          <td>About</td>
          <td>Terms of Use</td>
          <td>Contact: contact@anteelo.com</td>
          <td>icons</td>
        </tr>
        <tr>
          <td>FAQs</td>
          <td>Privacy Policy</td>
          <td>Email: support@anteelo.com</td>
        </tr>
        <tr>
          <td>Sign Up</td>
          <td> </td>
          <td>Join Our Facebook Group: Anteelodesign</td>
        </tr>
      </table>
    </div>
  );
}

export default Footer;
