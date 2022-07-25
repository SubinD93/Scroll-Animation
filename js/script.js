const block = document.querySelectorAll('.block')

window.addEventListener('scroll', checkBlock)

checkBlock ()

function checkBlock() {
    const triggerBottom = window.innerHeight / 5 * 4
    

    // block.forEach(b => {
    //     const blockTop = b.getBoundingClientRect().top

    //     if(blockTop < triggerBottom) {
    //         b.classList.add('active')
    //     } else {
    //         b.classList.remove('active')
    //     }
    // })
    for (let i = 0; i < block.length; i++) {
        const blockTop = block[i].getBoundingClientRect().top
        console.log(blockTop);
        if(blockTop < triggerBottom) {
                    block[i].classList.add('active')
            }   else {
                    block[i].classList.remove('active')
            }

        
    }
}