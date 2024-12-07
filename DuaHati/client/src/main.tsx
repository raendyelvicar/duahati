
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Index from './Pages/Mempelai/Index.tsx';
import Create from './Pages/Mempelai/Create.tsx';
import Detail from './Pages/Mempelai/Detail.tsx';
import Home from './Pages/Home/Home.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            
            <Route path="mempelai">  
                <Route index element={<Index />}></Route>
                <Route path="create" element={<Create />}></Route>
                <Route path="detail/:id" element={<Detail />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
