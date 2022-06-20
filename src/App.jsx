import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
// components
import { Allrecipes } from "./components/Private/Allrecipes/Allrecipes.jsx";
import { AppHeader } from "./components/Private/Appheader/AppHeader.jsx";
// import Header from "./components/Public/header/Header.jsx";
import { Recipes } from "./Pages/Private/Recipes/Recipes.jsx";
import Main from "./Pages/Public/Main/Main.jsx"
import Team from "./Pages/Public/Team/Team"

// Ashley testing components
import Posts from "./components/Posts.jsx";
import UserEdit from "./components/UserEdit.jsx";
import UserDelete from "./components/UserDelete.jsx";
import UserLogout from "./components/UserLogout.jsx";
// import LoginRegister from "./components/Public/header/LoginRegister/LoginRegister.jsx.js";
// context
import { UserContext } from "./contexts/UserContext.js";
import About from "./Pages/Public/About/About.jsx";
import LoginRegister from "./Pages/Public/Login/LoginRegister.jsx";

//Murad Testing Component
import Loader from './Pages/Public/Main/Loader';

export default function App() {
  const { isLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(true)


  return (
    <>
      {
        loading ? (
          <Loader setLoading={setLoading}/>
        ) : (
          <>
          {/* {isLogin ? <AppHeader /> : <Header />} */}
          <AppHeader />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<LoginRegister/>} />

            {isLogin && (
              <>
                <Route path="/discover">
                  <Route index element={<h1>DISCOVER</h1>} />
                  <Route path="/discover/recipes">
                    <Route index element={<Allrecipes />} />
                    {/* <Route path="/discover/recipes/:title" element={<Recipes/>}/> */}
                  </Route>
                  <Route path="/discover/gardens">
                    <Route index element={<p>gardens</p>} />
                  </Route>
                  <Route path="/discover/beauty">
                    <Route index element={<p>beauty</p>} />
                  </Route>
                  <Route path="/discover/arts&crafts">
                    <Route index element={<p>arts</p>} />
                  </Route>
                  <Route path="/discover/community">
                    <Route index element={<p>community</p>} />
                  </Route>
                  <Route path="/discover/seasonal">
                    <Route index element={<p>seasonal</p>} />
                  </Route>
                  <Route path="/discover/events">
                    <Route index element={<p>events</p>} />
                  </Route>
                </Route>

                <Route path="/feed" element={<h1>feed</h1>} />
                <Route path="/profile" element={<h1>profile</h1>} />
                <Route path="/create" element={<h1>create</h1>} />
                <Route path="/logout" element={<h1>logout</h1>} />
              </>
            )}

            <Route path="*" element={<LoginRegister/>} />
          </Routes>
          </>
          )}
    </>

  )
}

// <div>
// <LoginRegister />
// <UserLogout />
// <UserEdit />
// <UserDelete />
// <Posts />
// </div>