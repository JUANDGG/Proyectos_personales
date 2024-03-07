""" 
Escribe un programa que solicite al usuario ingresar el nombre de un mes y determine cuántos días
tiene ese mes. Utiliza estructuras condicionales para asociar cada mes con la cantidad
correspondiente de días y muestra un mensaje con el resultado.

"""

meses ={
    'enero':31,
    'febrero':28,
    'marzo': 31,
    'mayo': 31,
    'junio': 30,
    'julio': 31,
    'agosto ':31,
    'septiembre': 30,
    'octubre': 31,
    'noviembre': 30,
    'diciembre ':31 
}

mes = input('ingrese un mes :').lower()

for i in meses : 
    if mes ==i:
        print(f'{i} tiene {meses[i]} dias')
