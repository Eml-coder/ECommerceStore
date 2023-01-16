import { createContext, useEffect, useState } from 'react';

import { createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/Firebase/FirebaseUtils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//All components inside UserProvider will have access to the value of UserContext
//Most of the authentication logic will be handled here
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };


    //run once when the component mounts
useEffect(() => {
const unsubscribe = onAuthStateChangedListener((user) => {

  if(user){
    createUserDocumentFromAuth(user);
  }
  setCurrentUser(user);
});
return () => unsubscribe();
}, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};