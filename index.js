class Item {
    constructor(name, aliases) {
        this.name = name
        this.aliases = aliases
    }
}

// Short for QuantitiedItem. We're going to type this a ton of times so I'm shortening the name
class QItem {
    constructor(name, quantity) {
        self.name = name
        self.quantity = quantity
    }
}

class Recipe {
    constructor(inputItems, outputItems, duration, canUseProductivity, machineType) {
        self.inputItems = inputItems
        self.outputItems = outputItems
        self.duration = duration
        self.canUseProductivity = canUseProductivity
        self.machineType = machineType
    }
}

const ASSEMBLING_MACHINE = 0;

items = [
    new Item('Copper Plate', []),
    new Item('Iron gear wheel', ['Gear wheel', 'Gear']),
    new Item('Automation science pack', ['Red Science'])
]

recipes = [
    new Recipe([new QItem('Copper Plate', 1), new QItem('Iron gear wheel', 1)],  [new QItem('Automation science pack', 1)], 5, true, ASSEMBLING_MACHINE)
]

function DisplayHelloAlert()
{
    alert('Hello');
}