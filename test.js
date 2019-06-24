function scramble(str1, str2) {
    var arr1 = str1.split("");
    var arr2 = str2.split("");
    for (var i = arr2.length - 1; i >= 0; i--) {
        var index = arr1.indexOf(arr2[i]);
        if (index > -1) {
            arr1.splice(index, 1);
        } else {
            return false;
        }
    }
    return true
}

function scramble2(str1, str2) {
    var map = str1.split("").reduce(function (map, element) {
        if (element in map) {
            map[element] = map[element] + 1;
        } else {
            map[element] = 1;
        }
        return map;
    }, {});
    var arr2 = str2.split("");

    for (var i = 0; i < arr2.length; i++) {
        var element = map[arr2[i]];
        if (element && element > 0) {
            map[arr2[i]] = element - 1;
        } else {
            return false;
        }
    }
    return true
}

console.log(scramble2('katas', 'steak'));