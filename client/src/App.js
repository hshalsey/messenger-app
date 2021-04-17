// import logo from './logo.svg';
import './App.css';
import Signup from "./components/Signup";
import ChatApp from './components/ChatApp/ChatApp';
import {AuthProvider} from './contexts/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    
   
      <>
      <ChatApp />

      <AuthProvider>

          <Signup/>;

      </AuthProvider>
     </>
  );
}

export default App;
