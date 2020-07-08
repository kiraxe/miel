export const getFormData = (elements, method) => {

    let formData = new FormData();


    for(let key in elements) {
        if (key === 'option') {
            formData.append(key, JSON.stringify(elements[key]));
        } else {
            formData.append(key, elements[key]);
        }
    }

    if (method) {
        formData.append('_method', method);
    }

    return formData;
}
