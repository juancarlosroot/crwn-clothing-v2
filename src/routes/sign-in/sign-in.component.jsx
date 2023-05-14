import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import {UserContext} from "../../contexts/user.context";
import {useContext} from "react";

const SignIn = () => {

    const {setCurrentUser} = useContext(UserContext);
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();

        setCurrentUser(user);

        const userDocRef = createUserDocumentFromAuth(user);

    };

    return (
        <div>
            <button onClick={logGoogleUser}>Log in</button>
        </div>
    )
};

export default SignIn;
