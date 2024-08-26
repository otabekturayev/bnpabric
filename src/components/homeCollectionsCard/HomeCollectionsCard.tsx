import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface HomeCollectionsCardProps{
    img: string;
    name: string;
    id: number
}

const HomeCollectionsCard: FC<HomeCollectionsCardProps> = ({img, name, id}) => {
  const navigate = useNavigate()
  return (
    <div className='home-collection-card' onClick={() => navigate(`/product/${id}`)}>
        <div className="home-collection-card-img">
            <img src={img} alt="photo" />
        </div>
        <div className="home-collection-card-name">{name}</div>
    </div>
  )
}

export default HomeCollectionsCard