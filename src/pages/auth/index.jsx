import {auth, provider} from '../../config/firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

function Auth () {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem('auth', JSON.stringify(authInfo));
    if (authInfo.isAuth) {
      navigate('/dashboard');
    }
  }
  return ( 
    <>
      <p>Sign In With Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </>
   );
}

export default Auth ;