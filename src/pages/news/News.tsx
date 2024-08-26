import { useParams } from "react-router-dom";
import { news } from "../../constants/news";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

type FormValues = {
  email: string;
  website: string;
  comment: string;
};

const News = () => {
  const {t} =useTranslation()
  const { newsId } = useParams();
  const newData = news?.filter((elem: any) => elem?.id == newsId);
  const {
    img,
    date,
    description1,
    description2,
    description3,
    description4,
  } = newData[0];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const token: string = "7334254772:AAEmPl7riyPEqOmXCh-zP2MwXS1fwUq0EBY";
    const chat_id: number = 717071146;
    const url: string = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `email: ${data.email} \nnwebsite: ${data.website} \n comment: ${data.comment}`;
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
    <main>
      <section className="news">
        <div className="container">
          <div className="news-content">
            <div className="news-img">
              <img src={img} alt="photo" />
            </div>
            <div className="news-container">
              <div className="news-date">
                <span>{date}</span> <span className="circle"></span> By admin
              </div>
              <div className="news-descriptions">
                <div className="news-description">{description1}</div>
                <div className="news-description">{description2}</div>
                <div className="news-description">{description3}</div>
                <div className="news-description">{description4}</div>
              </div>
              <div className="news-form">
                <div className="form-title">{t("main.news.news-title")}</div>
                <div className="form-description">
                {t("main.news.remember")}
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="inputs">
                    <div className="input">
                      <input
                        type="email"
                        {...register("email", { required: "This is required" })}
                        placeholder={`Email (${t("main.news.news-title")})`}
                      />
                      {errors?.email && <p>{errors?.email?.message}</p>}
                    </div>
                    <div className="input">
                      <input
                        type="text"
                        {...register("website", {
                          required: "This is required",
                        })}
                        placeholder={t("main.news.website")}
                      />
                      {errors?.website && <p>{errors?.website?.message}</p>}
                    </div>
                  </div>
                  <div className="textarea">
                    <textarea
                      {...register("comment", { required: "This is required" })}
                      rows={15}
                      placeholder={t("main.news.comment")}
                    ></textarea>
                    {errors?.comment && <p>{errors?.comment?.message}</p>}
                  </div>
                  <button type="submit">{t("main.news.button")}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
