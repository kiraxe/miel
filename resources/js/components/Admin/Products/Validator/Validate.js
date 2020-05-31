import {rus as LanguageRus} from "../../Language";

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = LanguageRus.page.products.error.name;
    }
    if (!values.detail) {
        errors.detail = LanguageRus.page.products.error.detail;
    }
    if (!values.price) {
        errors.price = LanguageRus.page.products.error.price;
    }
    return errors
}

export default validate
