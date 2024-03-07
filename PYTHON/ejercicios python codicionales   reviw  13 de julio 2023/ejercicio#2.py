"""
. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o superiores a 4.000.000 COP mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no.

"""

edad ,ingresosMens = int(input('ingrese su edad')),float(input('ingrese su ingresos mensuales'))

if edad <=16 and ingresosMens <=4000000:
    print('no debes tributar')
else :
    print('debes tributar hijo mio')