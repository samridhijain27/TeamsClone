import { ChatEngine } from 'react-chat-engine'
import logo from './logo.svg';
import './App.css';
import { ChatFeed } from './components/ChatFeed'

const App = () =>{
  return(
    <ChatEngine 
    height = "100vh"
    projectID = "82b49afe-cf9d-4ce2-9dbf-97c7330d3987"
    userName = "Samridhijain"
    userSecret = "admin"
    renderChatFeed ={(chatAppProps)=> < ChatFeed {... chatAppProps}/>}
    />
  );
    
}

export default App;
