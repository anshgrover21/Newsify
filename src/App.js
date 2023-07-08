
import './App.css';
import NavBar from './components/navBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, {useState } from 'react'

const App = ()=> {

  let pageSize = 12;
   const [progress, setprogress] = useState(0)
 
   
  const setProgress = (progress)=>{
    setprogress(progress)
  }


 
    return (
      <Router>
          <div>
             <LoadingBar color="#f11946" height={3} progress={progress} setProgress={setProgress}  />
            <NavBar/>
            
            <Routes>
              <Route path="/"  element={<News  key="Home" setProgress={setProgress}  m ="Home" country="in"  pageSize={pageSize}/>}></Route> {/* we use the key in news component just to rerendor/remount it if we do not use key then the code with have to refresh to route at the location defined */}
              <Route path="/business" element={<News key="business"setProgress={setProgress}  m ="Business" country="in" category="business" pageSize={pageSize}/>}></Route> 
              <Route path="/entertainment" element={<News key="entertainment" setProgress={setProgress} m ="Entertainment" country="in" category="entertainment" pageSize={pageSize}/>}></Route> 
              <Route path="/general" element={<News key="general"setProgress={setProgress} m ="General"  country="in" category="general" pageSize={pageSize}/>}></Route> 
              <Route path="/health" element={<News key="health"setProgress={setProgress} m ="Health"  country="in" category="health" pageSize={pageSize}/>}></Route> 
              <Route path="/science" element={<News key="science" setProgress={setProgress} m ="Science" country="in" category="science" pageSize={pageSize}/>}></Route> 
              <Route path="/sports" element={<News key="sports"setProgress={setProgress} m ="Sports"  country="in" category="sports" pageSize={pageSize}/>}></Route> 
              <Route path="/technology" element={<News key="technology"setProgress={setProgress}  m ="Technology" country="in" category="technology" pageSize={pageSize}/>}></Route>      
              <Route path="/us"  element={<News  key="general" setProgress={setProgress} m ="General" country="us" category="general" pageSize={pageSize}/>}></Route>      
            </Routes>
          </div>
      </Router>
    )
  }


export default App