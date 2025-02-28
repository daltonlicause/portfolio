import * as React from "react";
import { BackToTopButton } from "./styled";
import Icon, { Icons } from 'components/icon'

const BackToTop = () => {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowButton(true)
      } else {
        setShowButton(false);
      }
    })
    return () => setShowButton(false);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <BackToTopButton onClick={scrollToTop} className={showButton ? 'shown' : 'hidden'} aria-label="Back to Top">
      <Icon iconType={Icons.FaArrowUp}/>
    </BackToTopButton>
  );
}

export default BackToTop;