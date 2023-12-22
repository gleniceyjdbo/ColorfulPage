function changeButtonColor() {
    const button = document.querySelector('.pulse-button');
    const currentColor = button.style.backgroundColor;

    // Function to convert hex to RGB
    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to calculate opposite color
    function calculateOppositeColor(color) {
        const rgbColor = hexToRgb(color);
        const oppositeColor = rgbColor
            .split(', ')
            .map(c => 255 - parseInt(c, 10))
            .join(', ');

        return `rgb(${oppositeColor})`;
    }

    const oppositeColor = calculateOppositeColor(currentColor);
    button.style.backgroundColor = oppositeColor;
}
