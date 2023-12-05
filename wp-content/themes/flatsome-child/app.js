document.querySelectorAll('.btn_menu').forEach((el) => {
    el.addEventListener('click', function () {
        const elSameLvl = this.parentNode.querySelector('.shopit-show-cats').style
        if (elSameLvl.display == 'block') {
            elSameLvl.display = "none";
        } else {
            elSameLvl.display = 'block'
        }
    })
})