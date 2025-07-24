import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderLogo from './header/HeaderLogo';
import TabMenu from './header/TabMenu';
export default function Header(){
    return(
       <div>
        <HeaderLogo/>
        <TabMenu/>     

        </div>
    )
}