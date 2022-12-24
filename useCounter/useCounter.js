import { useState } from "react";

export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = ( value=1 ) => {
        if( (counter+value) <= 2000 )
            setCounter( counter + value );
    }

    const decrement = ( value=1 ) => {
        if( (counter-value) >= 0 )
            setCounter( counter - value );
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}