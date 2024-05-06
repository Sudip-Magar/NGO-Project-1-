
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
let amttop1 = document.querySelector('.samttop1')
let amttop2 = document.querySelector('.samttop2')
let amttop3 = document.querySelector('.samttop3')
let amttop4 = document.querySelector('.samttop4')



amttop1.addEventListener('click', () => {
    document.querySelector('.changedtop').value = '100'
    document.querySelector('.clef').innerText = '100'
});
amttop2.addEventListener('click', () => {
    document.querySelector('.changedtop').value = '500'
    document.querySelector('.clef').innerText = '500'
});
amttop3.addEventListener('click', () => {
    document.querySelector('.changedtop').value = '1000'
    document.querySelector('.clef').innerText = '1000'
});
amttop4.addEventListener('click', () => {
    document.querySelector('.changedtop').value = '';
});

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



//donate ending




let bar = document.querySelector('.bar')
let cross = document.querySelector('.cross')


let give = document.querySelector('.gbox');
let gcross = document.querySelector('.gcross')





//contain popup
let bo1 = document.querySelector('.bo1')
let bo2 = document.querySelector('.bo2')
let bo3 = document.querySelector('.bo3')
let bo4 = document.querySelector('.bo4')
let bo5 = document.querySelector('.bo5')
let bo6 = document.querySelector('.bo6')
let cross1 = document.querySelector('.cross1')
let cross2 = document.querySelector('.cross2')
let cross3 = document.querySelector('.cross3')
let cross4 = document.querySelector('.cross4')
let cross5 = document.querySelector('.cross5')
let cross6 = document.querySelector('.cross6')




bo1.addEventListener('click', () => {
    document.querySelector('.d2').classList.remove('show')

})
cross1.addEventListener('click', () => {
    document.querySelector('.d2').classList.add('show')
})



bo2.addEventListener('click', () => {
    document.querySelector('.d3').classList.remove('show')

})
cross2.addEventListener('click', () => {
    document.querySelector('.d3').classList.add('show')
})



bo3.addEventListener('click', () => {
    document.querySelector('.d4').classList.remove('show')

})
cross3.addEventListener('click', () => {
    document.querySelector('.d4').classList.add('show')
})




bo4.addEventListener('click', () => {
    document.querySelector('.d5').classList.remove('show')

})
cross4.addEventListener('click', () => {
    document.querySelector('.d5').classList.add('show')
})



bo5.addEventListener('click', () => {
    document.querySelector('.d6').classList.remove('show')

})
cross5.addEventListener('click', () => {
    document.querySelector('.d6').classList.add('show')
})



bo6.addEventListener('click', () => {
    document.querySelector('.d7').classList.remove('show')

})
cross6.addEventListener('click', () => {
    document.querySelector('.d7').classList.add('show')
})



//contain donation ended

bar.addEventListener('click', () => {
    document.querySelector('.menus').style.right = '0'
    document.querySelector('.menus').style.transition = '0.4s'
});

cross.addEventListener('click', () => {
    document.querySelector('.menus').style.right = '-900px'
    document.querySelector('.menus').style.transition = '0.4s'

});

//donation

give.addEventListener('click', () => {
    document.querySelector('.d1').classList.remove('show')

})

gcross.addEventListener('click', () => {
    document.querySelector('.d1').classList.add('show')
})

//for radio

let offline1 = document.querySelector('.off1')
let online1 = document.querySelector('.on1')

let offline2 = document.querySelector('.off2')
let online2 = document.querySelector('.on2')

let offline3 = document.querySelector('.off3')
let online3 = document.querySelector('.on3')

let offline4 = document.querySelector('.off4')
let online4 = document.querySelector('.on4')

let offline5 = document.querySelector('.off5')
let online5 = document.querySelector('.on5')

let offline6 = document.querySelector('.off6')
let online6 = document.querySelector('.on6')

let offline7 = document.querySelector('.off7')
let online7 = document.querySelector('.on7')


////////////////////////////////////////////////////////////////////////////
offline1.addEventListener('click', () => {
    document.querySelector('.offl1').classList.remove('show')
    document.querySelector('.credit1').classList.add('show')


})
online1.addEventListener('click', () => {
    document.querySelector('.credit1').classList.remove('show')
    document.querySelector('.offl1').classList.add('show')


})

////////////////////////////////////////////////////////////////////////////

offline2.addEventListener('click', () => {
    document.querySelector('.offl2').classList.remove('show')
    document.querySelector('.credit2').classList.add('show')


})
online2.addEventListener('click', () => {
    document.querySelector('.credit2').classList.remove('show')
    document.querySelector('.offl2').classList.add('show')


})
////////////////////////////////////////////////////////////////////////////

offline3.addEventListener('click', () => {
    document.querySelector('.offl3').classList.remove('show')
    document.querySelector('.credit3').classList.add('show')


})
online3.addEventListener('click', () => {
    document.querySelector('.credit3').classList.remove('show')
    document.querySelector('.offl3').classList.add('show')


})
////////////////////////////////////////////////////////////////////////////

offline4.addEventListener('click', () => {
    document.querySelector('.offl4').classList.remove('show')
    document.querySelector('.credit4').classList.add('show')


})
online4.addEventListener('click', () => {
    document.querySelector('.credit4').classList.remove('show')
    document.querySelector('.offl4').classList.add('show')


})
////////////////////////////////////////////////////////////////////////////

offline5.addEventListener('click', () => {
    document.querySelector('.offl5').classList.remove('show')
    document.querySelector('.credit5').classList.add('show')


})
online5.addEventListener('click', () => {
    document.querySelector('.credit5').classList.remove('show')
    document.querySelector('.offl5').classList.add('show')


})
////////////////////////////////////////////////////////////////////////////


offline6.addEventListener('click', () => {
    document.querySelector('.offl6').classList.remove('show')
    document.querySelector('.credit6').classList.add('show')


})
online6.addEventListener('click', () => {
    document.querySelector('.credit6').classList.remove('show')
    document.querySelector('.offl6').classList.add('show')


})
////////////////////////////////////////////////////////////////////////////


offline7.addEventListener('click', () => {
    document.querySelector('.offl7').classList.remove('show')
    document.querySelector('.credit7').classList.add('show')


})
online7.addEventListener('click', () => {
    document.querySelector('.credit7').classList.remove('show')
    document.querySelector('.offl7').classList.add('show')


})
////////////////////////////////////////////////////////////////////////////



//value add
let amt1 = document.querySelector('.samt1')
let amt2 = document.querySelector('.samt2')
let amt3 = document.querySelector('.samt3')
let amt4 = document.querySelector('.samt4')



amt1.addEventListener('click', () => {
    document.querySelector('.changed1').value = '100'
    document.querySelector('.clef').innerText = '100'
});
amt2.addEventListener('click', () => {
    document.querySelector('.changed1').value = '500'
    document.querySelector('.clef').innerText = '500'
});
amt3.addEventListener('click', () => {
    document.querySelector('.changed1').value = '1000'
    document.querySelector('.clef').innerText = '1000'
});
amt4.addEventListener('click', () => {
    document.querySelector('.changed1').value = '';
});


let amta1 = document.querySelector('.samta1')
let amta2 = document.querySelector('.samta2')
let amta3 = document.querySelector('.samta3')
let amta4 = document.querySelector('.samta4')



amta1.addEventListener('click', () => {
    document.querySelector('.changed2').value = '100'
    document.querySelector('.clef').innerText = '100'
});
amta2.addEventListener('click', () => {
    document.querySelector('.changed2').value = '500'
    document.querySelector('.clef').innerText = '500'
});
amta3.addEventListener('click', () => {
    document.querySelector('.changed2').value = '1000'
    document.querySelector('.clef').innerText = '1000'
});
amta4.addEventListener('click', () => {
    document.querySelector('.changed2').value = '';
});


let amtb1 = document.querySelector('.samtb1')
let amtb2 = document.querySelector('.samtb2')
let amtb3 = document.querySelector('.samtb3')
let amtb4 = document.querySelector('.samtb4')



amtb1.addEventListener('click', () => {
    document.querySelector('.changed3').value = '100'
    document.querySelector('.clef').innerText = '100'
});
amtb2.addEventListener('click', () => {
    document.querySelector('.changed3').value = '500'
    document.querySelector('.clef').innerText = '500'
});
amtb3.addEventListener('click', () => {
    document.querySelector('.changed3').value = '1000'
    document.querySelector('.clef').innerText = '1000'
});
amtb4.addEventListener('click', () => {
    document.querySelector('.changed3').value = '';
});


let amtc1 = document.querySelector('.samtc1')
let amtc2 = document.querySelector('.samtc2')
let amtc3 = document.querySelector('.samtc3')
let amtc4 = document.querySelector('.samtc4')



amtc1.addEventListener('click', () => {
    document.querySelector('.changed4').value = '100'
    document.querySelector('.clef').innerText = '100'
});
amtc2.addEventListener('click', () => {
    document.querySelector('.changed4').value = '500'
    document.querySelector('.clef').innerText = '500'
});
amtc3.addEventListener('click', () => {
    document.querySelector('.changed4').value = '1000'
    document.querySelector('.clef').innerText = '1000'
});
amtc4.addEventListener('click', () => {
    document.querySelector('.changed4').value = '';
});


let amtd1 = document.querySelector('.samtd1')
let amtd2 = document.querySelector('.samtd2')
let amtd3 = document.querySelector('.samtd3')
let amtd4 = document.querySelector('.samtd4')



amtd1.addEventListener('click', () => {
    document.querySelector('.changed5').value = '100'
    document.querySelector('.clef').innerText = '100'
});
amtd2.addEventListener('click', () => {
    document.querySelector('.changed5').value = '500'
    document.querySelector('.clef').innerText = '500'
});
amtd3.addEventListener('click', () => {
    document.querySelector('.changed5').value = '1000'
    document.querySelector('.clef').innerText = '1000'
});
amtd4.addEventListener('click', () => {
    document.querySelector('.changed5').value = '';
});


let amte1 = document.querySelector('.samte1')
let amte2 = document.querySelector('.samte2')
let amte3 = document.querySelector('.samte3')
let amte4 = document.querySelector('.samte4')



amte1.addEventListener('click', () => {
    document.querySelector('.changed6').value = '100'
    document.querySelector('.clef').innerText = '100'
});
amte2.addEventListener('click', () => {
    document.querySelector('.changed6').value = '500'
    document.querySelector('.clef').innerText = '500'
});
amte3.addEventListener('click', () => {
    document.querySelector('.changed6').value = '1000'
    document.querySelector('.clef').innerText = '1000'
});
amte4.addEventListener('click', () => {
    document.querySelector('.changed6').value = '';
});


let amtf1 = document.querySelector('.samtf1')
let amtf2 = document.querySelector('.samtf2')
let amtf3 = document.querySelector('.samtf3')
let amtf4 = document.querySelector('.samtf4')



amtf1.addEventListener('click', () => {
    document.querySelector('.changed7').value = '100'
    document.querySelector('.clef').innerText = '100'
});
amtf2.addEventListener('click', () => {
    document.querySelector('.changed7').value = '500'
    document.querySelector('.clef').innerText = '500'
});
amtf3.addEventListener('click', () => {
    document.querySelector('.changed7').value = '1000'
    document.querySelector('.clef').innerText = '1000'
});
amtf4.addEventListener('click', () => {
    document.querySelector('.changed7').value = '';
});






