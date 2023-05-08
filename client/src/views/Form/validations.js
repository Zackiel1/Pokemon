function validations (userData) {
    let error = {}   

    const regexName = /^[a-zA-Z]{3,}$/; 

    if(!userData.name){   
        error.name = 'Please fill this field.';
    }else if(!regexName.test(userData.name)){
        error.name = 'Only letters aA-zZ and greater than 2 characters are accepted.';
    }

    if(userData.life < 1 || userData.life > 400) error.life = 'min: 1 - max: 400.';
    if(userData.attack < 1 || userData.attack > 400) error.attack = 'min: 1 - max: 400.';
    if(userData.defense < 1 || userData.defense > 400) error.defense = 'min: 1 - max: 400..';
    if(userData.type === "") error.type = 'tienes que selectionar un type'
    return error;
}

export default validations;