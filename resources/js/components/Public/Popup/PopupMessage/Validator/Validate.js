import {rus as LanguageRus} from "../../../../Admin/Language";

const validate = (values, allValues, props) => {

    const errors = {}

    if (!values.login) {
        errors.login = LanguageRus.page.messages.error.message;
    }
    return errors;

}

export default validate;
