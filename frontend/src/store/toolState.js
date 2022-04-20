import {makeAutoObservable} from "mobx";

class ToolState{
    tool = null
    constructor() {
        // делает данные которые находятся в этом классе, отслеживаемыми. при изминениях делает рендер компонента
        makeAutoObservable(this)
    }

    // изменяет состояние компонента
    setTool(tool){
        this.tool = tool
    }

    setFillColor (color) {
        this.tool.fillColor = color
    }

    setStrokeColor (color) {
        this.tool.strokeColor = color
    }

    setLineWidth(width) {
        this.tool.lineWidth = width
    }
}

export default new ToolState()