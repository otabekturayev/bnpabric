import { FC } from "react"
import { useNavigate } from "react-router-dom"

interface NewCardProps{
    img: string,
    date: string,
    name: string,
    description: string,
    id: number
}

const NewCard: FC<NewCardProps> = ({img, date, name, description, id}) => {
    const navigate = useNavigate()
    const cutText = (text: string) => {
        return `${text.slice(0, 99)} ...`
      }
  return (
    <div className="new-card" onClick={() => navigate(`/news/${id}`)}>
        <div className="new-card-img"><img src={img} alt="photo" /></div>
        <div className="new-card-date">
            <div>{date}</div> <span></span> <div>by admin</div>
        </div>
        <div className="new-card-name">{name}</div>
        <div className="new-card-description">{cutText(description)}</div>
    </div>
  )
}

export default NewCard