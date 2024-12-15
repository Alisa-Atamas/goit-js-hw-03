function  filterArray(numbers, value):
    # Створюємо порожній масив для зберігання підходящих чисел
    filtered_numbers = []
    
    # Ітеруємо через кожен елемент масиву numbers
    for number in numbers:
        # Якщо число більше за value, додаємо його до нового масиву
        if number > value:
            filtered_numbers.append(number)
    
    # Повертаємо новий масив з відфільтрованими числами
    return filtered_numbers

    

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]