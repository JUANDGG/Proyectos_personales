""" 
. Escribir un programa que pida al usuario un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo, de altura el número introducido.



"""

entry = int (input("ingrese un numero entero :"))


forma =''

for  i in range(entry):
    forma+='*'
    print(forma)