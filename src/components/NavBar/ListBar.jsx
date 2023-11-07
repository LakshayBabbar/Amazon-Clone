import './ListBar.css';
import {GiHamburgerMenu} from 'react-icons/gi';

function ListBar() {
  return (
    <div className="listbar-wrapper">
      <ul>
        <li id='ico'><GiHamburgerMenu style={{color: "white", fontSize: "1.2rem"}} /></li>
        <li>All</li>
        <li>Today&#39; Deals</li>
        <li>Registry</li>
        <li>Customer Service</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default ListBar;
