import React from "react"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Cart from "./Cart";
import Home from './Home';

const App = () => {

    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path = "/" exact element={<Home />} />
            </Routes>
            <Routes>
                <Route path = "/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </div>
    )
}
export default App