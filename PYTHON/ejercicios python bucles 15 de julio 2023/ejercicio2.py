""" 
2. Escribe un programa que solicite al usuario ingresar un número y luego muestre la tabla de multiplicar de ese número del 1 al 10

"""


entry = int(input('ingrese un numero :'))

for i in range(1,10+1):
    print(f'{entry} x {i} =={entry*i}')