import { useTranslation } from "react-i18next"
import aboutPic from "../../assets/about/about-pic.png"

const About = () => {
  
  const {t} = useTranslation()
  return (
    <main>
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="about-title">{t("main.about.title")}</div>
              <div className="about-texts">
                <p className="about-text">{t("main.about.text-1")}</p>
                <p className="about-text">{t("main.about.text-2")}</p>
                <p className="about-text">{t("main.about.text-3")}</p>
                <p className="about-text">{t("main.about.text-4")}</p>
                <p className="about-text">{t("main.about.text-5")}</p>
                <p className="about-text">{t("main.about.text-6")}</p>
                <p className="about-text">{t("main.about.text-7")}</p>
                <p className="about-text">{t("main.about.text-8")}</p>
                <p className="about-text">{t("main.about.text-9")}</p>
                <p className="about-text">{t("main.about.text-10")}</p>
                <p className="about-text">{t("main.about.text-11")}</p>
              </div>
            </div>
            <div className="about-right"><img src={aboutPic} alt="Photo" /></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About