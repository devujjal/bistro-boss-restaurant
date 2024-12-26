import PropTypes from 'prop-types';
import AuthContext from '../Context/AuthContext';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../Firebase/FireBase.config';
import { useEffect, useState } from 'react';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        userSignIn,
        createNewUser,
        user
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