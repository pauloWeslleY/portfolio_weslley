import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

export const AppRoutes = () => {
   return (
      //! Routes this Pages
      <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
};
