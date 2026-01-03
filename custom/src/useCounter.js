import { useState } from "react";
function useCounter(initalValue= 0) {

    const increment = () => setCount(prev +1 );
    const decrement = () => setCount(prev -1 );
    const reset =() => setCount(initalValue);

    return{count, increment , decrement , reset };
    

                

}