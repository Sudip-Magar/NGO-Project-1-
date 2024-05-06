let bar = document.querySelector('.bar')
let cross = document.querySelector('.cross')
let amt1 = document.querySelector('.amt1')
let amt2 = document.querySelector('.amt2')
let amt3 = document.querySelector('.amt3')
let amt4 = document.querySelector('.amt4')

bar.addEventListener('click', () => {
    document.querySelector('.menus').style.right = '0'
    document.querySelector('.menus').style.transition = '0.4s'
});

cross.addEventListener('click', () => {
    document.querySelector('.menus').style.right = '-900px'
    document.querySelector('.menus').style.transition = '0.4s'

});


amt1.addEventListener('click', () => {
    document.querySelector('.changed').value = '100'
});
amt2.addEventListener('click', () => {
    document.querySelector('.changed').value = '500'
});
amt3.addEventListener('click', () => {
    document.querySelector('.changed').value = '1000'
});
amt4.addEventListener('click', () => {
    document.querySelector('.changed').value = '';
});





//donate

//hide and display
let bo7 = document.querySelector('.bo7')
let cross7 = document.querySelector('.cross7')
let bo2 = document.querySelector('.bo2')

bo7.addEventListener('click', () => {
    document.querySelector('.d7').classList.remove('show')

})
cross7.addEventListener('click', () => {
    document.querySelector('.d7').classList.add('show')
})
bo2.addEventListener('click',()=>{
    document.querySelector('.d7').classList.remove('show')
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



//volunteer

//hide and display
let volclick=document.querySelector('.volclick')
let cross2=document.querySelector('.cross2')

volclick.addEventListener('click',()=>{
    document.querySelector('.d3').classList.remove('show')
})
cross2.addEventListener('click',()=>{
    document.querySelector('.d3').classList.add('show')
})

//payment method ending


