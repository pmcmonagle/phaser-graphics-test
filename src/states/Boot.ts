/**
 * Initialize Phaser with appropriate scale settings, and preload
 * the preload image.
 */
export default class Boot extends Phaser.State {
    public preload() {
        this.load.image('preloadSprite', 'assets/images/preloadSprite.png');
    }

    public create() {
        this.game.input.maxPointers = 1;

        this.game.stage.backgroundColor = '#4D4D4D';
        this.game.stage.smoothed = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();

        // Required for the FPS counter.
        this.game.time.advancedTiming = true;

        this.game.state.start('preload');
    }
}
