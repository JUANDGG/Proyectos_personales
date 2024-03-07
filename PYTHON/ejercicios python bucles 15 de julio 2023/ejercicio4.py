""" 
4. Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y muestre un mensaje cada vez que un número no sea mayor que el primero.

"""

arrNumbers = []

while True :
    entry1 = int(input('ingresa un numero :'))
    entry2 = int(input('ingrese otro numero'))
    
    if entry2 < entry1 : print('el  numero es menor')
    else : print('el  numero es mayor')
    