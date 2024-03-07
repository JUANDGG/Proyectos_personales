"""
escribir un programa que cree un diccionario vacío y lo vaya llenado con información sobre una persona (por ejemplo nombre, edad, sexo, teléfono, correo electrónico, etc.) que se le pida al usuario. Cada vez que se añada un nuevo dato debe imprimirse el contenido del diccionario.    
   
"""

databaseUser = []

#una funcion solo hace una cosa ala vez
def menu():
    print("--Por favor ingresa lo siguientes datos--")
    print("si deseas salir en el apartado del nombre pulsa la tecla s")
    print("--nombre--")
    print("--edad--")
    print("--sexo--")
    print("--telefono--")
    print("--correo eletronico--")

    

def compInpt ():
    nombre = input("ingresa tu nombre :").lower()
    if nombre !='s':
        edad = int(input("ingresa tu edad :"))
        sexo =input("ingresa tu sexo :").lower()
        telefono  = int(input("ingresa tu numero de telefono sin el indicativo :"))
        email = input("ingresa tu email :").lower()
        return {"nombre":nombre, "edad":edad ,"sexo":sexo,"telefono":telefono,"email":email}
    return 'salir'

#principios solid una clase solo hace una cosa ala vez
class getDtaUser:
    def __init__(self,nombre,edad,sexo,telefono,email):
        self.nombre = nombre
        self.edad = edad
        self.sexo = sexo
        self.telefono = telefono
        self.email = email


class registerUser(getDtaUser):
    pass
    def register (self):
        databaseUser.append({"nombre" :self.nombre,"edad" :self.edad,"sexo":self.sexo,"telefono":self.telefono,"email":self.email})
        
        
        

while True:
    menu()
    composeInptOb  = compInpt()
    if  composeInptOb =='salir':
        print(databaseUser)
        break    
    regDtaUserObject  = registerUser(composeInptOb["nombre"] ,composeInptOb["edad"], composeInptOb["sexo"], composeInptOb["telefono"],composeInptOb["email"])
    regDtaUserObject.register()
    print(databaseUser)
    
