import "./Hero.css";
import InstructorsImage from "../../assets/images/instructor-image.png";
import StudentsImage from "../../assets/images/students-image.png";
import BookImage from "../../assets/images/book-image.svg?react";
import DotsImage from "../../assets/images/dots-image.svg?react";
import WaveIcon from "../../assets/images/wave-image.png";
import BgImage from "../../assets/images/bg-image.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_content">
        <div className="hero_title">
          <h4>Welcome Edunity online courses</h4>
        </div>
        <div className="hero_heading">
          <h1>Achieving Your Dreams Through Education</h1>
        </div>
        <div className="hero_description">
          <p>
            We are experienced in educationl platform and skilled strategies for
            the success of our online learning.
          </p>
          <button className="btn-primary">Find Courses</button>
        </div>
      </div>

      <div className="hero_images">
        <img className="hero_bg" src={BgImage} alt="" />

        <DotsImage className="dot_image" />
        <div className="instructors_card">
          <img className="instructors_image" src={InstructorsImage} alt="" />
          <span>200+ Instructor</span>
        </div>
        <img className="students_image" src={StudentsImage} alt="" />
        <BookImage className="book_image" />
        <img className="wave_icon" src={WaveIcon} alt="" />
      </div>
    </section>
  );
};

export { Hero };
