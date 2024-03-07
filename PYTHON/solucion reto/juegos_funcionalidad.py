import operator
from datos_juego import datos ,datos_valoraciones



def buscar_juego (nombre_juego):
    for i in datos.keys():
        if nombre_juego.strip()==i.strip():
            return True
    return False
            
def consulta_juego (juego_data) :
    if datos =={} :
        print("")
        print("\033[4;35;47m"+"ERROR :NO SE PUEDE CONSULTAR UN BASE DE DATOS QUE ESTA VACIA REGISTRE UN JUEGO E INTENTE NUEVAMENTE"+'\033[0;m') 
        print("")
    else :
        juego_data =juego_data
        for i in datos :
            if juego_data ==datos[i]["tiempo_x_partida"] :
                print("")
                print(i)
                print("")
            """ else :
                print("\033[4;35;47m"+"ERROR :NO SE ENCONTRO UN JUEGO QUE SE ADAPTE A TUS NESESIDADES"+'\033[0;m') 

            """

def valoraciones_juego (juego_data) :
    juego_data = juego_data
    funcion_busqueda_juego =buscar_juego(juego_data[0])
    if funcion_busqueda_juego :
        try :
            with open("valoraciones_juego.txt","x")as file_create :
                pass
        except Exception :
            with open("valoraciones_juego.txt","a") as file_append :
                cadena =str(juego_data[0]) + "|" + str(juego_data[1])+"\n"
                file_append.write(cadena)   
    else :
        print(datos)
        print("")
        print("\033[4;35;47m"+"ERROR : EL JUEGO QUE DESEA VALORAR NO SE ENCUENTRA EN LA BASE DE DATOS"+'\033[0;m') 
        print("")
    
def ranking_juego () :
    dicaux ={}
    aux1 =[]
    aux2 = []
    resp = []
    with open("valoraciones_juego.txt","r") as file :
        file =file.readlines()
        for i in file :aux1.append(i.split("\n"))

        for  i in  aux1 :
            for j in i :
                if j!="":
                    aux2.append(j)
        for i in aux2 :
            resp.append(i.split("|"))
        
        for i in resp :
            if i[0] in dicaux:
                dicaux[i[0]]+=int(i[1])
            else :
                dicaux[i[0]] =int(i[1])
    
        dic_ord= sorted(dicaux.items(), key=operator.itemgetter(1), reverse=True)
        print(f"el rey numero 1 es {dic_ord[0]}")
        print(f"el rey numero 2 es {dic_ord[1]}")
        print(f"el rey numero 3 no menos importante {dic_ord[2]}")
           
def registrar_juego (juego_data):
    juego_data = juego_data
    funcionalidad_buscarJuego =buscar_juego(juego_data[0])
    if funcionalidad_buscarJuego !=True:
        print("")
        datos[juego_data[0]] ={"tiempo_x_partida":juego_data[1],"disponibilidad":juego_data[2],"cantidad_d_jugadores":juego_data[3]}
        print("\033[1;33m"+"EL JUEGO FUE REGISTRADO EN LA BASE DE DATOS"+'\033[0;m') 
        print("")
       
    else :
        print("")
        print("\033[4;35;47m"+"ERROR :EL JUEGO QUE DESEA REGISTRAR YA SE ENCUENTRA EN LA BASE DE DATOS POR FAVOR INTENTELO DE NUEVO"+'\033[0;m') 
        print("")
    

def modificar_juego (juego_data):
    juego_data = juego_data
    funcionalidad_buscarJuego =buscar_juego(juego_data[0])
    try:
        if funcionalidad_buscarJuego :
            
            if juego_data[1] ==1:
                print("")
                op_tiempo =int(input("INGRESA EL TIEMPO QUE DESEAS AGREGAR :"))
                print("")
                datos[juego_data[0]]["tiempo_x_partida"]=op_tiempo
                print("\033[1;33m"+"DATOS DE TIEMPO ACTUALIZADOS"+'\033[0;m') 
                print("")
                    
            elif juego_data[1] ==2 :
                print("")
                op_estado =input("QUIERES CAMBIAR EL ESTADO ACTUAL DEL JUEGO  PULSA Y / N PARA CONTINUAR :").lower()
                if op_estado =="y":
                    print("")
                    disponibilidad =False  
                    datos[juego_data[0]]["disponibilidad"]=disponibilidad
                    
                    print("\033[1;33m"+"DATOS DE DISPONIBILIDAD ACTUALIZADOS"+'\033[0;m') 
                    print("")
                elif op_estado =="n":
                    print("")
                    juego_data()
                    
                else :
                    print("")
                    print("\033[4;35;47m"+"ERROR DEBES DIGITAR UNA DE LAS 2 TECLAS MENSIONADAS ANTERIORMENTE"+'\033[0;m') 
                    print("")
                    
                    
            elif juego_data[1]==3 :
                print("")
                op_cantidad_jugadores =int(input("INGRESA LA NUEVA CANTIDAD DE JUGADORES QUE DESEAS AGREGAR :"))
                print("")
                datos[juego_data[0]]["cantidad_d_jugadores"]=op_cantidad_jugadores
                print("\033[1;33m"+"DATOS DE CANTIDAD ACTUALIZADOS"+'\033[0;m') 
                print("")
                                
        else :
            print("")
            print("\033[4;35;47m"+"ERROR :EL JUEGO QUE DESEA MODIFICAR NO SE ENCUENTRA EN LA BASE DE DATOS POR FAVOR REGISTRELO E INTENTE NUEVAMENTE"+'\033[0;m') 
            print("")

    except Exception :
        print("")
        Exceptionmessage =" ERROR :LOS DATOS INTRODUCIDOS DEBEN NO DEBEN ESTAR VACIOS Y LOS DATOS QUE IMPLIQUEN NUMEROS DEBEN DE ESTAR CON NUMEROS NO TEXTO"
        print("\033[4;35;47m"+Exceptionmessage+'\033[0;m') 
        print("")
    
    
        
# no le cree un menu a eliminar juego por que no lo vi nesesario
def eliminar_juego(): 
    print("")
    
    nombre_juego = input("INGRESA EL NOMBRE DEL JUEGO QUE DESEAS ELIMINAR :").lower()
    funcionalidad_buscar_juego = buscar_juego(nombre_juego)
    if funcionalidad_buscar_juego :
        print("HOLA")
        datos.pop(nombre_juego)       
        print("")
        print("\033[1;33m"+"JUEGO ELIMINADO EXITOSAMENTE "+'\033[0;m') 
        print("")
        
        
    else :
        print("")
        print("\033[4;35;47m"+"ERROR :EL JUEGO QUE DESEAS ELIMINAR  NO SE ENCUENTRA EN LA BASE DE DATOS REGISTRELO EN INTENTE NUEVAMENTE"+'\033[0;m') 
        print("")