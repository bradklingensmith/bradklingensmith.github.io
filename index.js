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
const FURNACE = 1;

const IRON_ORE = 'Iron Ore'
const COPPER_ORE = 'Copper Ore'
const IRON_PLATE = 'Iron plate'
const COPPER_PLATE = 'Copper Plate'
const IRON_GEAR_WHEEL = 'Iron gear wheel'
const TRANSPORT_BELT = 'Transport belt'
const AUTOMATION_SCIENCE_PACK = 'Automation science pack'

items = [
    new Item(IRON_ORE, []),
    new Item(COPPER_ORE, []),
    new Item(IRON_PLATE, []),
    new Item(COPPER_PLATE, []),
    new Item(IRON_GEAR_WHEEL, ['Gear wheel', 'Gear']),
    new Item(TRANSPORT_BELT, ['Yellow belt', 'Slow belt']),
    new Item(AUTOMATION_SCIENCE_PACK, ['Red Science'])
]

recipes = [
    new Recipe([new QItem(IRON_ORE, 1)], [new QItem(IRON_PLATE, 1)], 3.2, true, FURNACE),
    new Recipe([new QItem(COPPER_ORE, 1)], [new QItem(COPPER_PLATE, 1)], 3.2, true, FURNACE),
    new Recipe([new QItem(IRON_PLATE, 2)], [new QItem(IRON_GEAR_WHEEL, 1)], 0.5, true, ASSEMBLING_MACHINE),
    new Recipe([new QItem(IRON_PLATE, 1), new QItem(IRON_GEAR_WHEEL, 1)], [new QItem(TRANSPORT_BELT, 2)], 0.5, true, ASSEMBLING_MACHINE),
    new Recipe([new QItem(COPPER_PLATE, 1), new QItem(IRON_GEAR_WHEEL, 1)], [new QItem(AUTOMATION_SCIENCE_PACK, 1)], 5, true, ASSEMBLING_MACHINE)
]

function DisplayHelloAlert()
{
    alert('Hello');
}