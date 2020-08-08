/**
 * My solution for this is to use a custom BitmapFont. This way the image is embedded directly into the
 * font, just like any other glyph. This has the advantage of being quite fast to render (Bitmap fonts
 * typically perform very well), and will take care of all spacing/wordwrap/alignment issues for us!
 * The drawback is that it doesn't support dynamic images -- you're limited to a preselected number of
 * images, and adding a new one involves re-generating the bitmap font. This should be an acceptable
 * tradeoff since the most common use-case for games is to embed a limited number of game related glyphs
 * alongside text for things like tooltips and tutorials.
 */
export default class UIBitmapText extends Phaser.BitmapText {
    // Tokens are a map of user strings to charcodes
    // We provide some defaults so that we don't have to supply them every time.
    // The idea is to use rare/high charCodes to avoid collisions.
    private static DEFAULT_TOKENS = {
        ':dollar:': 1001,
        ':heart:': 1002
    };

    constructor(
        game: Phaser.Game,
        x: number,
        y: number,
        font: string,
        text?: string,
        size?: number,
        align?: string,
        public tokenMap?: { [index: string]: number }
    ) {
        super(game, x, y, font, text, size, align);
    }

    public updateText(): void {
        if (!this.tokenMap)
            this.tokenMap = UIBitmapText.DEFAULT_TOKENS;
        Object.keys(this.tokenMap).forEach(token => {
            this.text = this.text.replace(token, this.getCharForToken(token))
        });
        super.updateText();
    }

    /**
     * Given a token, this will use our tokenMap to generate a single
     * character from its charCode.
     */
    private getCharForToken(token: string): string {
        return token in this.tokenMap
            ? String.fromCharCode(this.tokenMap[token])
            : " ";
    }
}