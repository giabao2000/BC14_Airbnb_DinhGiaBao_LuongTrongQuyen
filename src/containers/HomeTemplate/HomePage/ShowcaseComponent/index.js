import React from "react";
import "./style.css";

export default function ShowcaseComponent() {
  return (
    <div>
      <div className="p-l-r-40 row">
        <div className="mt-4 col-lg-3 col-md-6 col-sm-12">
          <div className="showcase-img">
            <img
              src="https://media.cntraveler.com/photos/53da828b6dec627b149eeee6/master/pass/fairmont-kea-lani-hawaii-maui.jpg"
              alt="https://media.cntraveler.com/photos/53da828b6dec627b149eeee6/master/pass/fairmont-kea-lani-hawaii-maui.jpg"
            />
          </div>

          <div className="showcase-info">
            <h5 className="showcase-name">Best Hotel</h5>
            <div className="showcase-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis autem repudiandae fugiat, eaque a amet nulla, dolorem
              voluptatum rerum accusantium maxime! Officia, aut ea! Fugiat quas
              dolorum harum corrupti eius!
            </div>
            <div className="pb-4">
              <button className="btn btn-style">Review</button>
            </div>
          </div>
        </div>

        <div className="mt-4 col-lg-3 col-md-6 col-sm-12">
          <div className="showcase-img">
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6054bc198d151baf9698638e%2FWater-view%2F960x0.jpg%3Ffit%3Dscale"
              alt="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6054bc198d151baf9698638e%2FWater-view%2F960x0.jpg%3Ffit%3Dscale"
            />
          </div>

          <div className="showcase-info">
            <h5 className="showcase-name">White Hotel</h5>
            <div className="showcase-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis autem repudiandae fugiat, eaque a amet nulla, dolorem
              voluptatum rerum accusantium maxime! Officia, aut ea! Fugiat quas
              dolorum harum corrupti eius!
            </div>
            <div className="pb-4">
              <button className="btn btn-style">Review</button>
            </div>
          </div>
        </div>

        <div className="mt-4 col-lg-3 col-md-6 col-sm-12">
          <div className="showcase-img">
            <img
              src="https://cdn.cnn.com/cnnnext/dam/assets/160726134121-us-beautiful-hotels-12-halekulani-1-super-169.jpg"
              alt="https://cdn.cnn.com/cnnnext/dam/assets/160726134121-us-beautiful-hotels-12-halekulani-1-super-169.jpg"
            />
          </div>

          <div className="showcase-info">
            <h5 className="showcase-name">Luxury Hotel</h5>
            <div className="showcase-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis autem repudiandae fugiat, eaque a amet nulla, dolorem
              voluptatum rerum accusantium maxime! Officia, aut ea! Fugiat quas
              dolorum harum corrupti eius!
            </div>
            <div className="pb-4">
              <button className="btn btn-style">Review</button>
            </div>
          </div>
        </div>

        <div className="mt-4 col-lg-3 col-md-6 col-sm-12">
          <div className="showcase-img">
            <img
              src="https://wallpaperaccess.com/full/6688193.jpg"
              alt="https://wallpaperaccess.com/full/6688193.jpg"
            />
          </div>

          <div className="showcase-info">
            <h5 className="showcase-name">Wall Hotel</h5>
            <div className="showcase-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis autem repudiandae fugiat, eaque a amet nulla, dolorem
              voluptatum rerum accusantium maxime! Officia, aut ea! Fugiat quas
              dolorum harum corrupti eius!
            </div>
            <div className="pb-4">
              <button className="btn btn-style">Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
