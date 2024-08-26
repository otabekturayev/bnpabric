import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

interface IFormInput {
  email: string;
}

const Footer = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const token: string = "7334254772:AAEmPl7riyPEqOmXCh-zP2MwXS1fwUq0EBY";
    const chat_id: number = 717071146;
    const url: string = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `email: ${data.email}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("Succsess")
      })
      .catch((error) => {
        toast.error('Error')
        console.log(error);
      });
    reset()
  };
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <Link to="/" className="logo">
              <img src={logoImg} alt="photo" />
            </Link>
            <p className="logo-description">{t("footer.logo-subtitle")}</p>
          </div>
          <div className="footer-rigth">
            <ul className="menu">
              <li>{t("footer.menu.menu-title")}</li>
              <Link className="link" to="/">
                {t("footer.menu.home")}
              </Link>
              <Link className="link" to="/about">
                {t("footer.menu.about")}
              </Link>
              <Link className="link" to="/collections">
                {t("footer.menu.collection")}
              </Link>
              <Link className="link" to="/contacts">
                {t("footer.menu.contacts")}
              </Link>
            </ul>
            <ul className="contacts">
              <li>{t("footer.menu.contacts")}</li>
              <li>Bukhara, st. Alpomysh 80.</li>
              <li>Bnpuz@bk.ru</li>
              <li>bnp_fabrik</li>
              <li>info@bnpfabric.com</li>
              <li>+998 93 383 75 85</li>
              <li>+998 93 960 78 00</li>
            </ul>
            <ul className="email">
              <li>{t("footer.email.email-title")}</li>
              <li>
                <form onSubmit={handleSubmit(onSubmit)} className={`${errors.email ? 'form-error' : ''}`}>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    placeholder={t("footer.email.email-inner")}
                  />
                  <button type="submit">{t("footer.email.email-button")}</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="container">
          © 2024 LLC "BUKHARA NATURAL PRODUCT". All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
