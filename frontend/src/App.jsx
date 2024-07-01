import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpg from './Landingpg';
import Login from './Login';
import Register from './Register';
import Laws from './Laws';
import Usercontext from './Usercontext';
import StoryBuilder from './StoryBuilder';
import Games from './Games';
import Story from './Story';
function App() {

    return (
    <Usercontext>
        <Router>
            <Routes>
                <Route path='/' element={<Landingpg />} />
                <Route path='/Laws' element={<Laws/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/Games' element={<Games />} />
                <Route path='/StoryBuilder' element={<StoryBuilder  />} />
                <Route path='/Story' element={<Story/>} />
            </Routes>
        </Router>
        </Usercontext>
    );
}

export default App;
