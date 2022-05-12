# React-Hook🪝
## Rule 📌
- Never call Hook from inside a loop, condition or nested function
- Hooks should sit at the top-level of your component
- Only call Hooks from React functional component
- Never call a Hook from a regular function
- Hooks can call other Hooks
## Setting project react for Vite
 Vite requires Node.js 
 
    npm create vite@latest
  
  Install Tools  
  cd in your project

    npm i
    
  Open Server
  
    npm run dev
    
---

## useState Hook🪝
useState can set and send 
- Hook useState return be Array 


`sh import { useState } from 'react'
const [count, setCount] = useState(0)
`

## useEffect Hook🪝
   บอกว่าทำอะไรหลังจากการ render ในครั้งแรก เช่น fetch api หรือ เปลี่ยนแปลงกับ dom โดยตรง
   
## useContext Hook🪝

    import { createContext , useContext } from 'react'
    
   สร้าง provider นอก function
   
    const UserContext = createContext();
   
   set ค่า
   
    const [user, setUser] = useState('JK369')
   
   และมีผู้รับ ใน functionสามารถใช้ ค่า user จากที่รับมาได้แล้ว
   
    const user = useContext(UserContext);

