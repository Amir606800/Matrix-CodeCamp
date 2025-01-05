import React from "react";

const TestimonialCard = (props) => {
  return (
    <>
      <div className="card p-4 w-100 " data-aos="zoom-in">
        <div className="feats d-flex w-100 justify-content-between">
          <div className="stars start-0 fs-2 text-warning">* * * * *</div>
          <div className="quote fw-bolder fs-2 end-0">"</div>
        </div>
        <div className=" pb-3">{props.text}</div>
        <div className="sender d-flex align-items-center gap-3">
          <img
            src={props.image}
            alt="User"
          />
          <div className="info">
            <div className="name fs-4">{props.name}</div>
            <div className="place">{props.job}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Testimonial = () => {
  return (
    <>
      <div className="head">
        <div className="title">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
          />
          <span>My Testimonial</span>
        </div>
        <div className="subtitle h1">
          What Client Says
          <p className="ps-5">
            About <span className="">My Work</span>
          </p>
        </div>
        <div className="reviews d-flex justify-content-center  gap-4">
          <TestimonialCard
            image={"https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img1.png"}
            text={`"Working with Alex was a game-changer for our brand. Their attention
          to detail and focus on creating a seamless user experience truly
          transformed our website. We’ve seen an incredible boost in user
          engagement and satisfaction."`}
            name={`David Elson`}
            job={`Ezhe Source`}
          />

          <TestimonialCard
            image={"https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img2.png"}
            text={`"Alex exceeded all expectations with their innovative designs and collaborative approach. Reality that perfectly resonates with our audience."`}
            name={`Chris Glasser`}
            job={`Auto Works`}
          />
        </div>
        <div className="reviews d-flex justify-content-center mt-4 gap-4">
          <TestimonialCard
            image={"https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img3.png"}
            text={`"From wireframes to the final product, Alex brought creativity and functionality together beautifully. The final design not only looks fantastic but also works flawlessly across devices." `}
            name={`Mary Freund`}
            job={`Rink's`}
          />

          <TestimonialCard
            image={"https://html.vikinglab.agency/ovro/assets/img/all-images/testimonials/tesi-img4.png"}
            text={`The designs delivered by [Your Name] were intuitive and engaging, making a significant difference in how users interacted with our platform."`}
            name={`Rodger Struck`}
            job={`Specialty Restaurant Group`}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
