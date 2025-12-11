import React from 'react';
import './aboutpage.scss';
import { Link } from 'react-router-dom';

function Aboutpage() {
  return (
    <div className="aboutSection">
      <div className="aboutHeader">
        <div className="overlay"></div>
        <div className="content">
          <h1>About Our Mission</h1>
          <p>We're committed to revolutionizing the real estate experience by providing secure, transparent, and accessible housing solutions for all.</p>
        </div>
      </div>

      <div className='aboutMainsection'>
        <div className="mainrow">
          <div className="maincolumn">
            <div className="maincard">
              <img src="/about1.png" alt="" />
              <h4>We'll Find You The Perfect Space</h4>
              <p className="desc">
                Whether you're looking to buy, rent, or invest, our platform is designed to help you discover the right property that matches your lifestyle and budget.
              </p>
            </div>
          </div>
          <div className="maincolumn">
            <div className="maincard">
              <img src="/about2.png" alt="" />
              <h4>We Work With Your Budget</h4>
              <p className="desc">
                Our tailored property recommendations ensure that you find homes that not only meet your needs but also align with your financial goals.
              </p>
            </div>
          </div>
          <div className="maincolumn">
            <div className="maincard">
              <img src="/about3.png" alt="" />
              <h4>List Your Property Risk Free</h4>
              <p className="desc">
                Listing your property with us is simple and secure. Reach verified buyers and renters with no upfront costs or hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='storySection'>
        <h2>Our Story</h2>
        <p>
          At Real Estate2, we believe that finding the right home is more than just a transaction—it's a life-changing experience. Our journey began with a simple mission: to simplify the home discovery process and bring transparency, trust, and technology into Indian real estate.

          What started as a passion project by a team of tech enthusiasts and property experts has grown into a trusted platform helping people find homes that truly fit their needs—whether it's an urban apartment in Bangalore, a cozy flat in Amritsar, or a luxury villa in Hyderabad.

          We're not just building a property listing site—we're building a movement toward smarter, safer, and more accessible real estate experiences for everyone. With features like fraud detection, real-time listings, and user-friendly design, we’re transforming the way people rent, buy, and sell homes in India.

          Join us as we redefine what it means to find your place in the world.
        </p>
      </div>

      <h2 className='heading'>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="/avatar1.png" alt="Jane" />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/avatar2.png" alt="Mike" />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="/avatar3.png" alt="John" />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutFooter">
        <div className="overlay"></div>
        <div className='footerContent'>
          <h1>START YOUR SEARCH TODAY</h1>
          <p>
            Discover your next home from a wide range of verified listings. Whether you're buying, renting, or listing—take the next step in your journey with confidence and ease.
          </p>
          <Link to="/list">
            <button>See Properties</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
