let bar = document.querySelector('.bar')
let cross = document.querySelector('.cross')

bar.addEventListener('click', () => {
    document.querySelector('.menus').style.right = '0'
    document.querySelector('.menus').style.transition = '0.4s'
});

cross.addEventListener('click', () => {
    document.querySelector('.menus').style.right = '-900px'
    document.querySelector('.menus').style.transition = '0.4s'

});






//donate

//hide and display
let bo7 = document.querySelector('.bo7')
let cross7 = document.querySelector('.cross7')

bo7.addEventListener('click', () => {
    document.querySelector('.d7').classList.remove('show')

})
cross7.addEventListener('click', () => {
    document.querySelector('.d7').classList.add('show')
})
//hide and display ending

//for samounttop
function samt1(){
    document.querySelector('.changed2').value='100'
}
function samt2(){
    document.querySelector('.changed2').value='500'
}
function samt3(){
    document.querySelector('.changed2').value='1000'
}
function samt4(){
    document.querySelector('.changed2').value=''
}



//samoutntop ending

//payment method

let offtop=document.querySelector('.offtop')
let ontop=document.querySelector('.ontop')

offtop.addEventListener('click', () => {
    document.querySelector('.offltop').classList.remove('show')
    document.querySelector('.credittop').classList.add('show')


})
ontop.addEventListener('click', () => {
    document.querySelector('.credittop').classList.remove('show')
    document.querySelector('.offltop').classList.add('show')


})

//payment method ending



//donate

//hide and display



//payment method ending


