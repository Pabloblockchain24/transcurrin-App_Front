import { AppStack, Navigator } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useSelector } from 'react-redux';


export const MainNavigator = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <>
            {user ? <AppStack /> : <AuthStack />}
        </>
    )

}