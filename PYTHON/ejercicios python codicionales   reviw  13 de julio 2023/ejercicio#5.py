"""
La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los ingredientes para cada tipo de pizza aparecen a continuación.

Ingredientes vegetarianos: Pimiento y tofu.
Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.

Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en función de su respuesta le muestre un menú con los ingredientes disponibles para que elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están en todas la pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana o no y todos los ingredientes que lleva.

"""
pedido =[]
pizzas = {
    "VEGETARIANA" : [{1:"pimiento" ,2:"tofu"}],
    "NOVEGETARIANA": [{1:"pepperoni" , 2:"jamon" ,3:"salmon"}],
}

def menu ():
    print(" ")
    print("------------BIENVENIDO ALA PIZZERIA LA GIRONESA------------")
    print("--VEGETARIANA   --")
    print("--NOVEGETARIANA --")
    print("--SALIR         --")
    print("------------------------------------------------------")

##esto es una mala practica triangulo de la muerte
def elegirIngre (nombreUser,nombrePizza):
    for i in pizzas :
        if nombrePizza == i:
            print(f'elegiste la pizza {nombrePizza}')
            for j in pizzas[i] :
                print(" ")
                print(pizzas[i])
                print(" ")
                print(f'con que ingrediente la quieres solo se puede uno solo')
                print(" ")
                entradaIng =int(input('ingresa el numero de ingrediente con el que deseas tu pizza :'))
                #falta agregar las condiciones de los ingredientes y las pizzas si el usuario no ingresa un numero de ingrediente correspondiente
                if j[entradaIng]:
                    pedido.append(f'pedido para {nombreUser} la pizza es {nombrePizza} , el ingrediente que eligio es {j[entradaIng]}')

while True :
    menu()
    nombreUsuario = input("ingresa tu nombre :").upper()
    print(" ")
    op= input('__querido usuario digita el nombre de la pizza que vez en el menu sin espacios__:').upper()
    if op =='SALIR':
        break
    else :
        elegirIngre(nombreUsuario,op)

print(" ")
print(pedido)