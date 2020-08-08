/**
 * Handles the preloading of all assets.
 */
export default class Preload extends Phaser.State {
    private static readonly assetsUri: { IMAGES: string, SOUNDS: string, FONTS: string } = {
        IMAGES: "assets/images/",
        SOUNDS: "assets/sounds/",
        FONTS: "assets/fonts/"
    };
    private background: Phaser.Sprite;
    private preloadSprite: Phaser.Sprite;

	/**
	 * Set up the preload graphics, and begin preloading.
	 */
    public preload() {
        this.preloadSprite = this.add.sprite(
            this.game.width / 2,
            this.game.height / 2,
            'preloadSprite'
        );
        this.preloadSprite.anchor.setTo(0.5, 0.5);

        this.load.onLoadComplete.addOnce(this.beginGame, this);
        this.load.setPreloadSprite(this.preloadSprite);

        this.preloadImages();
        this.preloadSounds();
        this.preloadFonts();
    }

    private preloadImages() {
        this.load.image('startButton', `${Preload.assetsUri.IMAGES}startButton.png`);
        this.load.image('textButtonBackground', `${Preload.assetsUri.IMAGES}textButtonBackground.png`);

        this.load.spritesheet('cards', `${Preload.assetsUri.IMAGES}cards.png`, 81, 117, 58);
        this.load.spritesheet('fire', `${Preload.assetsUri.IMAGES}fire1_64.png`, 64, 64);
    }

    private preloadSounds() {
        this.load.audio('click', [`${Preload.assetsUri.SOUNDS}click.wav`]);
    }

    private preloadFonts() {
        this.load.bitmapFont('desyrelMod', `${Preload.assetsUri.FONTS}desyrelMod.png`, `${Preload.assetsUri.FONTS}desyrelMod.xml`);
    }

	/**
	 * We're done preloading - time to play the game!
	 */
    private beginGame() {
        this.game.state.start('title');
    }
}
