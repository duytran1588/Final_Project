import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function IconMoving() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // console.log("iconTop");//mỗi lần scroll là mỗi lần pageYOffset change => component render lại
    if (pageYOffset > 600) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) {
    return false;
  }
  return (
    <div
      id="top"
      className="scroll-to-top btn btn-danger"
      style={{ fontSize: "16px" }}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon="video" />
    </div>
  );
}

export default IconMoving;
