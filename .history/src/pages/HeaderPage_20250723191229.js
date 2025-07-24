import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Header(){
    return(
       <BrowserRouter>
        <Routes>
            <Route element={<logo/>}/>
        </Routes>
       </BrowserRouter>
    )
}