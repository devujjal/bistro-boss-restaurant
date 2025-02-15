import PropTypes from 'prop-types';
import AuthContext from '../Context/AuthContext';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../Firebase/FireBase.config';
import { useEffect, useState } from 'react';
import usePublicAxios from '../Hooks/usePublicAxios';
import toast from 'react-hot-toast';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = usePublicAxios();

    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            const userEmail = currentUser?.email || user?.email;

            setUser(currentUser)
            setLoading(false)

            try {
                if (currentUser) {
                    await axiosPublic.post('/jwt', { email: userEmail });
                } else {
                    await axiosPublic.post('/jwt-signout', { email: userEmail });
                }
            } catch (error) {
                toast.error(error.message)
            }
        });

        return () => {
            unSubscribe();
        };
    }, [axiosPublic, user?.email]);



    // console.log(user)


    const authInfo = {
        userSignIn,
        createNewUser,
        userLogOut,
        updateUserProfile,
        signInWithGoogle,
        user,
        loading
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