import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { data } from "../data";
const LoadMore = () => {
  const [dataa, setData] = useState([]);
  const { ref, inView } = useInView({
    rootMargin: "100px  0px",
    triggerOnce: false,
  });

  const itemdata = {
    id: dataa.length + 13,
    name: "naruto",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    },
    kind: "TV",
    episodes: 220,
    episodes_aired: 220,
    score: "8.3",
  };
  const itemdata1 = {
    id: dataa.length + 14,
    name: "naruto",
    image: {
      original:
        "https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    },
    kind: "TV",
    episodes: 220,
    episodes_aired: 220,
    score: "8.3",
  };

  // D51/c4/AGOPtYoPZqvMKgA==uvmlow4r2flsO6v1

  useEffect(() => {
    dataa.push(itemdata);
    dataa.push(itemdata1);
    setData([...dataa, ...data]);
  }, [inView]);

  return (
    <inView>
      <div className="card-list">
        <div className="card">
          {dataa.map((item) => {
            return (
              <div ref={ref} key={item.id}>
                <section>
                  <img src={item.image.original} alt="" />
                  <h5>Name:{item.name}</h5>
                  <h1>Kind:{item.kind}</h1>
                </section>
              </div>
            );
          })}
        </div>

        <div className="loader">
          <div className="load"></div>
        </div>
      </div>
    </inView>
  );
};

export default LoadMore;
