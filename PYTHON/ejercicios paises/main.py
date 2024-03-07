import json


def cargar_paises () :
    try:
        with open("ejercicios paises/paises.json", "r" ,encoding='UTF8', ) as archivo:
            datos = json.load(archivo)
            return datos["paises"]
    except Exception as e:
        print(e)



auxDic ={}

def menu () :
    ejecucion = True
    while ejecucion :
        print("")
        print("1 . LISTAR TODOS LOS PAISES")
        print("2 . TRAER PAIS POR NOMBRE")
        print("3 . PAIS CON MAYOR POBLACION")
        print("4 . PAIS CON MENOR AREA")
        print("5 . CONTINENTE Y TODOS LOS PAISES DE ESTE")
        print("6 . SALIR")
        try : 
            op =int(input("INGRESA UNA OPCION :"))
        except Exception :
            print("")
            print("OCURRIO UN ERROR")
        else :
            if not op in range(1,6+1 ):print("NO ESTA EN EL RANGO")
            
            datos = cargar_paises()
            for  i in datos :
                if op ==1 :
                    print("")
                    print(i,"\n")

                elif op ==2 :
                    pais = input("ingresa el nombre del pais :").lower().strip()
                    if pais !="" :
                        if pais ==i["nombre"].lower().strip() :
                            print(i)
                    else :print("no se encontro el pais buscado")
                    break
                elif op ==3 :
                    poblacion_maxima = max(datos, key=lambda indice: indice["poblacion"])
                    print(poblacion_maxima)
                    break
                elif op ==4 :
                    area_minima = min(datos, key=lambda indice: indice["area"])
                    print(area_minima)
                    break
                elif op==5 :
                    #falta el de los paises continenete
                    if  i["continente"] in auxDic :
                        auxDic[i["continente"]]["paises"].append(i)

                    else : auxDic[i["continente"]]={"paises":[i]}
                    
                elif op==6 :
                    ejecucion = False
menu()
print(auxDic)