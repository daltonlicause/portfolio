import React, { useEffect, useState } from "react";
import { BackToTopButton } from "./styled";
import Icon from '../icon'

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true)
      } else {
        setShowButton(false);
      }
    })
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <BackToTopButton onClick={scrollToTop} className={showButton ? 'shown' : 'hidden'} aria-label="Back to Top">
      <Icon name="FaArrowUp"/>
    </BackToTopButton>
  );
}

export default BackToTop;