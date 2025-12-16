import React, { use, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { amountBy, increment } from "../../features/counterSlice";

const Ref = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const divRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("visible");
        } else {
          console.log("not visible");
        }
      },
      {
          threshold: 0,
          rootMargin: "200px",
      }
    );

    observer.observe(divRef.current);
  }, []);
  return (
    <div>
      {counter.value}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(amountBy(3))}>+3</button>

      <div style={{ paddingTop: "700px", paddingBottom: "700px" }}>
        <div ref={divRef} style={{ height: "100px", background: "#ddd" }}>
          Lorem, ipsum.
        </div>
      </div>
    </div>
  );
};

export default Ref;

/* import React, { useEffect, useRef, useState } from "react";

// не викликає повторний рендер при зміні
// зберігається між рендерами
// використовується для доступу до DOM

const Ref = () => {
  const inputRef = useRef();
  const videoRef = useRef();
  const intervalRef = useRef();

  const [state, setstate] = useState(true);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

 
  const handleChange = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      console.log(inputRef.current.value);
    }, 2000);
  };

  return (
    <div>
      <h1 onClick={() => setstate(!state)}>Ref</h1>
      <input type="text" ref={inputRef} onChange={handleChange} />
      <div>
        <video
          src="https://www.w3schools.com/tags/movie.mp4"
          ref={videoRef}
          muted
        ></video>
        <button onClick={() => videoRef.current.play()}>Play</button>
      </div>
    </div>
  );
};

export default Ref;
 */
