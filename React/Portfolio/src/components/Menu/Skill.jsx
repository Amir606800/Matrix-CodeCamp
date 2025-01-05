import React from "react";


const Skill = () => {
  return (
    <>
      <div className="head">
        <div className="title" data-aos="fade-left">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
            />
          <span>My Skill</span>
        </div>
        <div className="subtitle h1" data-aos="fade-left">
        The Tools Behind
          <p>
          Exceptional <span>Design</span>
          </p>
        </div>
        <div className="row g-4 ">
            <SkillCard image={`https://html.vikinglab.agency/ovro/assets/img/icons/skill1.svg`} percentage={96} name={`Figma`} />
            <SkillCard image={`https://html.vikinglab.agency/ovro/assets/img/icons/skill2.svg`} percentage={83} name={`PhotoShop`} />
            <SkillCard image={`https://html.vikinglab.agency/ovro/assets/img/icons/skill3.svg`} percentage={90} name={`Illustrator`} />
            <SkillCard image={`https://html.vikinglab.agency/ovro/assets/img/icons/skill4.svg`} percentage={89} name={`Sketch`} />
            <SkillCard image={`https://html.vikinglab.agency/ovro/assets/img/icons/skill5.svg`} percentage={92} name={`Adobe XD`} />
            <SkillCard image={`https://html.vikinglab.agency/ovro/assets/img/icons/skill6.svg`} percentage={85} name={`Wordpress`} />
            
        </div>
        
      </div>
    </>
  );
};

export default Skill;

const SkillCard = (props) => {
  return (
    <div data-aos="zoom-out" className="col-lg-4 col-md-6 col-12 ">
        <div className="card p-3 gap-2 d-flex flex-column justify-content-center align-items-center">
        <div className="card-image bg-gray-600 p-3"> <img src={props.image} alt={props.name} /></div>
        <div className="card-title fs-2 fw-bold" >{props.percentage}%</div>
        <div className="card-subtitle fs-5">{props.name}</div>
        </div>
    </div>
  )
}