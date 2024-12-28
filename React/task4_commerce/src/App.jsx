import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Middle from "./components/Middle";
import { useState } from "react";
import Footer from "./components/Footer";

export const App =()=>{
    const [searchInput,setSearchInput] = useState("")
    
    return(
        <>
            <Header settingSearch={setSearchInput} />
            <Middle inputValue={searchInput} />
            <Footer />
        </>
    )
}

