const carros = []

const inModelo = document.getElementById('inModelo');
const inPreco = document.getElementById('inPreco');

const outLista = document.getElementById('outLista')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnFiltrar = document.getElementById('btnFiltrar')

const adicionarCarro = () =>{
    const modelo = inModelo.value;
    const preco = Number(inPreco,value);

    if(modelo === '' || preco <= 0 || isNaN(preco)){
        alert('Informe os dados corretamente');
        inModelo.focus();
        return;
    }

    carros.push({modelo: modelo, preco: preco});
    console.log(carros);
    inModelo.value = "";
    inPreco.value = "";
};

btnAdicionar.addEventListener('click', adicionarCarro);

const listarCarros = () => {
    if(carros.length === 0){
        alert('Não tem carros cadastrados');
        inModelo.focus();
        return;
    }

    let lista = "";
    carros.forEach((carro) => {
        return(lista += `${carro.modelo} --- ${carro.preco} \n`)
    });

    outLista.textContent = lista

}
btnListar.addEventListener('click', listarCarros);

const filtrarPreco = () => {
    //filter , forEach
    const maximo = Number(prompt('ul o valor máximo que cliente deseja pagar'));

    if(maximo === 0 || isNaN(maximo)){
        alert('Por favor, Preencha os dados corretamente');
        return;
    }

    const carrosFiltrados = carros.filter((carro)=>{
        return carro.preco <= maximo;
    });

    let lista = "";
    carrosFiltrados.forEach((carro) => {
        return (lista += `${}`)
    })

};
btnFiltrar.addEventListener('click', filtrarPreco);