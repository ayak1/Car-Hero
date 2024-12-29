import React from "react";
import BgHero from "../../assets/background.jpg";
import Navbar from "../Navbar/Navbar";
import { FaArrowRight } from "react-icons/fa";
import Car from "../../assets/car.png";
import { motion } from "framer-motion";
const Hero = () => {
  const BGhero = {
    backgroundImage: `url(${BgHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <main style={BGhero} >
      <div className=" bg-gradient-to-r  from-primary to to-primaryDark/90 ">
        {/* Navbar section */}
        <Navbar />
        <div className="min-h-[600px] container grid grid-cols-1 md:grid-cols-2 place-items-center">
          {/* text section */}
          <div className="text-white space-y-8 mt-[100px] md:mt-[20px]">
              <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 0.4,
                delay: 1,
                stiffness: 100,
                damping: 10,
              }}
               className="text-4xl md:text-7xl leading-tight uppercase">
                Honda <br />{" "}
                <span className="text-transparent text-outline">Sports EV</span>{" "}
              </motion.h1>
            <motion.button
             initial={{ opacity: 0, y: -100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{
               type: "spring",
               duration: 0.4,
               delay: 1,
               stiffness: 100,
               damping: 10,
             }}
              className="outline-btn flex justify-center items-center gap-4 group"
            >
              Explore{" "}
              <FaArrowRight className="group-hover:translate-x-2 transition" />{" "}
            </motion.button>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 1,
              stiffness: 100,
              damping: 10,
            }}
              className="text-left bg-primaryDark/80 p-6 space-y-2 lg:max-w-[350px] !mt-[60px]"
            >
              <h1 className="uppercase text-xl ">Vehicle features</h1>
              <p className="text-xs leading-loose">
                The car features rear-hinged suicide doors. Yuki Terai is
                credited with the exterior design. The interior fits four
                adults, with the front passengers seated on a single bench seat.
                The dashboard is decorated in wood trim with a long digital
                screen as the instrument and infotainment panel
              </p>
            </motion.div>
          </div>
          {/* car section */}
            <div className="relative">
              {/* big text section */}
              <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: 0.8,
                stiffness: 100,
                damping: 10,
              }}
               className="absolute -top-40 left-0 z-[1] text-[180px] scale-150 font-bold text-white/10 leading-none">
                Sport
              </motion.h1>
              <motion.img
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0, scale:1.4 }}
              transition={{
                duration: 1,                
              }}
               src={Car} alt="" className="w-full relative z-30" />
              {/* Ring light */}
              <motion.div
              initial={{ opacity: 0, y:0, scale: 0.5 }}
              whileInView={{ opacity: 1, y:0, scale:1}}
              transition={{
                type: "spring",
                duration: 0.8,
                delay: 0.8,
                stiffness: 100,
                damping: 10,
              }}
              className="absolute border-[20px] border-cyan-50 top-0 left-1/2 rounded-full w-[180px] h-[180px] md:w-[250px] md:h-[250px] glowing-shadow "></motion.div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
