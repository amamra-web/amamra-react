import React from "react";
import {Router} from "@reach/router";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ProfilePage from "../ProfilePage/ProfilePage";
import PasswordReset from "../PasswordReset/PasswordReset";

function NavigationPage() {
    const user = null;
    return(
        user ?
            <profilePage />
            :
            <Router>
                <SignUp path="signUp" />
                <SignIn path="/" />
                <PasswordReset path="passwordReset" />
            </Router>
    );

}

export default NavigationPage
