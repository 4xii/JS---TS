import { _decorator, Component, Node, Vec3, Enum } from "cc";
const { ccclass, property } = _decorator;

enum ROAD_POINT_TYPE {
    NORMAL = 1,
    START,
    GREETING,
    GOODBYE,
    END,
    AI_START,//区分小车行为-AI小车
}

Enum(ROAD_POINT_TYPE);

enum ROAD_MOVE_TYPE{
    LINE = 1,
    CURVE
}

Enum(ROAD_MOVE_TYPE);
@ccclass("RoadPoint")
export class RoadPoint extends Component {
    @property({
        type:ROAD_POINT_TYPE,
        displayOrder:1
    })
    type = ROAD_POINT_TYPE.NORMAL;

    @property({
        type:Node,
        displayOrder:2,
        visible:function (this:RoadPoint){
            return this.type !== ROAD_POINT_TYPE.END;
        }
    })
    nextStation:Node = null;

    @property({
        type:ROAD_MOVE_TYPE,
        displayOrder:3,
        visible:function (this:RoadPoint){
            return this.type !== ROAD_POINT_TYPE.END;
        }
    })
    moveType = ROAD_MOVE_TYPE.LINE;

    @property({
        displayOrder:4,
        visible:function (this:RoadPoint){
            return this.type !== ROAD_POINT_TYPE.END && this.moveType === ROAD_MOVE_TYPE.CURVE;
        }
    })
    clockwise = true;

    @property({
        type:Vec3,
        visible:function (this:RoadPoint){
            return this.type === ROAD_POINT_TYPE.GREETING || this.type === ROAD_POINT_TYPE.GOODBYE;
        }
    })
    direction = new Vec3(1,0,0);

    @property({
        visible:function (this:RoadPoint){
            return this.type === ROAD_POINT_TYPE.AI_START;
        }
    })
    interval = 3;

    @property({
        visible:function (this:RoadPoint){
            return this.type === ROAD_POINT_TYPE.AI_START;
        }
    })
    delayTime = 0;

    @property({
        visible:function (this:RoadPoint){
            return this.type === ROAD_POINT_TYPE.AI_START;
        }
    })
    speed = 0.05;

    //201,202
    @property({
        visible:function (this:RoadPoint){
            return this.type === ROAD_POINT_TYPE.AI_START;
        }
    })
    cars = '201';
}
