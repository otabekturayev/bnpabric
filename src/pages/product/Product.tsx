import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { collections } from "../../constants/data";
import { useState } from "react";
import { Rate } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

type FormValues = {
  email: string;
  name: string;
  message: string;
};

const Product = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const { productId } = useParams();
  const product = collections?.filter((elem: any) => elem?.id == productId);
  const {
    img,
    name,
    material,
    pillowcase,
    bedSheet,
    duvetCover,
    size,
    manufacturer,
    category,
  } = product[0];
  const [tabName, setTabName] = useState<string>("des");

  const [value, setValue] = useState(3);

  function getRandomNumbers(min: number, max: number, count: number): number[] {
    const numbers: Set<number> = new Set();

    while (numbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(randomNumber);
    }

    return Array.from(numbers);
  }
  const uniqueRandomNumbers = getRandomNumbers(0, 29, 4);
  const similarProducts = [collections[uniqueRandomNumbers[0]], collections[uniqueRandomNumbers[1]], collections[uniqueRandomNumbers[2]], collections[uniqueRandomNumbers[3]]]

  const handleReload = (id: number) => {
    navigate(`/product/${id}`)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const token: string = "7334254772:AAEmPl7riyPEqOmXCh-zP2MwXS1fwUq0EBY";
    const chat_id: number = 717071146;
    const url: string = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `email: ${data.email} \nname: ${data.name} \n message: ${data.message}`;

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
        toast.success("Succsess");
      })
      .catch((error) => {
        toast.error("Error");
        console.log(error);
      });
    reset();
  };

  return (
    <main>
      <section className="product">
        <div className="container">
          <div className="product-content">
            <div className="product-top">
              <div className="product-img">
                <img src={img} alt="photo" />
              </div>
              <div className="product-info">
                <div className="product-name">{name}</div>
                <table>
                  <tr>
                    <td className="th">{t("main.product.material")}</td>
                    <td>{material}</td>
                  </tr>
                  <tr>
                    <td className="th">{t("main.product.pillowcase")}</td>
                    <td>{pillowcase}</td>
                  </tr>
                  <tr>
                    <td className="th">{t("main.product.bed-sheet")}</td>
                    <td>{bedSheet}</td>
                  </tr>
                  <tr>
                    <td className="th">{t("main.product.duvet-cover")}</td>
                    <td>{duvetCover}</td>
                  </tr>
                  <tr>
                    <td className="th">{t("main.product.size")}</td>
                    <td>{size}</td>
                  </tr>
                  <tr>
                    <td className="th">{t("main.product.manufacturer")}</td>
                    <td>{manufacturer}</td>
                  </tr>
                </table>
                <div className="product-category">
                {t("main.product.category")}: <span>{category} {t("main.product.collection")}</span>
                </div>
              </div>
            </div>
            <div className="product-bottom">
              <div className="tabs">
                <div className="tabs-header">
                  <div
                    onClick={() => setTabName("des")}
                    className={`tabs-description ${
                      tabName == "des" ? "tab-active" : ""
                    }`}
                  >
                    {t("main.product.description.title")} <div className="active"></div>
                  </div>
                  <div
                    className={`tabs-reviews ${
                      tabName == "rev" ? "tab-active" : ""
                    }`}
                    onClick={() => setTabName("rev")}
                  >
                    {t("main.product.reviews.title")} (0) <div className="active"></div>
                  </div>
                </div>
                <div className="tabs-body">
                  <div
                    className={`tab-description ${
                      tabName == "des" ? "active-tab" : ""
                    }`}
                  >
                    <div className="tab-name">{t("main.product.description.title")}</div>
                    <div className="tab-name-subtitle">{t("main.product.description.title-2")}</div>
                    <p>
                    {t("main.product.description.title-3")}
                    </p>
                  </div>
                  <div
                    className={`tab-review ${
                      tabName == "rev" ? "active-tab" : ""
                    }`}
                  >
                    <div className="tab-name">{t("main.product.reviews.title")}</div>
                    <p>{t("main.product.reviews.text")}</p>
                    <div className="tab-product-name">
                    {t("main.product.reviews.name")} {`"${name}"`}
                    </div>
                    <div className="remember">
                    {t("main.product.reviews.remember")}
                    </div>
                    <div className="rating">
                      <span>{t("main.product.reviews.rating")}</span>{" "}
                      <Rate
                        style={{ color: "#F83E3E", fontSize: "16px" }}
                        onChange={setValue}
                        value={value}
                      />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="inputs">
                        <div className="input">
                          <input
                            type="text"
                            {...register("name", {
                              required: "This is required",
                            })}
                            placeholder="Name *"
                          />
                          {errors?.name && <p>{errors?.name?.message}</p>}
                        </div>
                        <div className="input">
                          <input
                            type="email"
                            {...register("email", {
                              required: "This is required",
                            })}
                            placeholder="Email *"
                          />
                          {errors?.email && <p>{errors?.email?.message}</p>}
                        </div>
                      </div>
                      <div className="textarea">
                        <textarea
                          {...register("message", {
                            required: "This is required",
                          })}
                          rows={10}
                          placeholder="Your review *"
                        ></textarea>
                        {errors?.message && <p>{errors?.message?.message}</p>}
                      </div>
                      <button type="submit">Send</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="similar-product-section">
                <div className="similar-product-title">Similar products</div>
                <div className="similar-products">
                  {
                    similarProducts?.map((item: any, i: number)=> {
                      return <div key={i} className="similar-product" onClick={() => handleReload(item?.id)}>
                        <div className="similar-product-img">
                          <img src={item?.img} alt="photo" />
                        </div>
                        <div className="similar-product-name">{item?.name}</div>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
