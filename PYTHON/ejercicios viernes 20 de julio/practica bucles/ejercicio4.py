"""
. Escribe un programa que genere los primeros 4 números perfectos. Un número perfecto es un número entero positivo que es igual a la suma de sus divisores propios positivos. Dicho de otra forma, un número perfecto es aquel que es amigo de sí mismo. Así, 6 es un número perfecto porque sus divisores propios positivos son 1, 2 y 3; y 6 = 1 + 2 + 3.



"""



            
def numero (n):
    i = 1
    suma =0
    while i<n:
        i+=1
        for j in range(1,i):
            if i%j ==0:
                suma +=j
        if suma ==i :
            print(suma)
        suma =0

numero(1000)

