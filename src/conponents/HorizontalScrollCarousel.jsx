import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);
  
    return (
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };

  const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        
      </div>
    );
  };

  const cards = [
    {
      url: "/image/img1_.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/image/img2_.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/image/img3_.jpg",
      title: "Title",
    },
    {
      url: "/image/img4_.jpg",
      title: "Title 4",
      id: 4,
    },
    {
      url: "/image/img5_.jpg",
      title: "Title 5",
      id: 5,
    },
    {
      url: "/image/img6_.jpg",
      title: "Title 6",
      id: 6,
    },
    {
      url: "/image/img7_.jpg",
      title: "Title 7",
      id: 7,
    },
    {
      url: "/image/img8_.jpg",
      title: "Title 7",
      id: 8,
    },
    {
      url: "/image/img9_.jpg",
      title: "Title 7",
      id: 9,
    },
    {
      url: "/image/img10_.jpg",
      title: "Title 7",
      id: 10,
    },
  ];

export default HorizontalScrollCarousel;