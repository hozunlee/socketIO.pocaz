import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Chat from "./components/Chat";
import Join from "./components/Join";

import "./App.css";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/*" element={<Join />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
