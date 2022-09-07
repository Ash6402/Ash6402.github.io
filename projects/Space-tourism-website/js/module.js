async function getNav(file){
    let obj = await fetch(file);
    let text = await obj.text();
    let header = document.querySelector('header');
    header.innerHTML = text;

}

export default getNav;