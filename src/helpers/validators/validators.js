export const required = value => {
    if (value) return undefined;
    return "Field is required"
}

export const maxLengthCreator = (maxLenght) => (value) => {
    if(value.length > maxLenght) return `Max lenght is ${maxLenght} sybmols`;
    return undefined
}