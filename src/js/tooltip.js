export default class Tooltip {
    constructor() {
        this.button = document.querySelector('.button');
        this.popover = document.querySelector('.popover');
    }

    onButtonClick() {
        this.button.addEventListener('click', () => {
            this.popover.classList.toggle('active');
        })
    }
}