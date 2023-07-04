import { Link, Route, Routes } from "react-router-dom";
import Indexhome from "../Homepage/indexhome";
import AdminRegister from "../register/Register";
import React from 'react'

const Router = () => {
  return (
    <div>

<Routes>
<Route path="/" element={<Indexhome/>}/>
<Route path="/adminRegister" element={<AdminRegister/>}/>
</Routes>
    </div>
  )
}

export default Router

