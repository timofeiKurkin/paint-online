import {Route, Routes} from "react-router-dom";
import AppCanvas from "./components/AppCanvas";

function App() {
    const randomNumber = (num) => Math.floor(Math.random() * num)
    return (
        <Routes>
            <Route path="/:id" element={<AppCanvas/>}/>
            {/*<Route path={`/:id${randomNumber(13124)}`} element={<AppCanvas/>}/>*/}
        </Routes>
    );
}

export default App;
