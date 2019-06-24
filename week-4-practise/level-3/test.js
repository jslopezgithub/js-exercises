function aliasGen(firstname, lastname) {
    var milley = firstname.charAt(0);
    var jibran = lastname.charAt(0);

    if (/[A-Z]/.test(milley) && /[A-Z]/.test(jibran)) {
        return firstName[milley] + " " + surName[jibran];
    } else if (/[a-z]/.test(milley) && /[a-z]/.test(jibran)) {
        milley = milley.toUpperCase();
        jibran = jibran.toUpperCase();
        return firstName[milley] + " " + surName[jibran];
    } else {
        return "Your name must start with a letter from A - Z.";
    }
}
var firstName = {
    A: "Alpha",
    B: "Beta",
    C: "Cache",
    D: "millgh",
    E: "hiii",
    M: "Malware"
};
var surName = { A: "Analogue", B: "Bomb", C: "Catalyst", M: "Mountain" };
var millleyeye = aliasGen("Mike", "Millington");
console.log(millleyeye);