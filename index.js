function s1(){
    let color = document.querySelectorAll('.color')

    color.forEach(color=>{
        color.style.color='red';
    })
}
function s2(option){
    let image = document.querySelectorAll('.image')
    if (option.shadow_type === 'hard') {
        option.shadow_type = '0px'
    }
    else {
        option.shadow_type = '20px'
    }
    image.forEach(image=>{
        image.style.boxShadow='10px 10px 10px rgba(0,0,0,0.5)';
        image.style.padding='10px';
    })
}
module.exports.s2=s2;