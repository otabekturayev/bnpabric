import { AiOutlineMenu } from "react-icons/ai";
import logoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng") || "English";
  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  let options = [
    { value: "uz", label: `Uzbek` },
    { value: "ru", label: "Russian" },
    { value: "en", label: "English" },
  ];
  return (
    <header>
        <div className="lng">
        <Select
          defaultValue={language}
          style={{ width: 120 }}
          onChange={handleChange}
          options={options}
        />
      </div>
      <div className="container">
        <div className="header-content d-flex items-center justify-between">
          <div className="header-left d-flex items-center">
            <Link className="logo" to="/">
              <img src={logoImg} alt="photo" />
            </Link>
            <nav className="desktop-nav">
              <ul className="d-flex">
                <NavLink className="li" to="/">
                  {t("header.home")}
                </NavLink>
                <NavLink className="li" to="/collections">
                  {t("header.collection")}
                </NavLink>
                <NavLink className="li" to="/about">
                  {t("header.about")}
                </NavLink>
                <NavLink className="li" to="/contacts">
                  {t("header.contacts")}
                </NavLink>
              </ul>
            </nav>
          </div>
          <div className="header-right" onClick={() => setNavOpen(true)}>
            <AiOutlineMenu size={24} />
          </div>
        </div>
      </div>
      <nav className={`mobile-nav ${navOpen ? "open" : ""}`}>
        <div className="navbar-close-icon" onClick={() => setNavOpen(false)}>
          <svg
            stroke="#00000066"
            fill="#00000066"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="40px"
            width="40px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40m64-160l80 80-80 80m-193-80h273"
            ></path>
          </svg>
        </div>
        <ul>
          <Link onClick={() => setNavOpen(false)} to="/">
            {t("header.home")}
          </Link>
          <Link onClick={() => setNavOpen(false)} to="/collections">
            {t("header.collection")}
          </Link>
          <Link onClick={() => setNavOpen(false)} to="/about">
            {t("header.about")}
          </Link>
          <Link onClick={() => setNavOpen(false)} to="contacts">
            {t("header.contacts")}
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
