import "./PageHeader.css";
import FacebookIcon from "../../assets/icon/facebook.svg?react";
import InstagramIcon from "../../assets/icon/Instagram.svg?react";
import LinkedinIcon from "../../assets/icon/linkedin.svg?react";
import YoutubeIcon from "../../assets/icon/youtube.svg?react";

import PhoneIcon from "../../assets/icon/phone.svg?react";
import EmailIcon from "../../assets/icon/mail.svg?react";
import LocationIcon from "../../assets/icon/location.svg?react";

const PageBanner = () => {
  return (
    <section className="banner">
      <div className="banner_contact_info">
        <div className="banner_contact_item">
          <PhoneIcon />
          <span>(00) 875 784 5682</span>
        </div>
        <div className="banner_contact_item">
          <EmailIcon />
          <span>pacargoinfo@gmail.com</span>
        </div>

        <div className="banner_contact_item">
          <LocationIcon />
          <span>238, Arimantab, Moska - USA.</span>
        </div>
      </div>
      <ul className="banner_socials">
        <li>
          <FacebookIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <LinkedinIcon />
        </li>
        <li>
          <YoutubeIcon />
        </li>
      </ul>
    </section>
  );
};

export { PageBanner };
