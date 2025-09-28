// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('DOMContentLoaded', function () {
    var filterDropdown = document.getElementById('colorblindFilter');
    if (filterDropdown) {
        filterDropdown.addEventListener('change', function () {
            document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia', 'achromatopsia');
            if (this.value) {
                document.body.classList.add(this.value);
            }
        });
    }
});

const masonryGrid = document.getElementById('masonry-grid');
const masonryItems = document.getElementById('masonry-item');

function resizeGridItem(item) {
    const img = item.querySelector('img');
    const rowHeight = 10;
    const rowGap = 20;

    if (img.complete) {
        const height = item.getBoundingClientRect().height;
        const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
        item.style.gridRow = `span ${rowSpan}`;
    }
}

function resizeAllGridItems() {
    masonryItems.forEach(resizeGridItem);
}

// Initial layout
window.addEventListener('load', () => {
    masonryItems.forEach(item => {
        const img = item.querySelector('img');
        if (img.complete) {
            resizeGridItem(item);
        }
        img.addEventListener('load', () => resizeGridItem(item));
    });
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeAllGridItems, 250);
});
