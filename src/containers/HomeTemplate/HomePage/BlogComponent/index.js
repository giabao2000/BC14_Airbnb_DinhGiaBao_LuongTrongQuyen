import React from "react";
import "./style.css";

export default function BlogComponent() {
  return (
    <div className="blog">
      <div className="row blog-content">
        <div className="col-lg-5 col-md-12 col-sm-12" style={{ padding: "0" }}>
          <div className="blog-img">
            <img
              src="https://purewows3.imgix.net/images/articles/2019_08/suites-600.jpg?auto=format,compress&cs=strip"
              alt="https://purewows3.imgix.net/images/articles/2019_08/suites-600.jpg?auto=format,compress&cs=strip"
            />
          </div>
        </div>

        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="blog-info">
            <h2 className="blog-title">Hotel San Francisco</h2>

            <div className="blog-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              alias maxime vero neque quas aspernatur omnis animi rerum eveniet,
              placeat illo. Quae quisquam itaque repudiandae aperiam officia
              pariatur hic ratione! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor, aperiam quisquam repellendus voluptas
              necessitatibus sed eaque quaerat! Obcaecati blanditiis ipsum et
              architecto atque iste, velit unde, voluptates nisi possimus
              consequuntur. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Fugiat reprehenderit consequatur vitae neque eos aliquid
              inventore laboriosam corporis quidem velit, corrupti esse maxime
              assumenda ab a tenetur beatae laborum at!
            </div>

            <div className="btn-review">
              <button className="btn btn-style">Review</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
