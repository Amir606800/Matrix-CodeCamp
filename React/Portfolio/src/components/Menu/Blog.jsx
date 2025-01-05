import React from "react";
import { CiClock2 } from "react-icons/ci";
import { LuCalendar } from "react-icons/lu";


const Blog = () => {
  return (
    <>
      <div className="head ">
        <div className="title">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
          />
          <span>My Blog</span>
        </div>
        <div className="subtitle h1">
        Our Latest Blog Idea
          <p className="ps-5">
          UI/UX <span className="">Trends</span>
          </p>
        </div>
        <div className="list row g-4">
            <BlogCard image={"https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img1.png"} />
            <BlogCard image={"https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img2.png"} />
            <BlogCard image={"https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img3.png"} />
            <BlogCard image={"https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img4.png"} />
        </div>
      </div>
    </>
  );
};

export default Blog;
const BlogCard = (props)=>{
    return(
        <>
            <div className="card-invis col-6" data-aos="fade-up">
                <img style={{width:"100%"}} src={props.image} alt="blog1" />
                <div className="context w-100 d-flex flex-column align-items-start justify-content-center">
                    <div className="blog-heading d-flex w-100 align-items-center justify-content-between mt-2">
                        <p>UI/UX</p>
                        <p className="d-flex align-items-center gap-1"><CiClock2 />3 min read</p>
                    </div>
                    <div className="blog-title fs-4 fw-bolder mb-2">Behind the Pixels: My Favorite Design Projects</div>
                    <div className="blog-foot d-flex w-100 justify-content-between ">
                        <div className="creator d-flex align-items-center justify-content-center">
                            <img style={{width:"20px"}} src="https://html.vikinglab.agency/ovro/assets/img/all-images/blog/blog-img5.png" alt="blog-user" />
                            <span className="name ms-2">Alex Carry</span>
                        </div>
                        <div className="date d-flex align-items-center gap-2"><LuCalendar />Oct 26, 2024</div>
                    </div>
                </div>
            </div>
        </>
    )
}
