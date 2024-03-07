""" 
 Escriba un programa que pida dos números enteros y escriba la suma de todos los enteros desde el primer número hasta el segundo incluyéndolos.

"""
#scope globales no valen en python cuando de funciones se tratan

nu1 = int(input("ingrese un numero"))
nu2 = int(input("ingrese otro numero"))
count = 0
for i in range(nu1,nu2+1):count += i
print(f"la suma de todos los numeros es {count} ")


