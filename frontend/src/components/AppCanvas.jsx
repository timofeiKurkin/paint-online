import React from 'react';
import Toolbar from "./Toolbar";
import SettingBar from "./SettingBar";
import Canvas from "./Canvas";
import '../style/app.scss'

const AppCanvas = () => {
    return (
        <div className="app">
            <div className='tool-row'>
                <Toolbar/>
                <SettingBar/>
            </div>
            <Canvas/>
        </div>
    );
};

export default AppCanvas;