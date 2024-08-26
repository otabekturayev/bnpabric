import { FC } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

interface NaturalProductProps{
    img: string,
    color: string
}

const NaturalProduct: FC<NaturalProductProps> = ({img, color}) => {
 const navigate = useNavigate()
 const {t} = useTranslation()
  return (
    <div className="natural-product-card" style={{background: color}}>
        <div className="image">
            <img src={img} alt="photo" />
        </div>
        <div className="natural-product-left">
            <div className="procent">100%</div>
            <div className="procent-sub">{t("main.home.section.procent-text")}</div>
        </div>
        <div className="natural-product-right">
            <div className="natural-product-title">Bukhara natural product</div>
            <div className="natural-product-description">{t("main.home.section.title-text")}</div>
            <button onClick={()=>navigate('/collections')} className="collection-navigate">{t("main.home.section.button")}</button>
        </div>
    </div>
  )
}

export default NaturalProduct