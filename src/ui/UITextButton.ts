/**
 * This a simple button with some static text.
 */
export default class UITextButton extends Phaser.Sprite {
    private static readonly PADDING: { x: number, y: number } = { x: 0, y: 5 };
    private static readonly FONT: Object = {
        font: 'Impact, Charcoal, sans-serif',
        fontSize: 32,
        align: 'center',
        fill: '#000'
    };

    private text: Phaser.Text;

    constructor(game: Phaser.Game, x: number, y: number, label: string) {
        super(game, x, y, 'textButtonBackground');
        this.anchor.setTo(0.5, 0.5);

        this.text = this.game.add.text(UITextButton.PADDING.x, UITextButton.PADDING.y, label, UITextButton.FONT);
        this.text.anchor.setTo(0.5, 0.5);
        this.addChild(this.text);

        this.inputEnabled = true;
        this.input.useHandCursor = true;
    }
}