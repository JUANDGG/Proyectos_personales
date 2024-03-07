base_de_datos ={}


def buscar_cliente (cedula_usuario) :
    for  i in base_de_datos.keys():
        if cedula_usuario ==i :return True
    return False

def crear_cliente () :
    print("")
    print("__MENU CREAR CLIENTE__")
    print("")
    try :
        
        documento =int(input("INGRESE SU NUMERO DE DOCUMENTO :"))
        
        if buscar_cliente(documento) !=True :
            nombre =input("INGRESE SU NOMBRE :").lower()
            apellido =input("INGRESE SU APELLIDO :").lower()
            edad =int(input("INGRESE SU EDAD :"))
            preferencia =input("PARA AÑADIR PREFERENCIA Y/N").lower()
            if nombre ==""  or  apellido=="" or preferencia=="" :
                print("NO PUEDEN HABER ESPACIOS VACIOS")
            else :
                if  preferencia!="y" or preferencia!="n" :
                    print("TIENES QUE PONER Y / N SI DESEAS QUE SEA UN CLIENTE PREFERENTE SI O NO")
                    
                    
                else :
                    bandera =False
                    if preferencia=="y ":
                        bandera = True
                    base_de_datos[documento] =  {"nombre" :nombre, "apellido" :apellido, "edad" :edad, "preferencia" :bandera}
                
        else : print("EL CLIENTE QUE DESEAS AGREGAR YA SE ENCUENTRA EN LA BASE DE DATOS")
        
    except Exception :
        print("ERROR : OCURRIO UN ERROR O PUSO TEXTO O UN ESPACIO EN EL DOCUMENTO O EN LA EDAD")
        
        
def eliminar_cliente () :
    print("")
    print("__MENU ELIMINAR CLIENTE__")
    print("")
    try :
        documento =int(input("INGRESE EL NUMERO DE DOCUMENTO DEL USUARIO QUE DESEA ELIMINAR:"))   
        if buscar_cliente(documento) !=True :
            print("EL USUARIO QUE INTENTAS ELIMINAR NO SE ENCUENTRA EN LA BASE DE DATOS")
        else :
            base_de_datos.pop(documento)
            print("CLIENTE ELIMINADO CORRECTAMENTE")
                
    except Exception :
        print("ERROR : OCURRIO UN ERROR O PUSO TEXTO O UN ESPACIO EN EL DOCUMENTO O EN LA EDAD")

def listar_cliente () :
    print("")
    print("__MENU LISTAR CLIENTES__")
    print("1. LISTAR  TODOS LOS CLIENTES__")
    print("2. LISTAR CLIENTES PREFERENTES__")
    
    try :
        op =int(input("INGRESE UNA OPCION"))
        if op in range(1,2+1):
            for  i in base_de_datos :
                if op == 1 :
                    print(base_de_datos[i])
                else :
                    if base_de_datos[i]["preferencia"]:print(base_de_datos[i])
                
    except Exception :
        print("")
        print("ERROR :NO SE PUEDE DEJAR ESPACIOS O PONER TEXTO")

    
def menu_principal () :
    while True :
        print("")
        print("1 . AGREGAR CLIENTE")
        print("2 . ELIMINAR CLIENTE")
        print("3 . MOSTRAR CLIENTE")
        print("4.  SALIR")
        try :
            op =int(input("INGRESE UNA OPCION :"))
            if op in range(1,4+1):
                if op ==1 :crear_cliente()
                elif op==2 : eliminar_cliente()
                elif op==3 : listar_cliente()
                else :
                    print("")
                    print("HASTA LUEGO !")
                    break
                    
        except Exception :
            print("")
            print("ERROR :NO SE PUEDE DEJAR ESPACIOS O PONER TEXTO")
            
menu_principal()