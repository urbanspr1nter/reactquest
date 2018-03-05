#Roger Ngo's SillyTileEngine Development Guide

## Map Data Structure
The Map data structure is a `map` object that is 
structured like so:

* key: the JS object name
* value:
    ```
    {
        playerPosition: {},
        itemLocations: [],
        environmentLocations: [],
    }
    ```
    
The `playerPosition` is a `Object` that is structured like
the following:
```
{
    left: 0,
    top: 0
}
```

Where `left` is the X-coordinate offset and `top` is the Y-coordinate offset.

The `itemLocations` consists of an array of objects that has the following structure:
```
{
    name: 'item-id-string',
    left: 0,
    top: 0,
    assetPath: './assets/path.png',
    type: 'textual description',
    valid: true,
    handler: (e, component) => {
        // handler function
    }
}
```

The `name` will be the ID of the DOM element that will be rendered onto the screen
with the given graphic defined in `assetPath`. The `type` property is 
the textual description that is used for log appending. The `valid` property 
indicates whether the item is valid to be rendered and handled upon user interaction. 

Finally, the `handler` property is a function that takes in the event, and the `React.Component` 
to perform actions in which user triggered.

The `environmentLocations` property consists of an array of objects that indicates tiles 
which should be placed onto the map.

The structure is like the following:
```
{
    left: 0,
    top: 0,
    assetPath: './assets/path.png',
    layer: 0,
    warpTo: 'MapNameToWarpTo',
    playerPosition: {
        left: 0,
        top: 0
    }
}
```

The `layer` property defines the layer in which this environment unit should be placed 
relative to the player. The game defines Player to be at layer 0. Any layer below the player 
will show under the player, while layer numbers greater than 0 will be placed above. This allows 
the engine to detect collisions.

The `warpTo` property defines the map in which the player should be sent to upon the `Action` key being 
pressed. The `playerPosition` is the position in which the player will be placed upon map-warp.

