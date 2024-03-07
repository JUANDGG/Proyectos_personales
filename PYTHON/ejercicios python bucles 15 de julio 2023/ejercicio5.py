""" 
Palíndromos: Un palíndromo es una palabra o frase que se lee igual de adelante hacia atrás. Escribe un programa que verifique si una palabra ingresada por el usuario es un palíndromo. Utiliza un bucle for para comparar los caracteres de la palabra.

"""

palabra =input("ingresa una palabra sin caracteres especiales :").lower().strip()
palabraReverse =''
for i in reversed(palabra):palabraReverse +=i
if palabraReverse == palabra : print("la palabra introducida es un palindromo")
else : print("la palabra introducida no es un palindromo")

