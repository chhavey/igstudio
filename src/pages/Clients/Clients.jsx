import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import { Mousewheel, Keyboard } from "swiper/modules";
import styles from "./Clients.module.css";
import Jane from "../../assets/Jane.png";
import Devon from "../../assets/Devon.png";
import Robert from "../../assets/Robert.png";
import { ReactComponent as Next } from "../../assets/Next.svg";
import { ReactComponent as Prev } from "../../assets/Prev.svg";

function Clients() {
  const swiperRef = useRef(null);

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const clients = [
    {
      name: "Jane Cooper",
      id: "jane-review",
      image: Jane,
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Devon Lane",
      id: "devon-review",
      image: Devon,
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Robert Fox",
      id: "robert-review",
      image: Robert,
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Scott Edwards",
      id: "scott-review",
      image: Jane,
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Rubel",
      id: "rubel-review",
      image: Devon,
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
    {
      name: "Paul",
      id: "paul-review",
      image: Robert,
      designation: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <h2 className={styles.leftText}>What says our</h2>
          <h2 className={styles.leftText}>happy Clients</h2>
        </div>

        <div className={styles.topRight}>
          <div className={styles.rightBtn} onClick={goToPrevSlide}>
            <Prev />
          </div>
          <div className={styles.leftBtn} onClick={goToNextSlide}>
            <Next />
          </div>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          ref={swiperRef}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Mousewheel, Keyboard]}
        >
          {clients.map((client) => {
            return (
              <SwiperSlide key={client.name}>
                <div className={styles.card}>
                  <img
                    src={client.image}
                    className={styles.robert}
                    alt={client.name}
                  />
                  <p className={styles.cardText}>{client.name}</p>
                  <p style={{ fontSize: "smaller", marginBottom: "0.75rem" }}>
                    {client.designation}
                  </p>

                  <p className={styles.cardText}>{client.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Clients;
