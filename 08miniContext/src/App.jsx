import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContext from "./context/UserContext"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  
  // return (
  //   <UserContextProvider>
  //     <h1>Mini Context API Example</h1>
  //     <Login />
  //     <Profile />
  //   </UserContextProvider>
  // )


  // 2nd Method
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
      <h1>Mini Context API Example</h1>
      <Login />
      <Profile />
    </UserContext.Provider>
  )
}

export default App
