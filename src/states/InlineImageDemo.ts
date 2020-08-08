import DemoBase from './DemoBase';
import UIBitmapText from '../ui/UIBitmapText';

/**
 * This demo should show a tool which allows us to display images (think emoji) inline with text.
 * Every couple of seconds it should show text and images in a random configuration, with a random font size.
 */
export default class InlineImageDemo extends DemoBase {
    private static MIN_FONT_SIZE: number = 32;
    private static MAX_FONT_SIZE: number = 72;
    private static DICE_WORDS: Array<string> = [
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet'
    ];
    private static DICE_IMAGES: Array<string> = [
        ':dollar:',
        ':heart:'
    ];

    private exampleText: UIBitmapText;

    public create() {
        super.create();

        this.exampleText = new UIBitmapText(this.game, this.game.world.centerX, this.game.world.centerY, 'desyrelMod', '', 64);
        this.exampleText.anchor.setTo(0.5, 0.5);
        this.game.add.existing(this.exampleText);

        this.showRandomText();
        this.game.time.events.add(2000, this.showRandomText, this)
            .loop = true;
    }

    /**
     * Display random text at a random fontsize using the dicewords.
     * Always use at least one image, and chooese the other parts randomly.
     */
    private showRandomText() {
        let words = [Phaser.ArrayUtils.getRandomItem(InlineImageDemo.DICE_IMAGES)],
            minSentenceLength = 3,
            maxSentenceLength = 5 - minSentenceLength,
            sentenceLength = Math.floor(Math.random() * maxSentenceLength) + minSentenceLength;
        while (words.length < sentenceLength) {
            words.push(
                Math.random() > 0.5
                    ? Phaser.ArrayUtils.getRandomItem(InlineImageDemo.DICE_IMAGES)
                    : Phaser.ArrayUtils.getRandomItem(InlineImageDemo.DICE_WORDS)
            );
        }

        this.exampleText.text = Phaser.ArrayUtils.shuffle(words).join(" ");
        this.exampleText.fontSize = Math.floor(Math.random() * (InlineImageDemo.MAX_FONT_SIZE - InlineImageDemo.MIN_FONT_SIZE)) + InlineImageDemo.MIN_FONT_SIZE;
    }
}
