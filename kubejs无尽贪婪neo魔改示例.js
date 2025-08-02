ServerEvents.recipes(event => {
    event.recipes.avaritia.extreme_shaped(
        'acacia_boat', 
        [
            'AAAA',
            'AAAA',
            'AAAA',
            'AAAA'
        ], 
        {
            'A': 'acacia_planks'
        }
    )

    event.recipes.avaritia.extreme_shapeless(
        'oak_door',
        [
            'oak_planks'
        ],
        true
    )

    event.recipes.avaritia.compressor(
        'chest',
        [
            '#minecraft:planks'
        ],
        200
    )
})

