import React, { useState, useEffect } from "react";

const Modal = (props) => {
    const {planet} = props;
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    return(
        <>
        {selectedPlanet &&
            <div>
                
            </div>
        }
        </>
    );
};

export default Modal;
