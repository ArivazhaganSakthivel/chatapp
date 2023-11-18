

import { useState } from 'react';
import Chatpage from './Chat page/Chatpage';
import Frontpage from './Front Page/Frontpage';

function App() {

  const [user, setUser] = useState(undefined);

  if(!user){
    return <Frontpage onAuth={(user) => setUser(user)} />
  }
  else{
    return <Chatpage user={user} />
  }
}

export default App;
