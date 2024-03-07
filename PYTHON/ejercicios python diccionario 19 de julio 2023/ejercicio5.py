"""
Escribir un programa que cree un diccionario simulando una cesta de la compra. El programa debe preguntar el artículo y su precio y añadir el par al diccionario, hasta que el usuario decida terminar. Después se debe mostrar por pantalla la lista de la compra y el coste total    

"""


compras =[]


def menu ():
    print("------------")
    print("------BIENVENIDO AL MENU DE COMPRAS------")
    print("--A CONTINUACION POR FAVOR DIGITE EL PRODUCTO QUE DESEA COMPRAR Y DESPUES SU PRECIO--")



def compInpt ():
    
    prodc = input("ingresa el nombre del producto que desea comprar :")
    price = float(input(f"ingrese el precio  de {prodc} :"))

    if prodc ==" " or price ==" ": 
        print("digite una opcion valida")
        return False
    
    return {"producto":prodc,"precio":price}




def compra ():
    while True :
        exit =input ("si deseas salir por favor presiona s  si no solamente precione entee : ").lower()
        if exit =="s":break
        menu()
        productsValue = compInpt()
        if productsValue !=False :compras.append({"producto":productsValue["producto"],"precio":productsValue["precio"]})
        
compra()

def factura ():
    sumaTotalPrecioComp =0
    for i in compras : sumaTotalPrecioComp +=i["precio"]
    print("")
    print("articulos comprados")
    print("")
    for  i in compras : print({i['producto']})
    print(f"el precio total de la compra es de {sumaTotalPrecioComp}") 



factura()
