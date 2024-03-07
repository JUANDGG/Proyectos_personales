""" 
3. Crea un programa que solicite al usuario ingresar una serie de números positivos y luego calcule e imprima el promedio de los números ingresados utilizando un bucle while . El programa debe terminar cuando el usuario ingrese un número negativo.
"""

countNumbers =0
sumNumbers =0

while True :
    entry = int(input("ingrese un numero :"))
    if entry < 0 : break
    countNumbers+=1
    sumNumbers+=entry
    
print(f'el promedio de los numeros ingresados es de {int(sumNumbers/countNumbers)}')