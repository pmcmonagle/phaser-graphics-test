(window as any).PIXI = require('phaser-ce/build/custom/pixi');
(window as any).p2 = require('phaser-ce/build/custom/p2');
(window as any).Phaser = require('phaser-ce/build/custom/phaser-split');

import Boot from './states/Boot';
import Preload from './states/Preload';
import Title from './states/Title';
import SpritesDemo from './states/SpritesDemo';
import InlineImageDemo from './states/InlineImageDemo';
import ParticlesDemo from './states/ParticlesDemo';

const
    width = 1280,
    height = 720,
    renderMode = Phaser.AUTO,
    container = '',
    game = new Phaser.Game(width, height, renderMode, container);

game.state.add('boot', Boot);
game.state.add('preload', Preload);
game.state.add('title', Title);
game.state.add('spritesDemo', SpritesDemo);
game.state.add('inlineImageDemo', InlineImageDemo);
game.state.add('particlesDemo', ParticlesDemo);

game.state.start('boot');
