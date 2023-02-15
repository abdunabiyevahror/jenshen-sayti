let elNavList = document.querySelector('.nav_list')
console.log();

data.nav.map((item)=>{
    let newli = document.createElement('li')
    newli.textContent = item.titleUZ

    elNavList.appendChild(newli)
})