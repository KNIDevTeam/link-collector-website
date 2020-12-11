import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import appRoutes from "../enums/appRoutes";
import HeaderItem from "./HeaderItem";
import styles from "../styles/styles";
import theme from "../styles/theme";


const Header = props => {

    const history = useHistory();

    const move = (path) => {
        history.push(path)
    }

    const checkIfFirst = (num) => {
        return (num === 0)
    }


    return(
        <div style={wrapper}>
            <div style={{...styles.flexCenter, justifyContent: 'flex-start', height: '100%'}}>
                {appRoutes.ROUTES.map((item, index) => (
                    <HeaderItem first={checkIfFirst(index)} url={item.url} onClick={() => move(item.url)} key={index}>
                        {item.title}
                    </HeaderItem>
                    ))}
                    <div style={{flexGrow: 1}} />
                    <HeaderItem url={'/logout'} onClick={() => move('/logout')}>
                        Wyloguj
                    </HeaderItem>
            </div>
        </div>
    )
}

const wrapper = {
    width: '100%',
    height: '8vh',
    background: theme.dark.darkerMain
}

export default Header;