import json
import csv


def buscar_archivo (ruta) :
    ruta = str(ruta)
    try :
        with open(ruta,"r") as archivo :
            return True
    except FileNotFoundError as error_d_existencia :
        return False
        

def crear_archivo (ruta,extencion) :
    ruta = str(ruta)
    extencion =str(extencion).lower()
    if buscar_archivo(ruta + extencion) :print("NO SE PUDE CREAR EL ARCHIVO POR QUE YA EXISTE EN LA RUTA")
    else :
        if extencion == ".csv"  or  extencion == ".json"  or extencion == "txt":
            with open(ruta + extencion ,"x") as archivo :
                pass
        else :print("NO SE PUDE CREAR EL ARCHIVO POR QUE NO SE PUEDE CREAR UN ARCHIVO DIFERENTE DE EXTENCION O TXT CSV JSON")
    


def leer_archivo (ruta,extencion) :
    ruta = str(ruta)
    extencion =str(extencion).lower()
    if buscar_archivo(ruta + extencion) :print("NO SE PUDE LEER EL ARCHIVO EN LA RUTA POR QUE EL ARCHIVO NO SE A CREADO POR FAVOR CREELO E INTENTE NUEVAMENTE")
    else :
        with open(ruta + extencion  ,"r",encoding="UTF8") as archivo :
            
            if extencion ==".json" :
                datos =json.load(archivo)
                return datos
            
        
            elif extencion ==".csv" :
                datos =csv.reader(archivo)
                return datos
                
            
            elif extencion ==".txt" :
                datos =archivo.readlines()
                return datos 
                
            else :print("NO SE PUEDE  AGREGAR UN ARCHIVO CON OTRA EXTENCIO QUE  NO SEA TXT CSV JSON")
    
    


def mandar_data_archivo (ruta,extencion,data) :
    ruta = str(ruta)
    extencion = str(extencion).lower()
          
    if buscar_archivo(ruta + extencion ) :
        with open(ruta + extencion  ,"a",encoding="UTF8") as archivo :
            
            if extencion ==".json" :
               json.dump(data,archivo)
        
            elif extencion ==".csv" :
                csv.writer(str(data))
                
            elif extencion ==".txt" :
                archivo.write(str(data))
                
                
            else :print("NO SE PUEDE  AGREGAR  UN ARCHIVO CON OTRA EXTENCIO QUE  NO SEA TXT CSV JSON")
    else :
        print("NO SE PUDE MANDAR NADA  A UN ARCHIVO QUE NO EXISTE")

                

#mandar_data_archivo("ejercicio empresa/personal",".json",{"hola":"que mas"})

crear_archivo("ejercicio empresa/personal",".csv")
mandar_data_archivo("ejercicio empresa/personal",".csv",)