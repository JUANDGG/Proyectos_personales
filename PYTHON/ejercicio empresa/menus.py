def menu_principal () :
    print("")
    print("1. EMPLEADOS")
    print("2. ASISTENCIA")
    print("3. SALIR")
    try :
        op =int(input("INGRESE UNA OPCION :"))
    except Exception as e :
        print("ERROR")
    else :
        if not op in range(1,3+1) : print("ERROR :OPCION NO VALIDA")
        
            