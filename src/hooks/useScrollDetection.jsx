import React, { useEffect, useRef, useState } from 'react'

const useScrollDetection = () => {
    const prevScrollY = useRef();
 
    const [scrollDirection,setScrollDirection] = useState("");

    useEffect(() => {
        window.addEventListener("scroll",handleScroll);

        return() => {
            window.removeEventListener("scroll",handleScroll);
        }
    },[])


    const handleScroll = () => {
        prevScrollY.current > window.scrollY
         ? setScrollDirection("UP")
         : setScrollDirection("DOWN")

         prevScrollY.current = window.scrollY;
    }

  return scrollDirection;
}

export default useScrollDetection