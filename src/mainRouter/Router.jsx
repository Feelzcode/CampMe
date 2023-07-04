import { Link, Route, Routes } from "react-router-dom";
import Indexhome from "../Homepage/indexhome";
import AdminRegister from "../register/Register";

<Routes>
<Route path="/" element={<Indexhome/>}/>
<Route path="/adminRegister" element={<AdminRegister/>}/>
</Routes>