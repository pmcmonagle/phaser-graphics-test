import UITextButton from './UITextButton';

/**
 * This is just a group with three buttons. Each button will launch a different phaser state.
 */
export default class UIDemoSelector extends Phaser.Group {
    private static BUTTON_POSITION: { x: number, y: number } = { x: 1280 - 140, y: 50 };
    private static BUTTON_SPACING: { x: number, y: number } = { x: 0, y: 100 };

    private spritesDemoButton: UITextButton;
    private inlineImageDemoButton: UITextButton;
    private particlesDemoButton: UITextButton;
    private fullScreenButton: UITextButton;

    constructor(game: Phaser.Game, parent?: PIXI.DisplayObjectContainer) {
        super(game, parent, "UIDemoSelector");

        this.spritesDemoButton = new UITextButton(
            game,
            UIDemoSelector.BUTTON_POSITION.x + UIDemoSelector.BUTTON_SPACING.x * 0,
            UIDemoSelector.BUTTON_POSITION.y + UIDemoSelector.BUTTON_SPACING.y * 0,
            "Sprites Demo"
        );
        this.spritesDemoButton.events.onInputUp.add(() => this.game.state.start('spritesDemo'));

        this.inlineImageDemoButton = new UITextButton(
            game,
            UIDemoSelector.BUTTON_POSITION.x + UIDemoSelector.BUTTON_SPACING.x * 1,
            UIDemoSelector.BUTTON_POSITION.y + UIDemoSelector.BUTTON_SPACING.y * 1,
            "Inline Image Demo"
        );
        this.inlineImageDemoButton.events.onInputUp.add(() => this.game.state.start('inlineImageDemo'));

        this.particlesDemoButton = new UITextButton(
            game,
            UIDemoSelector.BUTTON_POSITION.x + UIDemoSelector.BUTTON_SPACING.x * 2,
            UIDemoSelector.BUTTON_POSITION.y + UIDemoSelector.BUTTON_SPACING.y * 2,
            "Fire Demo"
        );
        this.particlesDemoButton.events.onInputUp.add(() => this.game.state.start('particlesDemo'));

        this.fullScreenButton = new UITextButton(
            game,
            UIDemoSelector.BUTTON_POSITION.x + UIDemoSelector.BUTTON_SPACING.x * 3,
            UIDemoSelector.BUTTON_POSITION.y + UIDemoSelector.BUTTON_SPACING.y * 3,
            "Fullscreen"
        );
        this.fullScreenButton.events.onInputUp.add(() => this.game.scale.startFullScreen(false));

        this.addMultiple([
            this.spritesDemoButton,
            this.inlineImageDemoButton,
            this.particlesDemoButton,
            this.fullScreenButton
        ]);
    }

    public update(): void {
        this.fullScreenButton.exists = !this.game.scale.isFullScreen;
    }
}
