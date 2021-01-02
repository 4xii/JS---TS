import { _decorator, Component, Node,Touch,EventTouch } from "cc";
import { Constants } from "../data/Constants";
import { AudioManager } from "./AudioManager";
import { CarManager } from "./CarManager";
import { MapManager } from "./MapManager";
const { ccclass, property } = _decorator;

@ccclass("GameCtril")
export class GameCtril extends Component {
    @property({
        type:MapManager,
    })
    mapManager: MapManager = null;

    @property({
        type:CarManager,
    })
    carManager: CarManager = null;

    //生命周期onLoad初始化阶段
    public onLoad(){
        this.mapManager.resetMap();
        this.carManager.reset(this.mapManager.currPath)
    }

    //屏幕点击事件
    public start(){
        this.node.on(Node.EventType.TOUCH_START,this._touchStart,this);
        this.node.on(Node.EventType.TOUCH_END,this._touchEnd,this)

        AudioManager.playMusic(Constants.AudioSource.BACKGROUND)
    }
    
    private _touchStart(touch:Touch,event:EventTouch){
        this.carManager.controlMoving();
    }

    private _touchEnd(touch:Touch,event:EventTouch){
        this.carManager.controlMoving(false);
    }
}
