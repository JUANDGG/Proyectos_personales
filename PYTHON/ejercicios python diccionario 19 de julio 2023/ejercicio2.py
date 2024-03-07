""" 
Escribir un programa que pregunte al usuario su nombre, edad, dirección y teléfono y lo guarde en un diccionario. Después debe mostrar por pantalla el mensaje <nombre> tiene <edad> años, vive en <dirección> y su número de teléfono es <teléfono>.
"""

databaseUser = []

#una funcion solo hace una cosa ala vez
def menu():
    print("--Por favor ingresa lo siguientes datos--")
    print("--nombre--")
    print("--edad--")
    print("--dirrecion--")
    print("--telefono--")

    

def compInpt ():
    nombre = input("ingresa tu nombre :").lower()
    edad = int(input("ingresa tu edad :"))
    direccion =input("ingresa tu direccion :").lower()
    telefono  = int(input("ingresa tu numero de telefono sin el indicativo :"))
    return {"nombre":nombre, "edad":edad ,"direccion":direccion,"telefono":telefono}

#principios solid una clase solo hace una cosa ala vez
class getDtaUser:
    def __init__(self,nombre,edad,direccion,telefono):
        self.nombre = nombre
        self.edad = edad
        self.direccion = direccion
        self.telefono = telefono


class registerUser(getDtaUser):
    pass
    def register (self):
        databaseUser.append({"nombre" :self.nombre,"edad" :self.edad,"direccion":self.direccion,"telefono":self.telefono})
        
        
        
temp  = 0            
while temp<=2 :
    temp +=1
    menu()
    composeInptOb  = compInpt()
    regDtaUserObject  = registerUser( composeInptOb["nombre"] ,composeInptOb["edad"], composeInptOb["direccion"],composeInptOb["telefono"])
    regDtaUserObject.register()
    
    

for i in databaseUser: print("hola me llamo " ,i["nombre"] , " y tengo " , i["edad"],"mi direccion es ",i["direccion"],"y mi telefono es ", i["telefono"])
        
    