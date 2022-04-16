import {signIn} from '../services/auth'

let AuthContext = React.createContext(null); 
function AuthProvider({children}) {
    const value = { signIn  }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    
}