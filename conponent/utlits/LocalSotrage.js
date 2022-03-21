const store = (id) => {
    let shopingCard;

    const storedCaard = localStorage.getItem('shoping-card');
    if(storedCaard){
        shopingCard = JSON.parse(storedCaard);
    }
    else{
        shopingCard ={};
    }


    const quantity = shopingCard[id];
    if (quantity) {
        const nw = +quantity +1;
        shopingCard[id] =nw
    } else {
        shopingCard[id] =1
    }
    localStorage.setItem('shoping-card', JSON.stringify(shopingCard))

}

export {
    store
}