import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src='/notFound.svg' alt='notFoudnd'/>
          <h1>LOOK'S LIKE YOU'RE LOST</h1>
          <p>We can't seem to find you the page your're looking for</p>
          <Link to={'/'}>Back to Home <span></span></Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;