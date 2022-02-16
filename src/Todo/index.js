import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
  useReducer,
  useContext,
} from "react";

// const tabs = ["posts", "comments", "albums"];

// function Todo() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showGoToTop, setShowGoToTop] = useState(false);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((data) => setPosts(data));
//   }, [type]);

//   useEffect(() => {
//     const handleScroll = () => setShowGoToTop(window.scrollY >= 200);

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <h1>Learn React Js</h1>
//       <input onChange={(e) => setTitle(e.target.value)} />
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           style={
//             type === tab
//               ? {
//                   color: "white",
//                   backgroundColor: "orange",
//                 }
//               : {}
//           }
//           onClick={() => setType(tab)}
//         >
//           {tab}
//         </button>
//       ))}

//       {showGoToTop && (
//         <button
//           style={{
//             position: "fixed",
//             right: "10%",
//             bottom: "50%",
//           }}
//         >
//           Go to top
//         </button>
//       )}

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title ?? post.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// const courses = [
//   {
//     id: 1,
//     title: "Learn React Js",
//   },
//   {
//     id: 2,
//     title: "Learn Javascript",
//   },
//   {
//     id: 3,
//     title: "Learn NodeJS",
//   },
// ];

// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// const reducer = (state, action) => {
//   console.log(action);
//   switch (action) {
//     case "up":
//       return state + 1;
//       break;
//     case "down":
//       return state - 1;
//       break;

//     default:
//       break;
//   }
// };

import { ADD_ACTION, REMOVE_ACTION, NAME_ACTION } from "./constants";
import reducer, { initState } from "./reducer";
import { themeContext } from "../App";

import logger from "./logger";

function Todo() {
  // const [countDown, setCountDown] = useState(180);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCountDown((countDown) => countDown - 1);
  //   }, 1000);

  //   return () => clearInterval(timerId);
  // }, []);

  // const [avatar, setAvatar] = useState();

  // useEffect(() => {
  //   return () => {
  //     avatar && URL.revokeObjectURL(avatar.preview);
  //   };
  // }, [avatar]);

  // const handlePreviewAvatar = (e) => {
  //   const file = e.target.files[0];
  //   file.preview = URL.createObjectURL(file);

  //   setAvatar(file);
  // };

  // const [active, setActive] = useState(1);

  // useEffect(() => {
  //   const handleEvent = ({ detail }) => {
  //     console.log(detail);
  //   };

  //   window.addEventListener(`lesson-${active}`, handleEvent);

  //   return () => window.removeEventListener(`lesson-${active}`, handleEvent);
  // }, [active]);

  // const [count, setCount] = useState(50);

  // let timeIndex = useRef();
  // let h1Ref = useRef();
  // console.log(timeIndex.current, "init");
  // console.log(h1Ref.current);

  // function handleStart() {
  //   timeIndex.current = setInterval(() => {
  //     setCount((count) => count - 1);
  //     console.log(timeIndex.current, count);
  //   }, 1000);
  // }

  // function handleStop() {
  //   console.log(timeIndex.current, "stop");
  //   clearInterval(timeIndex.current);
  // }

  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [product, setProduct] = useState([]);

  // function handleSubmit() {
  //   setProduct([
  //     ...product,
  //     {
  //       name,
  //       price: +price,
  //     },
  //   ]);
  //   setName("");
  //   setPrice("");
  //   inputRef.current.focus();
  // }
  // const inputRef = useRef();

  // const total = useMemo(() => {
  //   console.log("Editing...");

  //   return product.reduce((sum, item) => sum + item.price, 0);
  // }, [product]);

  // const [count, setCount] = useState(0);

  const theme = useContext(themeContext);
  console.log(themeContext);
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  return (
    <>
      <h1 style={{ color: theme === "dark" ? "#333" : "orange" }}>
        Learn React Js
      </h1>
      {/* <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} />} */}
      {/* <ul>
        {courses.map((course) => (
          <li
            key={course.id}
            style={{
              color: course.id === active ? "orange" : "black",
            }}
            onClick={() => setActive(course.id)}
          >
            {course.title}
          </li>
        ))}
      </ul> */}
      {/* <h2 ref={h1Ref}>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button> */}
      {/* {console.log("template")}
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter..."
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="enter..."
      />
      <button onClick={handleSubmit}>Submit</button>
      Total: {total}
      <ul>
        {product.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul> */}
      {/* <h2>{count}</h2>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button> */}

      <input
        ref={inputRef}
        value={job}
        onChange={(e) =>
          dispatch({ type: NAME_ACTION, payload: e.target.value })
        }
      />
      <button
        onClick={() => {
          dispatch({ type: ADD_ACTION, payload: job });
          dispatch({ type: NAME_ACTION, payload: "" });

          inputRef.current.focus();
        }}
      >
        Add
      </button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span
              onClick={() => dispatch({ type: REMOVE_ACTION, payload: index })}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
