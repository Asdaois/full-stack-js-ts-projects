import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/shop-list">ShopList</Link>
      </li>
    </ul>
  );
}
