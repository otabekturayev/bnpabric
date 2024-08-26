import heroBg from "../../assets/homePage/hero-bg.png"
import IconCard from "../../components/homePageIconCard/IconCard"
import shipping from "../../assets/homePage/shipping-icon.svg"
import guarante from "../../assets/homePage/guarantee-icon.svg"
import support from "../../assets/homePage/support-icon.svg"
import wallet from "../../assets/homePage/wallet-icon.svg"

import naturalPic1 from "../../assets/homePage/section-pic-1.png"
import naturalPic2 from "../../assets/homePage/section-pic-2.png"
import naturalPic3 from "../../assets/homePage/section-pic-3.png"
import NaturalProduct from "../../components/naturalProduct/NaturalProduct"
import { collections } from "../../constants/data"
import HomeCollectionsCard from "../../components/homeCollectionsCard/HomeCollectionsCard"
import { news } from "../../constants/news"
import NewCard from "../../components/newCard/NewCard"
import { useTranslation } from "react-i18next"

const Home = () => {

  const {t} = useTranslation()
  
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-bg"><img src={heroBg} alt="photo" /></div>
            <div className="hero-title">
              <div className="h1">Bukhara</div>
              <div className="h2">Natural</div>
              <div className="h3">Product</div>
            </div>
          </div>
        </div>
      </section>
      <section className="elements">
        <div className="container">
          <div className="elements-content">
            <div className="icons-cards">
              <IconCard img={shipping} title={t("main.home.icons.icon-name-1")} description={t("main.home.icons.icon-p-1")}/>
              <IconCard img={guarante} title={t("main.home.icons.icon-name-2")} description={t("main.home.icons.icon-p-2")}/>
              <IconCard img={support} title={t("main.home.icons.icon-name-3")} description={t("main.home.icons.icon-p-3")}/>
              <IconCard img={wallet} title={t("main.home.icons.icon-name-4")} description={t("main.home.icons.icon-p-4")}/>
            </div>
          </div>
        </div>
      </section>
      <section className="natural-product">
        <div className="container">
          <div className="natural-product-content">
                <NaturalProduct img={naturalPic1} color="linear-gradient(0deg, #31384d 9%, #616884 50%)"/>
          </div>
        </div>
      </section>
      <div className="home-collections">
        <div className="container">
          <div className="home-collections-content">
             <h4 className="home-collections-title">{t("main.home.winter")}</h4>
             <h5 className="home-collections-description">Bukhara natural product</h5>
             <div className="home-collections-cards">
                {
                  collections?.map((item: any, i: number) => {
                    if(item?.category == "Winter"){
                      return <HomeCollectionsCard key={i} img={item?.img} name={item?.name} id={item?.id}/>
                    }
                  })
                }
             </div>
          </div>
        </div>
      </div>
      <section className="natural-product">
        <div className="container">
          <div className="natural-product-content">
                <NaturalProduct img={naturalPic2} color="linear-gradient(0deg, #2e2549 9%, #625686 50%)"/>
          </div>
        </div>
      </section>
      <div className="home-collections">
        <div className="container">
          <div className="home-collections-content">
             <h4 className="home-collections-title">{t("main.home.autumn")}</h4>
             <h5 className="home-collections-description">Bukhara natural product</h5>
             <div className="home-collections-cards">
                {
                  collections?.map((item: any, i: number) => {
                    if(item?.category == "Autumn"){
                      return <HomeCollectionsCard key={i} img={item?.img} name={item?.name} id={item?.id}/>
                    }
                  })
                }
             </div>
          </div>
        </div>
      </div>
      <section className="natural-product">
        <div className="container">
          <div className="natural-product-content">
                <NaturalProduct img={naturalPic3} color="linear-gradient(0deg,#224f4d 9%,#307e7a 50%)"/>
          </div>
        </div>
      </section>
      <div className="home-collections">
        <div className="container">
          <div className="home-collections-content">
             <h4 className="home-collections-title">{t("main.home.summer")}</h4>
             <h5 className="home-collections-description">Bukhara natural product</h5>
             <div className="home-collections-cards">
                {
                  collections?.map((item: any, i: number) => {
                    if(item?.category == "Summer"){
                      return <HomeCollectionsCard key={i} img={item?.img} name={item?.name} id={item?.id}/>
                    }
                  })
                }
             </div>
          </div>
        </div>
      </div>
      <div className="home-collections">
        <div className="container">
          <div className="home-collections-content">
             <h4 className="home-collections-title">{t("main.home.news")}</h4>
             <h5 className="home-collections-description">Bukhara natural product</h5>
             <div className="home-collections-cards">
                {
                  news?.map((item: any, i: number) => {
                    return <NewCard key={i} img={item?.img} name={item?.name} date={item?.date} description={item?.description1} id={item?.id}/>
                  })
                }
             </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home