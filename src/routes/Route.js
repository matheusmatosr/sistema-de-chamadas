import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contents/auth';


export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    const { signed, loading } = useContext(AuthContext);

    if (loading){
        return(
            <div>Carregando...</div>
        )
    }

    if (!signed && isPrivate){
        return <Navigate to="/" />
    }

    if (signed && !isPrivate){
        return <Navigate to="/dashboard" />
    }

    return(
        <Route 
            {...rest}
            render={ props => (
                <Component {...props}/>
            )}
        />
    )
}