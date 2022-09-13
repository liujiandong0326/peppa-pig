import {
  _decorator,
  Component,
  input,
  Input,
  EventKeyboard,
  KeyCode,
  SpriteFrame,
  Sprite,
  AudioSource,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("PigScript")
export class PigScript extends Component {
  @property(SpriteFrame)
  face1: SpriteFrame = null;

  @property(SpriteFrame)
  face2: SpriteFrame = null;

  faceLeft: boolean = false;

  @property(AudioSource)
  audioSource: AudioSource = null!;

  onLoad() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    this.audioSource = this.node.getComponent(AudioSource);
  }

  onKeyDown(event: EventKeyboard) {
    if (event.keyCode === KeyCode.ARROW_LEFT) {
      this.moveLeft();
    } else if (event.keyCode === KeyCode.ARROW_RIGHT) {
      this.moveRight();
    }
  }

  changeFace() {
    // Sprite 表示一个组件
    // spriteFrame  表示一个图片的地址
    const sprite: Sprite = this.node.getComponent(Sprite);

    if (this.faceLeft) {
      sprite.spriteFrame = this.face1;
    } else {
      sprite.spriteFrame = this.face2;
    }
  }

  moveLeft() {
    const { x, y } = this.node.position;
    this.faceLeft = true;
    this.node.setPosition(x - 10, y);
    this.changeFace();
    this.runAudio();
  }

  moveRight() {
    const { x, y } = this.node.position;
    this.faceLeft = false;
    this.node.setPosition(x + 10, y);
    this.changeFace();
    this.runAudio();
  }

  runAudio() {
    this.audioSource.play();
  }
}
