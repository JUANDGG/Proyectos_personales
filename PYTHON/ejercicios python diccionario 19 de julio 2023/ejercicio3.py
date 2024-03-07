""" 

3. Escribir un programa que guarde en un diccionario los precios de las verduras de la tabla, pregunte al usuario por una verdura, un número de kilos y muestre por pantalla el precio a pagar. Si la fruta no está en el diccionario debe mostrar un mensaje informando de ello.


Verdura               Precio (Kg)
Brócoli                2500 COP
Pimentón           1250 COP

"""

#/////////////////////////// registro productos
dataShope = []

def menu ():
    print(" ")
    print("////Menu de registros de productos////")
    print("a continuacion puede agregar el procuto con su respectivo precio")
    print("para porder ver el inventario de los productos pulsa s")

def compInpt ():
    product = input("ingresa un producto :").lower()
    if product !='s' :    
        pricee =  float(input(f"ingrese el precio de la/las/el {product} :"))
        return {"product": product, "pricee": pricee}
    else : return 'salir'




class  regDta :
    def __init__(self,produc,precie) :
        self.produc = produc
        self.precie = precie
        


class setDataReg (regDta): 
    pass
    def regProduct (self):
        dataShope.append({"product":self.produc,"price":self.precie})
        


while  True:

    menu()
    productos = compInpt()
    if productos =='salir':break
    setDataOb = setDataReg(productos["product"],productos["pricee"])
    setDataOb.regProduct()
    

#////////////////////////////vender productos

def compra_producto (prodc,kg_acomprar):
    for i in dataShope:
        if prodc == i["product"] :
            print("")
            return print("has elejido ", i["product"],"el precio del producto es", (i["price"] * int(kg_acomprar))) ; 
    return print("no se encontro el producto")
        

compra_producto("papa",2)