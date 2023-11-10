export const isValidInput = (input: Element | RadioNodeList | null) =>{
    return input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement
}

export const isValidName = (name: string) => {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if(!name || !regex.test(name) || !name.trim()) return false
    return true
}