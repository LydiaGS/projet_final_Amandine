var parag = document.getElementById("parag");
var monpara = document.getElementById("monpara");
var monpara2 = document.getElementById('monpara2')


parag.addEventListener('mouseover',function handleMouseOver(){
    monpara.style.display = 'none';
});

parag.addEventListener('mouseout',function handleMouseOver(){
   monpara.style.display = 'block';
})


parag.addEventListener('mouseover',function handleMouseOver(){
    monpara2.style.display = 'block';
});

parag.addEventListener('mouseout',function handleMouseOver(){
   monpara2.style.display = 'none';
})


