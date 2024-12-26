import PropTypes from 'prop-types';
import AuthContext from '../Context/AuthContext';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/FireBase.config';


const AuthProvider = ({ children }) => {

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        userSignIn, 
        createNewUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}


export default AuthProvider;