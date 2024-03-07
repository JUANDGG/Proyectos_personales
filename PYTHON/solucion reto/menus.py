import juegos_funcionalidad


def consultar_juego ():
    print("")
    print("__BIENVENIDO AL MENU DE CONSULTA JUEGO__")
    print("")
    try :
        op =int(input("INGRESA EL NUMERO DE HORAS DISPONIBLES QUE TIENES PARA JUGAR :"))
        return op
    except Exception :
        print("")
        Exceptionmessage =" ERROR :LOS DATOS INTRODUCIDOS DEBEN NO DEBEN ESTAR VACIOS Y LOS DATOS QUE IMPLIQUEN NUMEROS DEBEN DE ESTAR CON NUMEROS NO TEXTO"
        print("\033[4;35;47m"+Exceptionmessage+'\033[0;m') 
        print("")
       
def menu_valorar_juego ():
    print("")
    print("__BIENVENIDO AL MENU DE VALORACION DE JUEGO __")
    print("")
    try :
        nombre_juego =input("INGRESA EL NOMBRE DEL JUEGO QUE DESEA  VALORAR :").lower()
        valoracion = int(input("INGRESE UNA VALORACION DE 1 HASTA 6 DEL JUEGO :"))



        if nombre_juego =="":
            print("")
            print("ERROR :")
            print("")
        elif valoracion in range(1,6+1):
            return [nombre_juego,valoracion]

            
        else :
            print("\033[4;35;47m"+"ERROR:OPCION FUERA DE RANGO O DEJASTE ESPACIOS VACIOS INTENTALO NUEVAMENTE "+'\033[0;m') 

    except Exception:
        print("")
        Exceptionmessage =" ERROR :LOS DATOS INTRODUCIDOS DEBEN NO DEBEN ESTAR VACIOS Y LOS DATOS QUE IMPLIQUEN NUMEROS DEBEN DE ESTAR CON NUMEROS NO TEXTO"
        print("\033[4;35;47m"+Exceptionmessage+'\033[0;m') 

def menu_gestion_consultas_y_valoraciones ():
    while True:
        print("")
        print("__BIENVENIDO AL MENU DE GESTION CONSULTAS Y VALORACION  JUEGO__")
        print("")
        print("1--> PARA CONSULTAR JUEGO")
        print("2--> PARA VALORAR  JUEGO")
        print("3--> PARA REGRESAR AL MENU PRINCIPAL")
        print("")
        try :
            op = int(input("INGRESE UNA OPCION :"))
            if op in range(1,3+1):
                if op ==1 :
                    cj =consultar_juego()
                    juegos_funcionalidad.consulta_juego(cj)
                elif op ==2 :
                    mnvj =menu_valorar_juego()
                    juegos_funcionalidad.valoraciones_juego(mnvj)
                else :
                    menu_pricipal()    
            else :
                print("")
                print("\033[4;35;47m"+"ERROR:OPCION FUERA DE RANGO "+'\033[0;m') 
                print("")

        except Exception:
            print("")
            Exceptionmessage =" ERROR :LOS DATOS INTRODUCIDOS DEBEN NO DEBEN ESTAR VACIOS Y LOS DATOS QUE IMPLIQUEN NUMEROS DEBEN DE ESTAR CON NUMEROS NO TEXTO"
            print("\033[4;35;47m"+Exceptionmessage+'\033[0;m') 


def menu_registrarJuego ():
    print("")
    print("___BIENVENIDO AL MENU DE REGISTRO DE JUEGO___")
    print("")
    try :
        nombre_registrar =input("INGRESA EL NOMBRE DE JUEGO :").lower()
        tiempo_x_partida =int(input("INGRESA EL TIEMPO DE JUEGO  POR PARTIDA EN HORAS:"))
        cantidad_d_jugadores  = int(input("INGRESA LA CANTIDAD APROXIMADA DE JUGADORES QUE JUEGAN ESTE JUEGO :"))
        if nombre_registrar =="" or tiempo_x_partida == "" or cantidad_d_jugadores=="" :
            print("")
            print("\033[4;35;47m"+"ERROR :ESPACIOS VACIOS INTENTALO DE NUEVO"+'\033[0;m') 
            print("")
        else :return[nombre_registrar,tiempo_x_partida,True,cantidad_d_jugadores]
    except Exception :
        print("")
        Exceptionmessage =" ERROR :LOS DATOS INTRODUCIDOS DEBEN NO DEBEN ESTAR VACIOS Y LOS DATOS QUE IMPLIQUEN NUMEROS DEBEN DE ESTAR CON NUMEROS NO TEXTO"
        print("\033[4;35;47m"+Exceptionmessage+'\033[0;m') 
        print("")
        
        

def menu_modificar_juego () :
    print("")
    print("___BIENVENIDO AL MENU DE MODIFICAR JUEGO___")
    print("")
    print("1-->PARA MODIFICAR EL TIEMPO DE JUEGO")
    print("2-->PARA CAMBIAR LA DISPONIBILIDAD")
    print("3-->PARA CAMBIAR LA CANTIDAD DE JUGADORES")
    print("")
    try :
        op_mo = int(input("INGRESE UNA OPCION :"))
        if op_mo in range(1,3+1):
            nombre_juego =input("INGRESA EL NOMBRE DEL JUEGO QUE DESEA  MODIFICARLE ESTE ASPECTO :").lower()
            if nombre_juego =="" :
                print("")
                print("\033[4;35;47m"+"ERROR :DATOS VACIOS INTENTALO DE NUEVO"+'\033[0;m') 
                print("")
            else :return [nombre_juego,op_mo]
        else :
            print("")
            print("\033[4;35;47m"+"ERROR:OPCION FUERA DE RANGO "+'\033[0;m') 
            print("")

    except Exception:
        print("")
        Exceptionmessage =" ERROR :LOS DATOS INTRODUCIDOS DEBEN NO DEBEN ESTAR VACIOS Y LOS DATOS QUE IMPLIQUEN NUMEROS DEBEN DE ESTAR CON NUMEROS NO TEXTO"
        print("\033[4;35;47m"+Exceptionmessage+'\033[0;m') 
    
        


def menu_gestion_d_juegos ():
    while True:
        print("")
        print("___BIENVENIDO AL MENU DE GESTION DE JUEGOS___")
        print("")
        print("1--> PARA REGISTRAR JUEGOS")
        print("2--> PARA MODIFICAR JUEGO")
        print("3--> PARA ELIMINAR JUEGO")
        print("4--> PARA SALIR AL MENU PRINCIPAL")
        print("")
        try:
            op =int(input("INGRESA UNA OPCION :"))
            if op in range(1,4+1):
                if op ==1:
                    mnr = menu_registrarJuego()
                    juegos_funcionalidad.registrar_juego(mnr)
                elif op ==2:
                    mnf =menu_modificar_juego()
                    juegos_funcionalidad.modificar_juego(mnf)
                elif op ==3:
                    juegos_funcionalidad.eliminar_juego()
                else:
                    menu_pricipal()
            else :
                print("") 
                print("\033[4;35;47m"+"ERROR : OPCION FUERA DE RANGO INTENTELO DE NUEVO"+'\033[0;m') 
                print("")
        except Exception :
            print("")
            Exceptionmessage =" ERROR :LOS DATOS INTRODUCIDOS DEBEN NO DEBEN ESTAR VACIOS Y LOS DATOS QUE IMPLIQUEN NUMEROS DEBEN DE ESTAR CON NUMEROS NO TEXTO"
            print("\033[4;35;47m"+Exceptionmessage+'\033[0;m') 
            print("")

        


    

def menu_pricipal() :
    while True : 
        print(" ")
        print("___________________________________")
        print(" ")
        print("BIENVENIDO A SALA GAME")
        print("1--> PARA GESTION DE JUEGOS")
        print("2--> PARA CONSULTAS Y VALORACIONES")
        print("3--> VER RANKING")
        print("4--> PARA SALIR")
        try :
            print("")
            op =int(input("INGRESA UNA OPCION :"))
            if op in range(1,4+1):
                if op ==1 :
                    menu_gestion_d_juegos()
                    
                elif op ==2 :
                    menu_gestion_consultas_y_valoraciones()
                elif op ==3 :
                    juegos_funcionalidad.ranking_juego()
                elif op==4 :
                    op_salir =input("DESEAS SALIR DEL PROGRAMA PULSA Y / N :").lower()
                    
                    if op_salir == "" :
                        print("")
                        print("EL ESPACIO DEBE DE LLENARSE POR FAVOR INTENTELO DE NUEVO")
                        menu_gestion_d_juegos()
                    
                    elif op_salir=="y":
                        print("")
                        print("HASTA LUEGO QUERIDO USUARIO :(")
                        print("")
                        break ;             
                    elif op_salir == "n" :
                        menu_pricipal()
                        
                    else:
                        print("")
                        print("\033[4;35;47m"+"ERROR DEBES DIGITAR UNA DE LAS 2 TECLAS MENSIONADAS ANTERIORMENTE"+'\033[0;m') 
                        print("")
            else :
                print("") 
                print("\033[4;35;47m"+"ERROR : OPCION FUERA DE RANGO INTENTELO DE NUEVO"+'\033[0;m') 
                print("")        
        except Exception :
            print("")
            Exceptionmessage =" ERROR :LOS DATOS INTRODUCIDOS DEBEN NO DEBEN ESTAR VACIOS Y LOS DATOS QUE IMPLIQUEN NUMEROS DEBEN DE ESTAR CON NUMEROS NO TEXTO"
            print("\033[4;35;47m"+Exceptionmessage+'\033[0;m') 
            print("")
            
            

