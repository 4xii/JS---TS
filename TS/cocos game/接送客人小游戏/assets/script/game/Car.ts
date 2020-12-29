import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Car")
export class Car extends Component {
    
    public setEntry(entry:Node){
        this.node.setWorldPosition(entry.worldPosition);
    }
}
