// broswer-janela | html | buscar | 

/*evento coracao*/

const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick(){
    console.log("oi");
}

/*evento adicionar no carrinho*/

const $second = window.document.querySelector(".-second");

$second.addEventListener("click", handleClick);

function handleClick(){
    console.log("adicionar ao carrinho");
}