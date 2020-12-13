import React from "react";
import styles from "../styles/styles";
import BarItem from "./BarItem";
import linkCategories from "../enums/linkCategories";

const generateBarItems = () => {
    const arr = [];
    for (let i in linkCategories)
        arr.push(<BarItem key={i}>{linkCategories[i]}</BarItem>)

    return arr;
}

const SideBar = props => {

    return (
        <div style={{...styles.sideBar, ...styles.flexCenter, justifyContent: 'flex-start'}}>
            <div style={{...styles.sideBar.headerItem, ...styles.flexCenter}}>
                <span style={{transform: 'rotate(-90deg)'}}>Kategorie</span>
            </div>
            <div style={{...styles.flexCenter, height: '100%', width: '90%', justifyContent: 'space-around'}}>
                {generateBarItems()}
            </div>
        </div>
    )
}

export default SideBar;