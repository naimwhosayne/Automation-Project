function generateEmail(username) {
    let email = `${username}@gmail.com`;
    return email;
}

function generateUsername(firstName, lastName) {
    let username = `${firstName}${lastName}`;
    return username;
}

function calculateTax(amount) {
    let tax = amount * 0.20;
    return tax;
}

function calculateDiscount(amount) {
    let discount = amount * 0.10;
    let priceAfterDiscount = amount - discount;
    return priceAfterDiscount;
}



console.log(generateEmail("naim.whosayne"));
console.log(generateUsername("Naim", "Adar"));
console.log(calculateTax(100));
console.log(calculateDiscount(100));