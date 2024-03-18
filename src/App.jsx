import { useState } from "react";
import "./App.css";

/* images */
/* nav images */
import Logo from "./assets/images/logo.svg";
/* header images */
import ImgIntro from "./assets/images/illustration-intro.png";
/* features images */
import IconAccessAnywhere from "./assets/images/icon-access-anywhere.svg";
import IconSecurity from "./assets/images/icon-security.svg";
import IconCollaboration from "./assets/images/icon-collaboration.svg";
import IconAnyFile from "./assets/images/icon-any-file.svg";
import ImgStayProductive from "./assets/images/illustration-stay-productive.png";
import IconArrow from "./assets/images/icon-arrow.svg";
/* testimonial images */
import Profile1 from "./assets/images/profile-1.jpg";
import Profile2 from "./assets/images/profile-2.jpg";
import Profile3 from "./assets/images/profile-3.jpg";
/* footer images */
import IconLocation from "./assets/images/icon-location.svg";
import IconPhone from "./assets/images/icon-phone.svg";
import IconEmail from "./assets/images/icon-email.svg";

function App() {
  /* data arrays */
  const data__generalFeatures = [
    {
      img: IconAccessAnywhere,
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      img: IconSecurity,
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      img: IconCollaboration,
      title: "Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      img: IconAnyFile,
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  const data__testimonialItems = [
    {
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      img: Profile1,
      name: "Satish Patel",
      title: "Founder & CEO, Huddle",
    },
    {
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      img: Profile2,
      name: "Bruce McKenzie",
      title: "Founder & CEO, Huddle",
    },
    {
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      img: Profile3,
      name: "Iva Boyd",
      title: "Founder & CEO, Huddle",
    },
  ];

  /* item creation */

  const create__generalFeatures = () => {
    return data__generalFeatures.map((data, index) => {
      return (
        <div key={`generalFeature${index}`} className="general-features__item">
          <img
            className="general-features__img"
            src={data.img}
            alt={`icon for ${data.title}`}
          ></img>
          <h2 className="text--headings">{data.title}</h2>
          <p>{data.description}</p>
        </div>
      );
    });
  };

  const create__testimonialItems = () => {
    return data__testimonialItems.map((data, index) => {
      return (
        <div key={`testimonialItem${index}`} className="testimonial__card">
          <p>{data.description}</p>
          <div className="testimonial__profile-container">
            <img
              className="testimonial__avatar"
              src={data.img}
              alt="profile img"
            ></img>
            <div className="testimonial__person-container">
              <p className="text--bold">{data.name}</p>
              <p className="text--small">{data.title}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <nav className="nav block--padding">
        <img className="nav__logo" src={Logo} alt="Fylo logo img"></img>
        <div className="nav__item-container">
          <a className="nav__item">Features</a>
          <a className="nav__item">Team</a>
          <a className="nav__item">Sign In</a>
        </div>
      </nav>

      <header className="header block--padding">
        <div className="header__content-container">
          <div className="header__hero-img-wrapper">
            <img
              className="header__hero-img"
              src={ImgIntro}
              alt="intro img"
            ></img>
          </div>
          <h1 className="text--headings text--bold">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="header__description">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button>Get Started</button>
        </div>
      </header>

      <main className="main block--padding">
        <div className="general-features">{create__generalFeatures()}</div>

        <div className="highlight-feature">
          <div className="highlight-feature__img-wrapper">
            <img
              className="highlight-feature__img"
              src={ImgStayProductive}
              alt="stay productive img"
            ></img>
          </div>
          <div className="highlight-feature__content">
            <h1 className="text--headings text--bold">
              Stay productive, wherever you are
            </h1>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a className="highlight-feature__cta">
              See how Fylo works{" "}
              <img
                className="highlight-feature__arrow"
                src={IconArrow}
                alt="icon arrow"
              ></img>
            </a>
          </div>
        </div>

        <div className="testimonial">{create__testimonialItems()}</div>
      </main>

      <footer className="footer block--padding">
        <div className="floating__email-sign-up">
          <h1 className="text--headings text--bold">Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form className="form">
            <div className="form__input-container">
              <input
                className="form__email"
                placeholder="email@example.com"
              ></input>
              <button>Get Started For Free</button>
            </div>
            <div className="text--error">
              Please enter a valid email address
            </div>
          </form>
        </div>

        <div className="footer__logo-wrapper">
          <img className="footer__logo" src={Logo} alt="logo img"></img>
        </div>

        <div className="footer__content-container">
          <div className="footer__contact-container">
            <img
              className="footer__contact-icon"
              src={IconLocation}
              alt="location icon"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="footer__contact-wrapper">
            <div className="footer__contact-container">
              <img
                className="footer__contact-icon"
                src={IconPhone}
                alt="phone icon"
              ></img>
              <p>+1-543-123-4567</p>
            </div>
            <div className="footer__contact-container">
              <img
                className="footer__contact-icon"
                src={IconEmail}
                alt="email icon"
              ></img>
              <p>example@fylo.com</p>
            </div>
          </div>

          <div className="footer__sitemap">
            <a className="footer__sitemap-item">About Us</a>
            <a className="footer__sitemap-item">Jobs</a>
            <a className="footer__sitemap-item">Press</a>
            <a className="footer__sitemap-item">Blog</a>
          </div>
          <div className="footer__sitemap">
            <a className="footer__sitemap-item">Contact Us</a>
            <a className="footer__sitemap-item">Terms</a>
            <a className="footer__sitemap-item">Privacy</a>
          </div>

          <div className="footer__social-container">
            <i className="fa-brands fa-facebook-f footer__social-item"></i>
            <i className="fa-brands fa-twitter footer__social-item"></i>
            <i className="fa-brands fa-instagram footer__social-item"></i>
          </div>
        </div>

        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen" target="_blank">
            exc
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
