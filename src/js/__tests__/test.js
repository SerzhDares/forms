import Tooltip from '../tooltip'

test('test', () => {
    document.addEventListener('DOMContentLoaded', () => {
        const popover = document.querySelector('.popover');
        const tooltip = new Tooltip();
        tooltip.onButtonClick();
        expect(popover.classList.contains('active')).toEqual(true);
    });
});
