import { FC } from "react"
import { useNavigate } from "react-router-dom"

interface CollectionsCardProps{
    img: string,
    id: number,
    name: string,
}

const CollectionsCard: FC<CollectionsCardProps> = ({img, id, name}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/product/${id}`)} className="collections-card">
        <div className="collections-card-img">
            <img src={img} alt="photo" />
        </div>
        <div className="collections-card-name">{name}</div>
    </div>
  )
}

export default CollectionsCard