import React from 'react'
import DivPanel from './DivPanel';
import MyButton from './MyButton';

const MainPanel = ()=>{
    return (
        <div>
            This is main panel <MyButton></MyButton>
            <DivPanel></DivPanel>
        </div>
    );
}
export default MainPanel;