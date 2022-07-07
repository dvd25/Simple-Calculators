function multiply() {
    a = Number(document.my_cal.first.value);
    b = Number(document.my_cal.second.value);
    c = a * b;
    document.my_cal.total.value = c;
}
function addition() {
    a = Number(document.my_cal.first.value);
    b = Number(document.my_cal.second.value);
    c = a + b;
    document.my_cal.total.value = c;
}
function subtraction() {
    a = Number(document.my_cal.first.value);
    b = Number(document.my_cal.second.value);
    c = a - b;
    document.my_cal.total.value = c;
}
function division() {
    a = Number(document.my_cal.first.value);
    b = Number(document.my_cal.second.value);
    c = a / b;
    document.my_cal.total.value = c;
}
function modulus() {
    a = Number(document.my_cal.first.value);
    b = Number(document.my_cal.second.value);
    c = a % b;
    document.my_cal.total.value = c;
}

function calculateInterest() {
    p = Number(document.interest_cal.principalInput.value);
    r = Number(document.interest_cal.interestInput.value)/100;
    t = Number(document.interest_cal.termInput.value)
    // A = P(1 + rt)
    //d = p(1+(r*t));
    d = p * (1 + r*t);
    interestOnly = d - p;
    document.interest_cal.totalInterest.value = d;
    document.interest_cal.interestToPay.value = interestOnly;
}