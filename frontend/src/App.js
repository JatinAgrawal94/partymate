import './App.css';
import {Link,BrowserRouter,Route} from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { HostingParty } from './screens/hostinparty';
import { AddPeopleScreen } from './screens/AddPeopleScreen';
import { SignInScreen } from './screens/SignInScreen';
import { SignUpScreen } from './screens/SignUpScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container max-w-screen-2xl fixed... flex justify-between p-3 border-b-2">
          <Link to='/home' className="flex text-3xl text-pink-500  "><img src="./images/girl.png" alt="girl" className="w-10"/>PartyMate</Link>
          <Link className="text-2xl text-white  border-2 rounded-md p-1 bg-pink-500 hover:bg-pink-400 ... " to='/login'>LogIn</Link>
        </div>
          <Route path='/hostingparty' component={HostingParty}></Route>
          <Route path='/home' component={HomeScreen}></Route>
          <Route path='/addpeople' component={AddPeopleScreen}></Route>
          <Route path='/login' component={SignInScreen} ></Route>
          <Route path='/signup' component={SignUpScreen}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
