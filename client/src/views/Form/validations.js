function validations (userData) {
    let error = {}   

    const regexName = /^[a-zA-Z]{3,}$/; 

    if(!userData.name){   
        error.name = 'Por favor, complete este campo.';
    }else if(!regexName.test(userData.name)){
        error.name = 'solo se aceptan letras aA-zZ y mayor de 2 caracteres.';
    }

    if(userData.life < 1 || userData.life > 400) error.life = 'min: 1 - max: 400.';
    if(userData.attack < 1 || userData.attack > 400) error.attack = 'min: 1 - max: 400.';
    if(userData.defense < 1 || userData.defense > 400) error.defense = 'min: 1 - max: 400..';
    if(userData.type === "") error.type = 'tienes que selectionar un type'
    return error;
}

export default validations;