""" 
Escribir un programa que pida al usuario una palabra y muestre por pantalla el número de veces que contiene cada vocal.

"""

vocal =["a","e","i","o","u"]
palabra = input("ingrese una palabra :").lower().strip()


countVocal =0
for i in vocal:
    for j in palabra:
        if i == j:countVocal+=1
        
    
print(f"la palabra tiene {countVocal} vocales")