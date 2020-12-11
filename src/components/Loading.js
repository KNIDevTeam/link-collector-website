import React from "react";
import FullPage from "./FullPage";

const Loading = props => {

    return(
        <FullPage backgroundStyle={props.backgroundStyle} contentStyle={props.contentStyle}>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </FullPage>
    )
}

export default Loading;