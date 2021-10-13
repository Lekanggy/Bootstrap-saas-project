const select = document.getElementById('category')
const items = document.querySelectorAll('.item')
select.addEventListener("click", function(e){
    let category = e.target.value;
    [...items].forEach((item)=>{
        if(category === 'all'){
            item.classList.remove('d-none')
        }else {
            let itemValue = item.dataset.category;
            if(itemValue !== category){
                item.classList.add('d-none')
            } else {
                item.classList.remove('d-none')
            }
        }
    })
})