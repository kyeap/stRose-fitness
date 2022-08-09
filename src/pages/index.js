import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/intro.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Shit to Fit</span>
              <span className="section-heading-lower">Worth Training</span>
            </h2>
            <p className="mb-3">
              Every session is packed with fun action. Once you try it, exercise
              will be a part of your life like breathing - we guarantee it!.
            </p>
            <div className="intro-button mx-auto">
              <a
                className="btn btn-primary btn-xl"
                href="mailto:kenjoo.dev@gmail.com"
              >
                Email Us today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Stefanie</span>
                <span className="section-heading-lower">To You</span>
              </h2>
              <p className="mb-0">
                When you walk into our shop to start your day, we are dedicated
                to providing you with friendly service, a welcoming atmosphere,
                and above all else, excellent products made with the highest
                quality ingredients. If you are not satisfied, please let us
                know and we will do whatever we can to make things right!
              </p>
              <a
                class="btn btn-primary btn-xl"
                href="https://www.instagram.com/stefanieroseberlin/"
              >
                Follow stefanie on instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Chung</span>
                <span className="section-heading-lower">To You</span>
              </h2>
              <p className="mb-0">
                When you walk into our shop to start your day, we are dedicated
                to providing you with friendly service, a welcoming atmosphere,
                and above all else, excellent products made with the highest
                quality ingredients. If you are not satisfied, please let us
                know and we will do whatever we can to make things right!
              </p>
              <a class="btn btn-primary btn-xl" href="/#">
                Follow chung on instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
