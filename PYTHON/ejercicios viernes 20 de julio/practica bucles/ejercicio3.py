"""
Escribe un programa que solicite al usuario un número entero y calcule la suma de sus dígitos.

"""


numero =  int(input("INGRESA EL NUMERO :"))
count =0
if len(str(numero)) >1:
    for i in range(numero):
        count += i
        
else :
    print("EL NUMERO TIENE QUE TENER MAS 2 O MAS DIGITOS")
    

print(f"LA SUMA DE LOS DIGITOS ES : {count}")