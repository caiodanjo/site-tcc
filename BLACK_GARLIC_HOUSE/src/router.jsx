import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Funcionamento from "./pages/Funcionamento"
import Equipamentos from "./pages/Equipamentos"
import Diferencial from "./pages/Diferencial"
import Bibliografia from "./pages/Bibliografia"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcionamento" element={<Funcionamento />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/diferencial" element={<Diferencial />} />
            <Route path="/bibliografia" element={<Bibliografia />} />
        </Routes>
    )
}

export default Router