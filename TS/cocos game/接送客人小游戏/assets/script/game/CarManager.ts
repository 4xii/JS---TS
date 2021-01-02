import { _decorator, Component, Node, loader, Prefab } from "cc";
import { PoolManager } from "../data/PoolManager";
import { Car } from "./Car";
import { RoadPoint } from "./RoadPoint";
import { CustomEventListener } from "../data/CustomEventListener";
import { Constants } from "../data/Constants";
const { ccclass, property } = _decorator;

@ccclass("CarManager")
export class CarManager extends Component {
    @property({
        type:Car
    })
    mainCar:Car = null;

    private _currPath:Node[] = [];//记录当前路径
    private _aiCars:Car[] = [];//记录小车

    public reset(points:Node[]){
        if(points.length <= 0){
            console.warn('There is no points in this map');
            return;
        }

        this._currPath = points;
        this._createMainerCar(points[0]);
        //this._startSchedule();
    }
    public controlMoving(isRunning = true){
        if(isRunning){
            this.mainCar.startRunning();
        }else {
            this.mainCar.stopRunning();
        }
    }

    private _createMainerCar(point:Node){
        this.mainCar.setEntry(point,true);
    }

    //AI小车
    /* private _startSchedule(){
        //开始回调
        for(let i = 1; i <this._currPath.length;i++){
            const node = this._currPath[i];
            const roadPoint = node.getComponent(RoadPoint);
            roadPoint.startSchedule(this._createEnemy.bind(this));
        }
    } */

    private _stopSchedule(){

    }

    //创建敌人
    private _createEnemy(road: RoadPoint, carID: string){
        const self = this;
        loader.loadRes(`car/car${carID}`, Prefab, (err: any, prefab: Prefab)=>{
            if(err){
                console.warn(err);
                return;
            }

            const car = PoolManager.getNode(prefab, self.node);
            const carComp = car.getComponent(Car);
            this._aiCars.push(carComp);
            carComp.setEntry(road.node);
            carComp.maxSpeed = road.speed;
            carComp.startRunning();
            carComp.moveAfterFinished(this._recycleAICar.bind(this));
        });
    }

    private _recycleAICar(car:Car){
        const index = this._aiCars.indexOf(car);
        if(index >= 0){
            PoolManager.setNode(car.node);
            this._aiCars.splice(index,1)
        }
    }
}
