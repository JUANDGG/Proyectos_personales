""" 
Crea un programa que pida al usuario ingresar el nombre de un país y luego determine en qué continente se encuentra. (Ten en cuenta un solo país por continente para no hacer tan largo tu código)
Utiliza estructuras condicionales para asociar cada país con su respectivo continente y muestra un mensaje con el
continente correspondiente.
"""


data =[
    {'asia':'china'},
    {'america':'colombia'},
    {'africa':'guinea visao'},
    {'antartida':'argentina'},
    {'europ':'suiza'},
    {'oceania':'australia'}
]

entry = input("ingrese un pais :").lower()

for i in data:
    for j in i.items() :
        if entry ==j[1]:
            print(f'tu pais se encuentra en el continenete de {j[0]}')
