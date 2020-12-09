import React from "react";
import FullPage from "./FullPage";

const Loading = props => {

    return(
        <FullPage>
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