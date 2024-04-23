const slider = document.getElementById('slider-1')
const mainPost = document.getElementById('main-post')

const mainPostHeight = mainPost.scrollHeight
let scrollPercentage;
document.addEventListener('scroll', (e) => {
    let heightDiff = mainPostHeight - window.scrollY
    console.log("Height Diff: ", heightDiff)
    if (heightDiff >= 0) {
        scrollPercentage = 100 - (heightDiff / mainPostHeight) * 100
        console.log(scrollPercentage)
        slider.style.width = scrollPercentage + "%"
    } else {
        slider.style.width = 100 + "%"
    }
})