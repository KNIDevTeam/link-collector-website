import React, {useEffect} from "react";
import Loading from "../components/Loading";
import {useHistory} from "react-router-dom";

//Sprawdzanie localStorage i ustawienie tokena na true/false
//Przekierowanie do login/main


const EntranceView = props => {

    const history = useHistory();

    useEffect(() => {
        if(props.token)
            history.push('/main')
        else
            history.push('/login')
    }, [props.token])

    return(
        <Loading />
    )
}

export default EntranceView;