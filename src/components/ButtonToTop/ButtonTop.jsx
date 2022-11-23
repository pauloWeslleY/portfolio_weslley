import { memo, useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

import styles from "./styles.module.scss";

export const ButtonTop = () => {
   const classNames = (...classes) => {
      return classes.filter(Boolean).join(" ");
   };

   const [isVisible, setIsVisible] = useState(false);
   const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   };
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
         window.removeEventListener("scroll", toggleVisibility);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <section className={styles.btn}>
         <button
            className={classNames(isVisible ? styles.show : styles.hidden)}
            onClick={scrollToTop}
         >
            <RiArrowUpSLine />
         </button>
      </section>
   );
};

export default memo(ButtonTop);
