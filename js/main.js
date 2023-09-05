const form = document.querySelector('.formulario')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const weight = document.querySelector('#input-weight').value;
    const height = document.querySelector('#input-height').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.querySelector('.value');
    let description = '';

    value.classList.add('attention');

    document.querySelector('#infos').classList.remove('hidden')

    const level = [
        'Muito abaixo do peso',
        'Abaixo do peso',
        'Peso normal',
        'Acima do peso',
        'Obesidade I',
        'Obesidade II (Severa)',
        'Obesidade III (Mórbida)'
    ]

    if(imc <= 17){
        description = level[0];
        value.classList.remove('value-good');
    }
    if(imc > 17 && imc <= 18.49){
        description = level[1];
        value.classList.remove('value-good');
    }
    if(imc > 18.50 && imc <= 24.99){
        description = level[2];
        value.classList.remove('attention');
        value.classList.add('value-good');
    }
    if(imc > 25 && imc <= 29.99){
        description = level[3];
        value.classList.remove('value-good');
    }
    if(imc > 30 && imc <= 34.99){
        description = level[4];
        value.classList.remove('value-good');
    }
    if(imc > 35 && imc <= 39.99){
        description = level[5]
        value.classList.remove('value-good');
    }
    if(imc > 40){
        description = level[6];
        value.classList.remove('value-good');
    }

    value.textContent = imc.replace('.' , ',');
    document.querySelector('.description').textContent = description;
})