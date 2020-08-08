import DemoBase from './DemoBase';

/**
 * This demo should create a neat fire effect using no more than 10 sprites on-screen at once.
 * I went with built-in "Arcade" particles instead of ParticleStorm, because a fire effect is
 * on the simpler side of particle effects - it doesn't require physics or anything advanced
 * that ParticleStorm would do a better job of.
 */
export default class ParticlesDemo extends DemoBase {
	public create() {
        super.create();

        const maxParticles = 10,
            minAlpha = 0,
            maxAlpha = 0.8,
            minRotation = 0,
            maxRotation = 0,
            minScale = { x: 2, y: 2 },
            maxScale = { x: 2, y: 4 },
            lifeSpan = 300,
            frequency = 50,
            gravity = new Phaser.Point(0, -2000),
            emitter = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY, maxParticles);
        emitter.makeParticles('fire', Array.apply(null, { length: 64 }).map(Number.call, Number));
        emitter.gravity = gravity;
        emitter.blendMode = Phaser.blendModes.ADD;
        emitter.setAlpha(minAlpha, maxAlpha, lifeSpan, Phaser.Easing.Quadratic.Out);
        emitter.setRotation(minRotation, maxRotation);
        emitter.setScale(minScale.x, maxScale.x, minScale.y, maxScale.y, lifeSpan, Phaser.Easing.Quadratic.Out);

        emitter.start(false, lifeSpan, frequency);
	}
}
