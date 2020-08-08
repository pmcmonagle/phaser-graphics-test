import UITextButton from '../ui/UITextButton';

/**
 * A simple title screen. Fullscreen API requires click-to-activate
 */
export default class SpritesDemo extends Phaser.State {
    private startButton: Phaser.Sprite;

    public create() {
        this.startButton = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'startButton');
        this.startButton.anchor.setTo(0.5, 0.5);
        this.startButton.inputEnabled = true;
        this.startButton.input.useHandCursor = true;
        this.startButton.events.onInputUp.add(() => {
            this.game.scale.startFullScreen(false);
            this.game.state.start('spritesDemo');
        });
    }

    public update() {
    }
}
