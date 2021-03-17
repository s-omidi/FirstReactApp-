import React from "react";
import { Link, NavLink } from "react-router-dom";
import ShowImage from "../common/showImage";
const Courses = ({ cources }) => {
  return (
    <section className="terms-items">
      <header>
        <h2> آخرین دوره های تاپ لرن </h2>
        <NavLink to="/archive"> مشاهده همه دوره ها </NavLink>
      </header>
      <div className="row">
        {cources.map((cource) => (
          <div
            key={cource._id}
            className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col"
          >
            <article>
              <Link to={`/cource/${cource._id}`} className="img-layer">
                <ShowImage image={cource.imageUrl}></ShowImage>
              </Link>
              <h2>
                <Link to={`/cource/${cource._id}`}> {cource.title} </Link>
              </h2>
              <span> رایگان </span>
              <i>1:52:32</i>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
