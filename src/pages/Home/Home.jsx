import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="main_container">
        <div className="hero_section">
          <div className="company_info">
            <img
              src="src/assets/images/workit logo 1.svg"
              alt="logo"
              className="company_logo"
            />
            <h1>Build your own app/site without coding</h1>
          </div>

          <div className="hero_images_and_btn">
            <img
              src="src/assets/images/undraw_well_done_re_3hpo 1.svg"
              alt="logo2"
            />
            <div className="start_building_btn">
                <button>
                    {/* router */}
                    <Link to="/loginsignup">Start Building</Link>
                </button>
            </div>
            <img
              src="src/assets/images/undraw_undraw_undraw_shopping_bags_2ude_-1-_mnw3_-2-_q7y0 1.svg"
              alt="logo3"
            />
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="Section2_detail">
          <img
            src="src/assets/images/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo 2.svg"
            alt="logo4"
            className="section2_image1"
          />
          <div className="description">
            <h1>
              Add features to your app like shopping <br />
              online
            </h1>
          </div>
        </div>
        <img
          src="src/assets/images/undraw_undraw_selection_f3no_lndu 1.svg"
          alt="logo5"
          className="building_image"
        />
      </section>
    </div>
  );
};

export default Home;
