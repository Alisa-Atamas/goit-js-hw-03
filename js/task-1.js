function slugify(title):
    # Перетворюємо рядок у нижній регістр
    title = title.lower()
    # Заміняємо всі пробіли на тире
    title = re.sub(r'\s+', '-', title)
    # Видаляємо всі небажані символи (залишаємо тільки літери, цифри та тире)
    title = re.sub(r'[^a-z0-9\-]', '', title)
    return title


console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"