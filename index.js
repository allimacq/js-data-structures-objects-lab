// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver, {[key]: undefined});
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    return driver = Object.assign(driver, {[key]: undefined});
}