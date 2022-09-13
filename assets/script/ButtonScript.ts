import { _decorator, Component, Node, find } from "cc";
const { ccclass, property } = _decorator;

interface PigScript extends Component {
  moveLeft: () => void;
  moveRight: () => void;
}

@ccclass("Button")
export class Button extends Component {
  // start() {
  // }
  // update(deltaTime: number) {
  // }

  @property
  toLeft: boolean = true;

  onLoad() {
    this.node.on(Node.EventType.MOUSE_DOWN, this.onClick, this);
  }

  onClick() {
    const node: Node = find("Canvas/peiqi");
    const script = node.getComponent("PigScript");

    if (this.toLeft) {
      script.moveLeft();
    } else {
      script.moveRight();
    }
  }
}
