import React from "react";

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <img src={require("../../img/loader.png")} alt="loader"/>
        </div>
    );
}

export default Loader
