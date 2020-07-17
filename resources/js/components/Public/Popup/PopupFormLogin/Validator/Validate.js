import {rus as LanguageRus} from "../../../../Admin/Language";

const validate = (values, allValues, props) => {

    const errors = {}

    if (!values.login) {
        errors.login = LanguageRus.page.clientele.error.login;
    }
    if (!values.password) {
        errors.password = LanguageRus.page.clientele.error.password;
    }

    return errors;

}

export default validate;
