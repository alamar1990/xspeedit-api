const MAX_ITEMS_PER_BOX = 3;
const BOX_CAPACITY = 10;


class Xspeedit {
    constructor() {
        this.boxes = [];
    }

    processItems(items){
        // Clean and convert the items string into an array
        let arrayItems = this.getCleanNumbersArray(items)
        // Get a reversed sorted array for getting a greater item first
        arrayItems = this.reverseSortItems(arrayItems)

        while (arrayItems.length > 0){
            this.boxes.push(this.fillABox(arrayItems))
        }
        return this.boxes
    }

    fillABox(items){
        if (!Array.isArray(items)) return;
        // Put the first greater item for getting a reference
        const firstItem = items.shift()
        let box = []
        box.push(firstItem + '')
        while (this.weighBox(box) <= BOX_CAPACITY && items.length > 0 && box.length < MAX_ITEMS_PER_BOX) {
            const nearestFitItem = BOX_CAPACITY - firstItem
            const itemFound = this.searchNearestValueToMax(nearestFitItem, items)
            box.push(itemFound + '')
        }
        return box.join('')
    }

    getCleanNumbersArray (input) {
        if (!input || typeof input === 'number' ) return [];
        // Regex-process string for leaving just numbers from 1 to 9
        const nonZerosInput = input.replace(/([^1-9]+)/g, '');
        // Return an array of these numbers
        return nonZerosInput.split('').map((number) => parseInt(number));
    }

    searchNearestValueToMax (nearestItemValue, items) {
        if (!Array.isArray(items) || typeof nearestItemValue !== 'number' ) return;
        while (nearestItemValue > 0) {
            if (items.indexOf(nearestItemValue) !== -1) {
                items.splice(items.indexOf(nearestItemValue), 1);
                return nearestItemValue;
            }
            --nearestItemValue
        }
    }

    reverseSortItems(items) {
        return Array.isArray(items) ? items.sort((a, b) => b - a) : null;
    }

    weighBox(box){
        return Array.isArray(box) ? box.reduce((a, b) => a + b, 0) : null;
    }

}

module.exports = Xspeedit;