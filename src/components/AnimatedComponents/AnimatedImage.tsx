import { motion, useInView } from "framer-motion";
import { MdVerified } from "react-icons/md";
import Photo from "../../images/PersonalPhoto.jpg";
import { useEffect, useRef, useState } from "react";

function AnimatedImage() {
  const [visibleBubble, setVisibleBubble] = useState(false);
  const [clock, setClock] = useState(new Date());
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage);
  const formatTime = (date: any) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [visibleBubble]);

  return (
    <>
      <motion.img
        src={Photo}
        ref={refImage}
        alt="Alejandro Navarro Profile Photo"
        className={`m-auto rounded-full ring ring-[#02bff4] ring-offset-1 ring-offset-[#02bff4]`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isInViewImage ? 1 : 0, scale: 0.95 }}
        transition={{ duration: 0.75 }}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setVisibleBubble(true)}
        onHoverEnd={() => setVisibleBubble(false)}
      />
      {visibleBubble && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="chat chat-start absolute top-10 sm:top-10 right-0 sm:right-0 w-1/2 sm:w-2/5 max-w-screen-sm hidden sm:block"
        >
          <div className="chat-header text-gray-300 flex items-center ">
            Alejandro Navarro
            <MdVerified size={12} style={{ marginLeft: 3 }} color="#00B2FF" />
          </div>
          <div className="chat-bubble bg-[#02bff4] text-white ">
            Hola! <br />
            Este soy yo 😉
          </div>
          <time className="text-xs opacity-100 ml-[105px] chat-footer text-gray-300">
            {formatTime(clock)}
          </time>
        </motion.div>
      )}
    </>
  );
}

export default AnimatedImage;
