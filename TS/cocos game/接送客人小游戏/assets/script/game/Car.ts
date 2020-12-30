import { _decorator, Component, Node, Vec3 } from "cc";
import {RoadPoint} from "./RoadPoint";
const { ccclass, property } = _decorator;

const _tempVec = new Vec3();

@ccclass("Car")
export class Car extends Component {
    //小车朝向问题
    private _currRoadPoint: RoadPoint = null;
    private _pointA = new Vec3();
    private _pointB = new Vec3();
    //当前的速度
    private _currSpeed = 0.1;
    private _isMoving = false;
    private _offset = new Vec3();

    public update(dt:number){
        if(this._isMoving){
            this._offset.set(this.node.worldPosition);
            //向朝向方向运动
            switch(this._currRoadPoint.moveType){
                case RoadPoint.RoadMoveType.BEND:
                    break;
                default:
                    const z = this._pointB.z - this._pointA.z;
                    if(z !== 0){
                        if(z >0){
                            this._offset.z += this._currSpeed;
                            //容错处理
                            if(this._offset.z > this._pointB.z){
                                this._offset.z = this._pointB.z;
                            }
                        }else {
                            this._offset.z -= this._currSpeed;
                            //容错处理
                            if(this._offset.z < this._pointB.z){
                                this._offset.z = this._pointB.z;
                            }
                        }
                    }else{
                        const x = this._pointB.x - this._pointA.x;
                        if(x >0){
                            this._offset.x += this._currSpeed;
                            //容错处理
                            if(this._offset.x > this._pointB.x){
                                this._offset.x = this._pointB.x;
                            }
                        }else {
                            this._offset.x -= this._currSpeed;
                            //容错处理
                            if(this._offset.x < this._pointB.x){
                                this._offset.x = this._pointB.x;
                            }
                            
                        }
                    }
                    break;
            }
            this.node.setWorldPosition(this._offset);
            Vec3.subtract(_tempVec,this._pointB,this._offset);
            if(_tempVec.length() <= 0.01){
                this._arrivalSataion();
            }
        }
    }

    
    public setEntry(entry:Node){
        this.node.setWorldPosition(entry.worldPosition);
        this._currRoadPoint = entry.getComponent(RoadPoint); 
        if(!this._currRoadPoint){
            console.warn('This is no RoadPoint in' + entry.name);
        } 

        //通过下一个点与本点的差计算小车朝向
        this._pointA.set(entry.worldPosition)
        this._pointB.set(this._currRoadPoint.nextStation.worldPosition);
        const z = this._pointB.z - this._pointA.z;
        if(z !== 0){
            if(z<0){
                this.node.eulerAngles = new Vec3();
            }else{
                this.node.eulerAngles = new Vec3(0,180,0)
            }
        }else{
            const x = this._pointB.x - this._pointA.x;
            if(x>0){
                this.node.eulerAngles = new Vec3(0,270,0);
            }else{
                this.node.eulerAngles = new Vec3(0,90,0);
            }
        }
    }

    public startRunning(){
        if(this._currRoadPoint){
            this._isMoving = true;
        }
    }
    public stopRunning(){
        this._isMoving = false;
    }
    //到站
    private _arrivalSataion(){
        this._pointA.set(this._pointB);
        this._currRoadPoint = this._currRoadPoint.nextStation.getComponent(RoadPoint);
        if(this._currRoadPoint.nextStation){
            this._pointB.set(this._currRoadPoint.nextStation.worldPosition);
        }else{
            this._isMoving = false;
            this._currRoadPoint = null;
        }
    }
}
