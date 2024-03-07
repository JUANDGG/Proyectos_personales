"""
5. Escribir una función que reciba una muestra de números en una lista y devuelva otra lista con sus cuadrados.

"""

def cuadrados (listaNums):
    newLista =[]
    for i in listaNums:newLista.append(i**2)
    return newLista

print(cuadrados([1,2]))

