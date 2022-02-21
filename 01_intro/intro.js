const sum = (addend, augend) => {
    if(typeof addend !== 'number' || typeof augend !== 'number'){
        throw 'Значения передаваемые в качестве аргументов функции должны иметь тип "number".'
    }

    return addend + augend;
}

console.log(sum(40, 2));