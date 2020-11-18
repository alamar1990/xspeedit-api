const MAX_ITEMS_PER_BOX = 3;
const BOX_CAPACITY = 10;


class Xspeedit {
    constructor(inputString) {
        this.boxes = []
        this.boxCount = 0
        this.boxString = this.processItems(inputString)
    }

    getBoxCount () {
        return this.boxCount;
    }

    getBoxes () {
        return this.boxes;
    }

    getBoxString () {
        return this.boxString;
    }

    processItems(items){
        // Clean and convert the items string into an array
        let arrayItems = this.getCleanNumbersArray(items)
        let boxes = []
        while (arrayItems.length > 0){
            boxes.push(this.fillABox(arrayItems))
        }
        this.boxes = boxes
        this.boxCount = boxes.length
        return boxes.map(x => x + '/').join('');
    }

    fillABox(items){
        if (!Array.isArray(items)) return;
        const firstItem = items.shift()
        let isReachedMaxium = false
        let box = []
        box.push(firstItem + '')
        let boxWeight = this.weighBox(box)
        while (!isReachedMaxium && items.length > 0) {
            const itemFound = this.searchNearestValueToMax(firstItem, items)
            if ((itemFound + boxWeight) > BOX_CAPACITY){
                isReachedMaxium = true
                break
            }
            if (box.length >= MAX_ITEMS_PER_BOX){
                isReachedMaxium = true
                break
            }
            if (itemFound) {
                box.push(itemFound + '')
                items.splice(items.indexOf(itemFound), 1); // Pull the item out of array
                boxWeight = this.weighBox(box)
            }

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

    searchNearestValueToMax (currentItem, items) {
        if (!Array.isArray(items) || typeof currentItem !== 'number' ) return;
        let nearestFitItem = BOX_CAPACITY - currentItem
        while (nearestFitItem > 0) {
            if (items.indexOf(nearestFitItem) !== -1) {
                // items.splice(items.indexOf(nearestFitItem), 1);
                return nearestFitItem
            }
            --nearestFitItem
        }
    }

    weighBox(box){
        if(!Array.isArray(box)) return
        let numberArray = box.map((i) => Number(i));
        return numberArray.reduce((a, b) => a + b, 0);
    }
}

module.exports = Xspeedit;