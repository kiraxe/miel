
const sleep = ms => new Promise(resolve => setTimeout(resolve,ms));

const asyncValidate = (values) => {
    return sleep(1000).then(() => {
        if (['Визитки'].includes(values.name)) {
            throw { name: 'That username is taken' }
        }
    })
}

export default asyncValidate;
