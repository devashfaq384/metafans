import './App.css';
import Auth from './components/Auth/login/Auth'
import ConfirmationCode from './components/Auth/login/ConfirmationCode';
import EnterPin from './components/Auth/login/EnterPin';
import TermOfUse from './components/Auth/login/TermOfUse';
import SignUp from './components/Auth/SignUp/SignUp';
import DMs from './components/Walkthrough/DMs';
import ExploreMetaFace from './components/Walkthrough/ExploreMetaFace';
// import Walkthrough from './components/Walkthrough/Layout';
import NewPoll from './components/Polls/NewPoll'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Moments from './components/Walkthrough/Moments';
import CryptoWallet from './components/Walkthrough/CryptoWallet';
import FanClub from './components/Walkthrough/FanClub';
import HomeFeed from './components/HomeFeed/HomeFeed';
import NewPost from './components/AddPost/NewPost';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import Explore from './components/Explore/Explore';
import Chat from './components/chat/Chat';
import Messages from './components/chat/Messages/Messages';
import AddCollectable from './components/AddCollectable/AddCollectable';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<SignUp></SignUp>} />
        <Route path="/auth/signin" element={<Auth></Auth>} />
        <Route path="/auth/confirmationCode" element={<ConfirmationCode></ConfirmationCode>} />
        <Route path="/auth/enterpin" element={<EnterPin></EnterPin>} />
        <Route path='/auth/terms' element={ <TermOfUse></TermOfUse> }/>
        <Route path='/walkthrough/exploremetaface' element={ <ExploreMetaFace></ExploreMetaFace> }/>
        <Route path='/walkthrough/DM' element={ <DMs></DMs> }/>
        <Route path='/walkthrough/moments' element={ <Moments></Moments> }/>
        <Route path='/walkthrough/cryptowallet' element={ <CryptoWallet></CryptoWallet> }/>
        <Route path='/walkthrough/fanclub' element={ <FanClub></FanClub> }/>
        <Route path='/home/feed' element={ <HomeFeed></HomeFeed> }/>
        <Route path='/home/post/new' element={ <NewPost></NewPost> }/>
        <Route path='/home/poll/new' element={ <NewPoll></NewPoll> }/>
        <Route path='/home/collectable/new' element={ <AddCollectable></AddCollectable> }/>
        <Route path='/user/profile' element={ <Profile></Profile> }/>
        <Route path='/user/edit/profile' element={ <EditProfile></EditProfile> }/>
        <Route path='/explore' element={ <Explore></Explore> }/>
        <Route path='/chat' element={ <Chat></Chat> }/>
        <Route path='/chat/message' element={ <Messages></Messages> }/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
