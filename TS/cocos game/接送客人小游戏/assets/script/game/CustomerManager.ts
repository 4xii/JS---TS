import { _decorator, Component, Node, Vec3, AnimationComponent } from "cc";
import { CustomEventListenerts } from "../data/CustomEventListener.ts";
import {Constants} from "../data/Constants"
const { ccclass, property } = _decorator;

const EventName = Constants.EventName;
const _tempVec = new Vec3();

@ccclass("C")
export class C extends Component {
    @property({
        type:[Node]
    })
    customers:Node[]=[];
    @property
    walkTime = 2;

    private _currCustomer:Node = null;
    private _startPos = new Vec3();
    private _endPos = new Vec3();
    private _inTheOrder = false;
    

    public start(){
        CustomEventListenerts.on(EventName.GREETING,this._greetingCustomer,this);
        CustomEventListenerts.on(EventName.GOODBYE,this._takingCustomer,this);
    }

    public update(){
        //在订单中
        if(this._inTheOrder){

        }
    }

    private _greetingCustomer(...args:any){
        //随机出一个乘客
        this._currCustomer = this.customers[Math.floor(Math.random()*this.customers.length)]
        if(!this._currCustomer){
            return;//如果当前没有乘客
        }
        const carPos = args[0];
        const direction =args[1];
        Vec3.multiplyScalar(this._startPos,direction,1.4);
        this._startPos.add(carPos);//顾客开始位置
        Vec3.multiplyScalar(this._endPos,direction,0.5);
        this._endPos.add(carPos);

        this._currCustomer.setWorldPosition(this._startPos);
        this._currCustomer.active = true;

        if(direction.x ! =0){
            if(direction.x > 0){
                this._currCustomer.eulerAngles = new Vec3(0,90,0);
            }else{
                this._currCustomer.eulerAngles = new Vec3(0,-90,0)
            }
        }else{
            if(direction.z > 0){
                this._currCustomer.eulerAngles = new Vec3(0,180,0);
            }else{
                this._currCustomer.eulerAngles = new Vec3()
            }
        }
        //播放动画
        const animComp = this._currCustomer.getComponent(AnimationComponent);
        animComp.play('walk');

    }

    private _takingCustomer(...args:any){

    }
}
