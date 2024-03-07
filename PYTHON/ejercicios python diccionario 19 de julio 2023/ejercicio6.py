"""
Escribir un programa que gestione las facturas pendientes de cobro de una empresa. Las facturas se almacenarán en un diccionario donde la clave de cada factura será el número de factura y el valor el coste de la factura. El programa debe preguntar al usuario si quiere añadir una nueva factura, pagar una existente o terminar. Si desea añadir una nueva factura se preguntará por el número de factura y su coste y se añadirá al diccionario. Si se desea pagar una factura se preguntará por el número de factura y se eliminará del diccionario. Después de cada operación el programa debe mostrar por pantalla la cantidad cobrada hasta el momento y la cantidad pendiente de cobro    
    
    
"""

facturas = {}


def buscar_factura (numero_factura):
    try :
        if facturas =={} :print("NO SE PUEDE BUSCAR ALGO QUE ESTA VACIO INTENTELO DE NUEVO")
        for i in facturas :
            if numero_factura ==i :
                return True
        return False
    except Exception:
        print("")
        Exceptionmessage ="ERROR :DATOS NUMERICOS NO TEXTO O ESTAN VACIOS"
        print(Exceptionmessage)
        print("")


def registrar_fact () :
    print("")
    print("__BIENVENIDO A REGISTRAR FACTURAS__")
    try :
        
        numero_factura =int(input("INGRESA EL NUMERO DE LA FACTURA :"))
        mp_factura = buscar_factura(numero_factura)
        
        if mp_factura !=True:
            valor_factura =float(input("INGRESA EL VALOR DE LA FACTURA :"))
            facturas[numero_factura]=valor_factura
        return print("LA FACTURA QUE DESEA REGISTRAR YA ESTA REGISTRADA INTENTALO DE NUEVO")
    except Exception:
        print("")
        Exceptionmessage ="ERROR :DATOS NUMERICOS NO TEXTO O ESTAN VACIOS"
        print(Exceptionmessage)
        print("")

def paga_factura () :
    print("")
    print("__BIENVENIDO A PAGAR FACTURAS__")
    try :
        
        numero_factura =int(input("INGRESA EL NUMERO DE LA FACTURA :"))
        mp_factura = buscar_factura(numero_factura)
        #falta arreglar esto
        if mp_factura :
            facturas.pop(numero_factura)
            print("LA FACTURA SE PAGO EXITOSAMENTE !")
        else :print("LA FACTURA QUE DESEA PAGAR NO SE ENCUENTRA EN LA BASE DE DATOS!")
    except Exception:
        print("")
        Exceptionmessage ="ERROR :DATOS NUMERICOS NO TEXTO O ESTAN VACIOS"
        print(Exceptionmessage)
        print("")

def menu () :
    while True :
        print(facturas)
        print("__BIENVENIDO A FA.A")
        print("1. PARA REGISTRAR UNA FACTURA")
        print("2. PARA PAGAR UNA FACTURA")
        print("3. PARA SALIR")
        try :
            op =int(input("INGRESA UNA DE LAS ANTERIORES OPCIONES :"))
            if op in range(1,3+1):
                if op ==1 :registrar_fact()
                elif op ==2 :paga_factura()
                else :break

        except Exception :
            print("")
            Exceptionmessage ="TIENE QUE INGRESAR UNA OPCION NUMERICA BRO"
            print(Exceptionmessage)
            print("")

menu()

# y falta el punto 7
    


