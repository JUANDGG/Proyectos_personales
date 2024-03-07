"""
Escribe un programa que genere los primeros 20 términos de la serie de Fibonacci. Se trata de una secuencia infinita de números naturales; a partir del 0 y el 1, se van sumando a pares, de manera que cada número es igual a la suma de sus dos anteriores, de manera que: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

"""


n1=0 #1
b1=1 #suma
re =0 #0troNumero

print(b1)
for i in range(20):
    print(re , end=" ")
    re = n1 + b1
    n1 =b1
    b1=re