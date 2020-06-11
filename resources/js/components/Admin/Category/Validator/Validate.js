import {rus as LanguageRus} from "../../Language";

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = LanguageRus.page.categories.error.name;
    }
    return errors
}

export default validate
