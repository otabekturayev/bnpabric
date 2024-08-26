import { FC } from "react"

interface IconCardProps{
    img: string,
    title: string,
    description: string
}

const IconCard: FC<IconCardProps> = ({img, title, description}) => {
  return (
    <div className="icon-card">
        <div className="icon-card-img"><img src={img} alt="photo" /></div>
        <div className="icon-card-text">
            <div className="icon-card-title">{title}</div>
            <div className="icon-card-description">{description}</div>
        </div>
    </div>
  )
}

export default IconCard