"""
Escribe un programa que solicite al usuario un número entero y calcule su factorial. El factorial es la cantidad que resulta de la multiplicación de determinado número natural por todos los números naturales que le anteceden excluyendo el cero; se representa por n! "el factorial de 4 es 24 (producto de 4 x 3 x 2 x 1)"

falta
"""

suma =0
i =2
while i<=10:
    for  j in range(1,i):
        suma +=j

    print(i*suma)
    suma=0
    i+=1
