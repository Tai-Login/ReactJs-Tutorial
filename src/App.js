import { useState, createContext, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Content from "./Content";
// import { StoreProvider, useStore } from "./store";
import Video from "./Video";
import { HomePage, NewsPage, ContactPage } from "./pages";

// const gifts = ["Laptop", "Iphone 12", "Iphone 13 pro max"];

const courses = [
  {
    id: 1,
    name: "Laptop",
  },
  {
    id: 2,
    name: "Iphone 12",
  },
  {
    id: 3,
    name: "Iphone 13 pro max",
  },
];

export const themeContext = createContext();

function App() {
  // const [info, setInfo] = useState({
  //   name: "Thai Tai",
  //   age: 20,
  //   address: "Nghe An",
  // });

  // const handleUpdate = () => {
  //   setInfo((prevInfo) => {
  //     return {
  //       ...prevInfo,
  //       bio: "Thai Tai",
  //     };
  //   });
  // };

  // const [gift, setGift] = useState("Haven't gift");

  // function handleRandom() {
  //   const num = Math.floor(Math.random() * gifts.length);

  //   // console.log(gifts[num]);

  //   setGift(gifts[num]);
  // }

  // const [name, setName] = useState();
  // const [email, setEmail] = useState();

  // const [checked, setChecked] = useState([]);

  // const handleRadioChange = (id) => {
  //   setChecked((prev) => {
  //     if (prev.includes(id)) return prev.filter((pre) => pre !== id);
  //     else return [...prev, id];
  //   });
  // };
  // console.log(checked);

  // const [job, setJob] = useState("");
  // const [jobs, setJobs] = useState(() => {
  //   const jobList = JSON.parse(localStorage.getItem("jobs"));
  //   return jobList || [];
  // });

  // const handleAddJob = () => {
  //   const jobList = [...jobs, job];

  //   localStorage.setItem("jobs", JSON.stringify(jobList));
  //   setJob("");
  //   setJobs(jobList);
  // };

  // const [theme, setTheme] = useState("dark");

  // const [state, dispatch] = useStore();
  // console.log(state);

  // const videoRef = useRef();
  // useEffect(() => {
  //   console.log(videoRef.current);
  // });
  // function handlePlay() {
  //   videoRef.current.play();
  // }
  // function handlePause() {
  //   videoRef.current.pause();
  // }
  // return (
  //   <div style={{ padding: 20 }}>
  //     <h1>Hello world!</h1>
  //     <Video ref={videoRef} />
  //     <button onClick={handlePlay}>Play</button>
  //     <button onClick={handlePause}>Pause</button>
  //   </div>
  // <themeContext.Provider value={theme}>
  //   <h1>hello</h1>
  //   <Content />
  // </themeContext.Provider>
  // );

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">New</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
