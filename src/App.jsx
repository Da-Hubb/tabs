import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Data } from "./components/Data";
import { useEffect, useState } from "react";
const App = () => {
    const [ tab, setTab ] = useState(Data);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const changeLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }
    const handleClick = id => {
        setTab(prevTab => {
            return prevTab.map((item, index) => {
                item.id === id && setIndex(index);
                return item.id === id ? {...item, show: true} : {...item, show: false}
            })
            
        })
        changeLoading();
    }
    return(
        <>
            <h1 className="m-t">Experiences</h1>
            <div className="container">
                <Sidebar data={tab} handleClick={handleClick}/>
                <Content data={tab[index]} loading={loading}/>
            </div>
        </>
    )
}

export default App;