window.game = window.game || {};

(function() {
    
    /**
     * The reels for the game
     * @class game.Reels
     * @param {PXII.Texture[]} symbolTextures The available symbols
     * @constructor
     */
    var Reels = function(symbolTextures)
    {
        PIXI.Container.call(this);
        
        // Create the signals
        this.spinBeganSignal = new signals.Signal();
        this.spinCompleteSignal = new signals.Signal();

        // Store the symbol textures
        this._symbolTextures = symbolTextures;
    };
    var p = Reels.prototype = Object.create(PIXI.Container.prototype);
    p.constructor = Reels;

    /**
     * Dispatched when the spin has began
     * @type {signals.Signal}
     * @event spinBeganSignal
     */
    p.spinBeganSignal = null;

    /**
     * Dispatched when the spin has completed
     * @type {signals.Signal}
     * @event spinCompleteSignal
     */
    p.spinCompleteSignal = null;

    /**
     * The states of the button
     * @type {object}
     * @private
     */
    p._symbolTextures = null;

    /**
     * Start the reel spin
     */
    p.startSpin = function()
    {
        
    };

    /**
     * Stop the reel spin
     */
    p.stopSpin = function()
    {
        
    };

    window.game.Reels = Reels;

})();