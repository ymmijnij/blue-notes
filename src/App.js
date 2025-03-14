import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import New from "./pages/New";
import View from "./pages/View";
import Search from "./pages/Search";
import Edit from "./pages/Edit";

export default function App() {
    return (
        <Router>
            <div class="position-fixed h-100">
                <Header />
            </div>
            <div class="h-100 row">
                <div class="col-3 h-100">
                    
                </div>
                <div class="pt-5 col-9 d-flex justify-content-evenly">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new-note" element={<New />} />
                        <Route path="/view/:id" element={<View />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/edit-note/:id" element={<Edit />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}