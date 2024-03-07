eventos ={}
participantes ={}

def buscar(llave) :
    if participantes !={} :
        for  i in participantes.keys():
            auxiterador =str(i).lower().strip()
            auxllave =str(llave).lower().strip()
            if auxllave ==auxiterador :return True
        else:return False    
    

#registrar participantes
def registrar_participantes (documento, nombre, apellido,edad, cargo) :
    if buscar(documento) :print("NO SE PUEDE AGREGAR EL PARTICIPANTE PORQUE SE ENCUENTRA REGISTRADO")
    else :
        participantes[documento] ={"nombre":nombre, "apellido":apellido,"edad":edad,"cargo":cargo,"deuda":False}
        print("participante registrado exitosamente")
    
def eliminar_participante (documento) :
    if buscar(documento) :
        if participantes[documento]["deuda"]!=True :
            participantes.pop(documento)
            print("participante eliminado exitosamente")
        else :print("EL PARTICIPANTE NO SE PUEDE ELIMINAR POR QUE YA PAGO")
    else :print("el usuario que quiere eliminar no se encuentra registrado")

def pagar_aporte (documento,nombre_evento):
    bq_documento =buscar(documento)
    if bq_documento :
        participantes[documento]["deuda"]=True
        print("PAGO EXITOSO")
    else : print("el usuario o evento propuestos no se encuentran en la base de datos")

#parte eventos

def agregar_evento (nombre_evento,ubicacion,fecha) :
    if buscar(nombre_evento) :print("NO SE PUEDE AGREGAR EL EVENTO POR QUE YA SE ENCUENTRA REGISTRADO")
    else :
        eventos[nombre_evento]={"ubicacion":ubicacion,"fecha":fecha,"se_realizo":False}
        print("evento agregado exitosamente")
    
def modificar_evento (nombre_evento,lo_q_va_a_modi,data_modificada) :
    if buscar(nombre_evento) :
        if eventos[nombre_evento]["se_realizo"]!=True :
            eventos[nombre_evento][lo_q_va_a_modi] =data_modificada
            print("evento modificado exitosamente")
        else : print("no se puede modificar un evento que ya se realizo")
        
    else : print("NO SE PUEDE MODIFICAR UN EVENTO QUE NO EXISTE")
    
def eliminar_evento (nombre_evento) :
    if buscar(nombre_evento) :
        if eventos[nombre_evento]["se_realizo"]!=True :
            eventos.pop(nombre_evento)
            print("evento eliminado exitosamente")
        else : print("no se puede quitar a alguien que ya pago")
    else :print("el evento que quiere eliminar no se encuentra registrado")
    
    
#deudores 

def deudores () :
    print("")
    print("__DEUDORES__")
    contar =0
    for i in participantes :
        if participantes[i]["deuda"] !=True :
            print("")
            print(participantes[i])
            contar +=1  
    print(f"la deuda global de estos individuos asiende a {contar*50000}")