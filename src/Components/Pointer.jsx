import React, { useEffect, useRef } from "react";
import "./Style/Pointer.css"; // Import the CSS file for styling

function Pointer() {
  useEffect(() => {
    const follower = document.getElementById("follower");

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    const scrollY = window.scrollY;

    const ease = 0.1;

    function easeTo() {
      const followerBounds = follower.getBoundingClientRect();

      const dX = mouseX - (followerBounds.left + 16);
      const dY = mouseY - (followerBounds.top + 16);

      posX += dX * ease;
      posY += dY * ease;
    }

    function setCoords(e) {
      mouseX = e.clientX;
      //   mouseY = e.clientY;

      const mouseY = e.clientY;
      //   easeTo();
      console.log("first");
      follower.style.top = `${mouseY}px`;
      follower.style.left = `${mouseX}px`;
    }

    document.addEventListener("mousemove", setCoords);

    // update();
  }, []);

  return null;
}

export default Pointer;
