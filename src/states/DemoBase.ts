import UIDemoSelector from '../ui/UIDemoSelector';

/**
 * Base state for demos. This doesn't need to do much - just display the demo selector and FPS
 */
export default class DemoBase extends Phaser.State {
    private uiDemoSelector: UIDemoSelector;

    public create() {
        this.uiDemoSelector = new UIDemoSelector(this.game, this.game.world);
    }

    public render() {
        this.game.debug.text('FPS: ' + this.game.time.fps || 'FPS: --', 40, 40, "#00ff00");
    }
}
