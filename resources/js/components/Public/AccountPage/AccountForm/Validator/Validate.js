import {rus as LanguageRus} from "../../../../Admin/Language";

const validate = (values, allValues, props) => {

    const errors = {}

    if (!values.login) {
        errors.name = LanguageRus.page.clientele.error.login;
    }
    if (!values.name) {
        errors.name = LanguageRus.page.clientele.error.name;
    }
    if (!values.email) {
        errors.email = LanguageRus.page.clientele.error.email;
    }
    if (!values.phone) {
        errors.phone = LanguageRus.page.clientele.error.phone;
    }

    return errors;

}

export default validate;
