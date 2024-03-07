palabra = input("ingrese una palabra :").lower().strip()
reverse =palabra[::-1]
if palabra == reverse:print("es un palindromo")
else :print("no es un palindromo")