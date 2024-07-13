import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpg from './Landingpg';
import Login from './Login';
import Register from './Register';
import Laws from './Laws';
import Usercontext from './Usercontext';
import StoryBuilder from './StoryBuilder';
import Games from './Games';
import Story from './Story';
import ViewStory from './ViewStory';
import Quiz from './Quiz';
import Memory from './Memory';
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
                <Route path='/Quiz' element={<Quiz/>}/>
                <Route path='/Memory' element={<Memory/>}/>
                <Route path='/story/:id' element={<ViewStory/>} />
            </Routes>
        </Router>
        </Usercontext>
    );
}

export default App;
