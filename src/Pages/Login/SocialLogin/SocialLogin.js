import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorComponent;
    if (error) {
       
        errorComponent = <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
       
      }
      
      if(user){
        navigate('/home')
      }

    return (
        <div>
         <div class="d-grid gap-2 col-6 mx-auto">
   <button onClick={()=> signInWithGoogle()} class="btn btn-dark" type="button">Google sign in</button>
   {errorComponent}
  <button class="btn btn-primary" type="button">Facebook sign in</button>
  <button class="btn btn-light text-dark" type="button">Github sign in</button>
</div>
        </div>
    );
};

export default SocialLogin;