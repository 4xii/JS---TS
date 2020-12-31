import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

enum EventName{
    GREETING = 'greeting',
    GOODBYE = 'goodbye',
    FINISHDWALK = 'finished-walk',
}


@ccclass("Constants")
export class Constants extends Component {
    public static EventName = EventName;
}
