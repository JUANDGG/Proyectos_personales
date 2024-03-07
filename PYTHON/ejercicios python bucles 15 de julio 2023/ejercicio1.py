""" 
1. Juego de adivinanzas: Crea un juego de adivinanzas en el que el programa contiene un número (de 1 a 100) a ser adivinado y el jugador tiene que adivinarlo. El programa debe dar pistas al jugador indicando si el número a adivinar es mayor o menor que el número ingresado. Utiliza un bucle while para permitir múltiples intentos del jugador.

"""

import random
randomNumber = random.randint(1,100)

intentos  =0

while intentos <=3:
    
    entry = int(input("ingresa un numero :")) 
    if entry > randomNumber:
        print('te pasaste')
        intentos+=1
    elif entry < randomNumber :
        print('estas muy por debajo del numero')
        intentos+=1
    else :
        print("lo has adivinado")
        break
    