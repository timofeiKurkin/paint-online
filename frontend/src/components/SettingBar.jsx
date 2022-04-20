import React from 'react';
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="toolbar toolbar-settings">
            <label htmlFor="line-width">Толщина линии</label>
            <input onChange={e => toolState.setLineWidth(e.target.value)}
                   id="line-width"
                   type="number"
                   min={1}
                   max={50}
                   defaultValue={10}/>
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input onChange={e => toolState.setStrokeColor(e.target.value)} id="stroke-color" type="color"/>
        </div>
    );
};

export default SettingBar;