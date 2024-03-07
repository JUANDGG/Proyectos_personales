#4. Escribir una función que reciba una muestra de números en una lista y devuelva su media.



def media (listaNums):
    count =0
    for i in listaNums:count +=i
    return print(f"la media de los numeros introducidos  es {count/len(listaNums)}")

media([1,2,3,4,5])