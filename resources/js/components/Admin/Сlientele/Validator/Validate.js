import {rus as LanguageRus} from "../../Language";

const validate = (values, allValues, props) => {

    const errors = {}

    if (!values.name) {
        errors.name = LanguageRus.page.clientele.error.name;
    }
    if (!values.email) {
        errors.email = LanguageRus.page.clientele.error.email;
    }
    if (!values.phone) {
        errors.phone = LanguageRus.page.clientele.error.phone;
    }
    if (allValues.form == 'OptionNew') {
        if (!values.password) {
            errors.password = LanguageRus.page.clientele.error.password;
        }
    }

    return errors;

}

export default validate;
