import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FiPhoneCall } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type FormValues = {
  email: string;
  phone: string;
  message: string;
};

const Contacts = () => {
  const {t} = useTranslation()
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
    const messageContent = `email: ${data.email} \nnumber: ${data.phone} \n message: ${data.message}`;
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
      <section className="contacts">
        <div className="container">
          <div className="contacts-content">
            <div className="contacts-top d-flex justify-between items-center">
              <div className="contacts-left">
                <div className="contacts-title">{t("main.contacts")}</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <input
                      type="email"
                      {...register("email", { required: "This is required" })}
                      placeholder="Your Email"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      {...register("phone", {
                        required: "This is required",
                      })}
                      placeholder="Phone Number"
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                  </div>
                  <div>
                    <textarea
                      {...register("message")}
                      placeholder="Your Message Here"
                      rows={10}
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="contacts-right">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48018.13154800855!2d69.206016!3d41.2188672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1723386063842!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="contacts-bottom">
              <div className="contacts-card">
                <div className="contacts-card-img"><RiMailSendLine style={{ color: '#f42c37', fontSize: '43px' }}/></div>
                <div className="contacts-card-text"><span>Email:</span>:info@bnpfabric.uz</div>
              </div>
              <div className="contacts-card">
                <div className="contacts-card-img"><FiPhoneCall style={{ color: '#f42c37', fontSize: '43px' }}/></div>
                <div className="contacts-card-text"><span>Tel:</span>+998 93 383 75 85 <br />+998 93 960 78 00</div>
              </div>
              <div className="contacts-card">
                <div className="contacts-card-img"><SlLocationPin style={{ color: '#f42c37', fontSize: '43px' }} /></div>
                <div className="contacts-card-text"><span>Address:</span>Bukhara, st. Alpomysh 80.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
