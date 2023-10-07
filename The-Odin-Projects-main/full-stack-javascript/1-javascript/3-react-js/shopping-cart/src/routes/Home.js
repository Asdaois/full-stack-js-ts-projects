import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Have a better pet</h2>
      <p>
        Do you are tired of the regular pets?, if the answer is yes we have
        <span> better pets</span> for you just checkout our{' '}
        <Link to="/shop">catalogue</Link>
      </p>
    </div>
  );
}
