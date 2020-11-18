import React from 'react';

import IncrementClass from "./components/inc-class/IncrementClass";
import {IncrementFunction} from "./components/inc-function/IncremetFunction";
import {Dropdown} from "./components/dropdown/Dropdown";
import './App.css'

function App() {
    return (
        <div>
            {/*<IncrementClass/>*/}
            <Dropdown items={[1, 2, 3, 4]}/>
            <IncrementFunction/>
        </div>
    )
}


export default App;