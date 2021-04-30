const nums = document.querySelectorAll ('nums span')
const counter = document.querySelector('.counter')
const finalMassage = document.querySelector('.final')
const reply = document.querySelector('#reply')

runAnimation() 

function runAnimation () {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animation', (e) => {
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            }
        })
    })
}