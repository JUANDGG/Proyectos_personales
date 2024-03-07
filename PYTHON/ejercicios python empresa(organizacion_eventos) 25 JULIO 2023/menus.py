import funcionalidad 


def menu_registrar_participante () :
    print("")
    documento =input("INGRESE EL DOCUMENTO DEL USUARIO :")
    nombre =input("INGRESE EL NOMBRE DEL USUARIO :")
    apellido =input("INGRESE EL APELLIDO DEL USUARIO :")
    edad =input("INGRESE LA EDAD DEL USUARIO:")
    cargo =input("INGRESE EL CARGO DEL USUARIO :")
    
    if nombre =="" or apellido =="" or edad =="" or cargo =="" :print("ERROR : ESPACIOS VACIOS")
    else: 
        funcionalidad.registrar_participantes(documento, nombre, apellido,edad, cargo)


def menu_eliminar_participante ():
    print("")
    try : 
        op =int(input("INGRESA EL DOCUMENTO DEL PARTICIPANTE A ELIMINAR :"))
    except Exception :
        print("")
        print("OCURRIO UN ERROR")
    else :funcionalidad.eliminar_participante(str(op))
        
        
def menu__pagar__aporte() :
    print("")
    print("__BIENVENIDO AL MENU DE PAGAR APORTE__")
    print("")
    try : 
        documento =int(input("INGRESA LA CEDULA DEL USUARIO A PAGAR :"))
    except Exception :
        print("")
        print("OCURRIO UN ERROR")
    else :
        nombre_Evento =input("INGRESA EL NOMBRE DEL EVENTO QUE DESEAS PAGAR")
        if nombre_Evento =="" : print("ERROR : ESPACIOS VACIOS")
        else :
            funcionalidad.pagar_aporte(str(documento),nombre_Evento)
        
    

def gestion_participantes () :
    while True :
        print("")
        print("__MENU GESTION PARTICIPANTE")
        print("1. REGISTRAR PARTICIPANTE")
        print("2. ELIMINAR PARTICIPANTE")
        print("3 .PAGAR APORTE")
        print("4. VOLVER")
        try : 
            op =int(input("INGRESA UNA OPCION :"))
        except Exception :
            print("")
            print("OCURRIO UN ERROR")
        else :
            if not op in range(1,4+1 ) :print("NO ESTA EN EL RANGO")
            elif op == 1 :menu_registrar_participante()
            elif op == 2 :menu_eliminar_participante()
            elif op ==3 :menu__pagar__aporte()
            else :menu_principal()




def menu_registrar_evento () :
    print("")
    nombre =input("INGRESE EL NOMBRE DEL EVENTO A REGISTRAR :")
    ubicacion =input("INGRESE LA UBICACION EN LA CUAL SE VA LLEVAR A CABO :")
    fecha =input("INGRESE LA FECHA EN LA QUE SE REALIZARA :")
    if nombre =="" or ubicacion =="" or fecha =="" :print("ERROR : ESPACIOS VACIOS")
    else: funcionalidad.agregar_evento(nombre, ubicacion,fecha)

def menu_modificar_evento () :
    print("")
    print("1. MODIFICAR UBICACION")
    print("2.MODIFICAR FECHA")
    print("3.MODIFICAR SI SE REALIZO")
    try : 
        op =int(input("INGRESA UNA OPCION :"))
    except Exception :
        print("")
        print("OCURRIO UN ERROR")
    else :
        if not op in range(1,3+1 ):print("NO ESTA EN EL RANGO")
        nombre_evento = input("INGRESE EL NOMBRE DEL EVENTO A MODIFICAR :")
        
        if nombre_evento =="" :print("ERROR :ESPACIOS VACIOS")
        else :
            if op ==1 :
                data_a_modificar = input("INGRESE LA DATA QUE VA A AGREGAR :")
                funcionalidad.modificar_evento(nombre_evento,"ubicacion",data_a_modificar)
            elif op ==2 :
                data_a_modificar = input("INGRESE LA DATA QUE VA A AGREGAR :")
                funcionalidad.modificar_evento(nombre_evento,"fecha",data_a_modificar)
            elif op ==3 :
                funcionalidad.modificar_evento(nombre_evento,"ubicacion",False)


#falta el de eliminar evento
def menu_eliminar_evento () :
    print("")
    nombre =input("INGRESE EL NOMBRE DEL EVENTO A ELIMINAR :")
    if nombre ==""  :print("ERROR : ESPACIOS VACIOS")
    else: 
        funcionalidad.eliminar_evento(nombre)



def menu_eventos () :
    print("")
    print("1 .REGISTRAR")
    print("2 .MODIFICAR")
    print("3 .ELIMINAR")
    print("4 .MENU PRINCIPAL")
    print("")
    try : 
        op =int(input("INGRESA UNA OPCION :"))
    except Exception :
        print("")
        print("OCURRIO UN ERROR")
    else :
        if not op in range(1,3+1 ):print("NO ESTA EN EL RANGO")
        elif op ==1 :menu_registrar_evento()
        elif op ==2 :menu_modificar_evento()
        elif op ==3 :menu_eliminar_evento()
        else :menu_principal()


def menu_principal () :
    while True :
        print(funcionalidad.eventos)
        print(funcionalidad.participantes)
        print("")
        print("1 .PARTICIPANTES")
        print("2 .EVENTOS")
        print("3 .DEUDORES")
        print("4 .SALIR")
        print("")
        try : 
            op =int(input("INGRESA UNA OPCION :"))
        except Exception :
            print("")
            print("OCURRIO UN ERROR")
        else :
            if not op in range(1,4+1 ) :
                print("NO ESTA EN EL RANGO")
            elif op == 1 :gestion_participantes()
            elif op == 2 :menu_eventos()
            elif op == 3 :funcionalidad.deudores()
            else :break
            
                
            
                

menu_principal()