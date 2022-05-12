import { useEffect, useState, createContext , useContext } from 'react'
import logo from './logo.svg'
import './App.css'
//provider ผู้ให้ข้อมูล
const UserContext = createContext();

function App() {
  //useState
  const [count, setCount] = useState(1)
  const [name, setName] = useState('Miler Dev');
  //useEffect
  const [data, setData] = useState([]);
  //useContext
  const [user, setUser] = useState('JK369')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then(res => res.json()) //json to java oop
        .then(data => setData(data)); //setData
  }, [count]);

  console.log(data);

  return (
    //ส่งค่า value จาก user ที่รับมาจาก setUser
    <UserContext.Provider value={user}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {name}</p>
        <p>{count}</p>
        <ChildComponent/>
        <p>
        <button type="button" onClick={() => setUser(`Jakkarin Ninpan${count}`)}>
          Change Name
          </button>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Increase 
          </button>
          <button type='button' onClick={() => setCount((count) => count - 1)}>
            Decrease 
          </button>
          <button type='button' onClick={() => setName('Jakkarin Ninpan')}>
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

  )
}

function ChildComponent (){
  //ผู้รับ รับมาจาก createContext
  const user = useContext(UserContext)
  return(
      <> 
      <h1>Name : {user}</h1>
      </>  
)}
export default App
