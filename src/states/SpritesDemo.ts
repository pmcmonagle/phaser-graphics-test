import DemoBase from './DemoBase';

/**
 * This demo should:
 * 1. Display 144 Sprites
 * 2. Stack them such that some number in the back are still visible
 * 3. Every second play a 2-second tween from Left to Right
 * 4. Reverse order of the stack when on the right
 *
 * It seems to run fine on both my OnePlus One and iPhone 6s. 144 Sprites aren't
 * really an issue for Phaser with WebGL rendering. They're all a part of the
 * same texture, so the whole thing gets batch rendered with one draw call.
 */
export default class SpritesDemo extends DemoBase {
    private static SPRITE_COUNT: number = 144;
    private static SPRITE_OPTIONS: number = 58;
    private static DELAY_TIME: number = 1000;
    private static TWEEN_TIME: number = 2000;
    private static START_TIME: number = 2000;
    private static LEFT_STACK_OFFSET: { x: number, y: number } = { x: -200, y: 0 };
    private static RIGHT_STACK_OFFSET: { x: number, y: number } = { x: 200, y: 0 };

    private cards: Array<Phaser.Sprite> = [];

    public create() {
        super.create();

        while (this.cards.length < SpritesDemo.SPRITE_COUNT) {
            let card = this.game.add.sprite(
                this.game.world.centerX + SpritesDemo.LEFT_STACK_OFFSET.x,
                this.game.world.centerY + SpritesDemo.LEFT_STACK_OFFSET.y,
                'cards',
                Math.floor(Math.random() * SpritesDemo.SPRITE_OPTIONS)
            );
            card.anchor.setTo(0.5, 0.5);
            card.rotation = Math.random() * 0.5 - 0.25;

            this.cards.push(card);
        }

        // Wait a few seconds before kicking it off since instantiating 144 objects is
        // probably the biggest bottleneck.
        this.game.time.events.add(SpritesDemo.START_TIME, this.sendCardsRight, this);
    }

    public shutdown() {
        this.cards = [];
    }

    private sendCardsRight() {
        if (this.game.time.fps < 50)
            this.game.antialias = false;
        this.cards.reverse().forEach((card, i) => {
            this.game.add.tween(card)
                .to({ x: this.game.width / 2 + SpritesDemo.RIGHT_STACK_OFFSET.x }, SpritesDemo.TWEEN_TIME, Phaser.Easing.Quadratic.Out, true, SpritesDemo.DELAY_TIME * i)
                .onStart.addOnce(card.bringToTop, card);
        });
    }
}
