import {BrowserRouter,Routes, Route} from 'react-router-dom';
import IMC from './page/imc';
import Header from './components/Header';




function RouterApp() {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path = '/' element = {<IMC/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
 
 
export default RouterApp;