import PropTypes from 'prop-types';
import AuthContext from '../Context/AuthContext';


const AuthProvider = ({ children }) => {


    const authInfo = {

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