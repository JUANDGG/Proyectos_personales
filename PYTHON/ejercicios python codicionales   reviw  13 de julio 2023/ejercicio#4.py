"""
Escribir un programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5.000 COP y si es mayor de 18 años, 10000 COP.

"""

precioEntra =4000

edad = int(input('ingresa la edad del cliente :'))
print(f'el precio de la entrada es {precioEntra} ' , end=' ' , )

if edad >0 and edad <=4:
    print("papu la entrada es gratuita")
elif edad >4 and edad<=18 :
    print(f"papu la entrada normalmente vale {precioEntra} pero a ti se te incrementa a {precioEntra + 1000}")
else :
    print(f"estas muy grande para jugar son {precioEntra + 6000}")