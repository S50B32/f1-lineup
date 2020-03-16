import { useState } from 'react';


const useSpinner = () => {

    const [isActive, setIsActive] = useState(false);

    const activateSpinner = () => {
        setIsActive(true);
    }
    const deactivateSpinner = () => {
        setIsActive(false);
    }

    return {
        isActive,
        activateSpinner,
        deactivateSpinner
    }
}

export default useSpinner;