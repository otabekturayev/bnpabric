import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { collections } from "../../constants/data";
import { Empty, Pagination } from "antd";
import CollectionsCard from "../../components/collectionsCard/CollectionsCard";
import { useTranslation } from "react-i18next";

const Collections = () => {
  const {t} = useTranslation()
  const [text, setText] = useState<string>("");
  const [openCollections, setOpenCollections] = useState<boolean>(true);
  const [current, setCurrent] = useState<number>(1);
  const [title, setTitle] = useState<string>("");
  const [collection, setCollection] = useState(collections)
  const pageSize: number = 8;
  useEffect(()=>{
    onLeftFilter()
  }, [title])

  useEffect(() =>{
   setCollection(collections)
  }, [])
  
  const searchItem = (e: any) => {
    e.preventDefault()
    let search
    if(text){
      search = collection.filter(item => {
          return item.name.toLowerCase().includes(text.toLowerCase())
      })
      }else{
          search = collection
      }
    setCollection(search);
  }
  const onLeftFilter = () => {

    const filter = collections?.filter(
      (elem) => elem?.category?.toLowerCase() === title?.toLowerCase()
    );
    setCollection(filter);
  };
  const onChange = (page: number) => {
    setCurrent(page);
  };

  const paginatedCollections = collection?.slice(
    (current - 1) * pageSize,
    current * pageSize
  );
  
  return (
    <main>
      <section className="collections">
        <div className="container">
          <div className="collections-content">
            <div className="collections-left">
              <div className="search">
                <form onSubmit={searchItem}>
                  <input
                    type="text"
                    name="tex"
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={t("main.collection.search")}
                  />
                  <button type="submit">
                    <IoIosSearch style={{ color: "#fff", fontSize: "22px" }} />
                  </button>
                </form>
              </div>
              <div
                className="collections-title"
                onClick={() => setOpenCollections(!openCollections)}
              >
                <span>{t("main.collection.collection")}</span>
                <span className={`${openCollections ? "rotate" : ""}`}>
                  <MdNavigateNext />
                </span>
              </div>
              <div
                className={`collections-items ${openCollections ? "show" : ""}`}
              >
                <div className="collections-items-inner">
                  <div
                    className="collections-item"
                    onClick={() => setTitle("Spring")}
                  >
                    {t("main.collection.spring")}
                  </div>
                  <div
                    className="collections-item"
                    onClick={() => setTitle("Winter")}
                  >
                    {t("main.collection.winter")}
                  </div>
                  <div
                    className="collections-item"
                    onClick={() => setTitle("Summer")}
                  >
                    {t("main.collection.summer")}
                  </div>
                  <div
                    className="collections-item"
                    onClick={() => setTitle("Autumn")}
                  >
                    {t("main.collection.autumn")}
                  </div>
                </div>
              </div>
            </div>
            <div className="collections-right">
              <div className="collections-right-top">
                <div className="collections-right-info">
                  <div className="collections-right-title">
                    {title} {t("main.collection.collection")}
                  </div>
                  <div className="collections-count">
                  {t("main.collection.showing")} 1-8 of {collection?.length}
                  </div>
                </div>
              </div>
              {
                paginatedCollections?.length ? <div className="collections-cards">
                {paginatedCollections?.map((item: any, i: number) => {
                  return (
                    <CollectionsCard
                      key={i}
                      img={item.img}
                      name={item.name}
                      id={item.id}
                    />
                  );
                })}
              </div> : <div className="empty"><Empty /></div>
              }
              
              <Pagination
                current={current}
                pageSize={pageSize}
                total={collection?.length || 0}
                onChange={onChange}
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Collections;
