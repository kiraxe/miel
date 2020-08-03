import {rus as LanguageRus} from "../../Language";

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = LanguageRus.page.products.error.name;
    }
    if (!values.name) {
        errors.article = LanguageRus.page.products.error.article;
    }
    if (!values.detail) {
        errors.detail = LanguageRus.page.products.error.detail;
    }

    if (!values.article) {
        errors.article = LanguageRus.page.products.error.article;
    }

    if (!values.price_quarterly) {
        errors.price_quarterly = LanguageRus.page.products.error.price_quarterly;
    }
    if (!values.price) {
        errors.price = LanguageRus.page.products.error.price;
    }
    if (!values.price_second) {
        errors.price_second = LanguageRus.page.products.error.price_second;
    }
    if (!values.price_third) {
        errors.price_third = LanguageRus.page.products.error.price_third;
    }

    if (!values.min_quarterly) {
        errors.min_quarterly = LanguageRus.page.products.error.min_quarterly;
    }
    if (!values.min) {
        errors.min = LanguageRus.page.products.error.min;
    }
    if (!values.min_second) {
        errors.min_second = LanguageRus.page.products.error.min_second;
    }
    if (!values.min_third) {
        errors.min_third = LanguageRus.page.products.error.min_third;
    }
    return errors
}

export default validate
