import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import FullPage from "../components/FullPage";
import {toast, ToastContainer} from "react-toastify";
import Loading from "../components/Loading";

//sprawdzenie tokena
//odesłanie na /denied jak brak

const MainView = props => {

    const history = useHistory();

    useEffect(() => {
        if(props.loaded)
        {
            if(props.token)
                history.push('/main')
            else
                history.push('/denied')
        }
    }, [props.loaded])

    useEffect(() => {
        if(props.counter === 0 && props.token)
        {
            props.setCounter(prevState => ++prevState);
            toast.success('Zalogowano pomyślnie!');
        }
    })

    if(!props.loaded)
        return <Loading backgroundStyle={t} />

    return(
        <FullPage fancy backgroundStyle={{height: '92vh'}}>
            <ToastContainer />
            MainView
        </FullPage>
    )
}

const t = {
    position: 'absolute',
    top: 0,
    left: 0
}

export default MainView;