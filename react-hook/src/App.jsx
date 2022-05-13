import { useEffect, useState, createContext, useContext, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
//provider ผู้ให้ข้อมูล
const UserContext = createContext();
//useRef

function App() {
  //useState
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Miler Dev");
  //useEffect
  const [data, setData] = useState([]);
  //useContext
  const [user, setUser] = useState("JK369");
  //useRef
  const [inputValue, setInputValue] = useState("");
  const countCurrent = useRef(0);
  //useRefDOM
  const inputElement = useRef();
  //useRefKeepTag
  const [inputTag, setInputTag] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputTag;
  }, [inputTag]);

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    countCurrent.current = countCurrent.current + 1 ;
  });

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
  //     .then((res) => res.json()) //json to java oop
  //     .then((data) => setData(data)); //setData
  // }, [count]);

  // console.log("", data);

  return (
    //ส่งค่า value จาก user ที่รับมาจาก setUser
    
    <UserContext.Provider value={user}>
   
      <input
            type="text"
            value={inputTag}
            noChange={(e) => setInputTag(e.target.value)}
          />
          <h2>Current Value : {inputTag}</h2>
          <h2>Previous Value :{previousInputValue.current}</h2>
   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {name}</p>
        <p>{count}</p>
        <ChildComponent />
      
        <p>
          <input
            type="text"
            ref={inputElement}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h1>Render Count: {countCurrent.current}</h1>
          <button type="button" onClick={focusInput}>
            Focus
          </button>
          <button
            type="button"
            onClick={() => setUser(`Jakkarin Ninpan${count}`)}
          >
            Change Name
          </button>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Increase
          </button>
          <button type="button" onClick={() => setCount((count) => count - 1)}>
            Decrease
          </button>
          <button type="button" onClick={() => setName("Jakkarin Ninpan")}>
            SetName
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </UserContext.Provider>
  );
}

function ChildComponent(){
  //ผู้รับ รับมาจาก createContext
  const user = useContext(UserContext);
  return (
    <>
      <h1>Name : {user}</h1>
    </>
  );
}

export default App;
