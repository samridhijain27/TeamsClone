import { ChatEngine } from 'react-chat-engine'
import logo from './logo.svg';
import './App.css';
import { ChatFeed } from './components/ChatFeed'

const App = () =>{
  return(
    <ChatEngine 
    height = "100vh"
    projectID = **
    userName = **
    userSecret = **
    renderChatFeed ={(chatAppProps)=> < ChatFeed {... chatAppProps}/>}
    />
  );
    
}

export default App;
