import {rus as LanguageRus} from "../../../../Admin/Language";

const validate = (values, allValues, props) => {

    const errors = {}

    if (!values.login) {
        errors.login = LanguageRus.page.clientele.error.login;
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
    if (!values.password) {
        errors.password = LanguageRus.page.clientele.error.password;
    }

    if (!values.addressK) {
        errors.addressK = LanguageRus.page.clientele.error.addressK;
    }

    if (!values.addressP) {
        errors.addressP = LanguageRus.page.clientele.error.addressP;
    }

    if (!values.company) {
        errors.company = LanguageRus.page.clientele.error.company;
    }


    return errors;

}

export default validate;
