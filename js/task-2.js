function makeArray(firstArray, secondArray, maxLength):
    # Об'єднуємо два масиви
    combinedArray = firstArray + secondArray
    # Перевіряємо, чи довжина масиву перевищує maxLength
    if len(combinedArray) > maxLength:
        # Якщо так, повертаємо масив з першими maxLength елементами
        return combinedArray[:maxLength]
    else:
        # Якщо ні, повертаємо весь комбінований масив
        return combinedArray


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []