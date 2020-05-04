import React from "react";
import NavigationPage from "./views/NavigationPage/NavigationPage";
import UserProvider from "./providers/UserProvider";
function App() {
    return (
        <UserProvider>
            <NavigationPage />
        </UserProvider>
    );
}
export default App;
