
Empresas = {

    "Empresa 1": [
        {"departamento": "Recursos Humanos", "empleados": 5}, 
        {"departamento": "Contabilidad", "empleados": 4}, 
        {"departamento": "Ventas", "empleados": 10}, 
        {"departamento": "Operaciones", "empleados": 25}],

    "Empresa 2": [
        {"departamento": "Recursos Humanos", "empleados": 10}, 
        {"departamento": "Contabilidad", "empleados": 15}, 
        {"departamento": "Ventas", "empleados": 25},
        {"departamento": "Operaciones", "empleados": 41}
        ],

    "Empresa 3": [
        {"departamento": "Recursos Humanos", "empleados": 8}, 
        {"departamento": "Contabilidad", "empleados": 20}, 
        {"departamento": "Ventas", "empleados": 32}, 
        {"departamento": "Operaciones", "empleados": 52}],

    "Empresa 4": [
        {"departamento": "Recursos Humanos", "empleados": 5}, 
        {"departamento": "Contabilidad", "empleados": 8}, 
        {"departamento": "Ventas", "empleados": 15}, 
        {"departamento": "Operaciones", "empleados": 29}],

    "Empresa 5": [
        {"departamento": "Recursos Humanos", "empleados": 20}, 
        {"departamento": "Contabilidad", "empleados": 35}, 
        {"departamento": "Ventas", "empleados": 58}, 
        {"departamento": "Operaciones", "empleados": 97}],

}

#Mostrar el promedio de empleados por departamento (teniendo en cuenta todas las empresas para cada calculo)


def promedio ():
    departamentos = {}
    for i in Empresas.values():
        for j in i :
            dpto = j["departamento"]
            emple =j["empleados"]

            if dpto in departamentos:
                departamentos[dpto]["empleados"]+=emple
                departamentos[dpto]["total_empresas"]+=1
            else :
                departamentos[dpto]={"empleados":emple,"total_empresas":1}

    print(departamentos)
        
    for i in departamentos.items():
        print(f"el departamento de {i[0]} tiene un promedio de empleados de {i[1]['empleados']/i[1]['total_empresas']}")



#Mostrar cuántas empresas tienen el doble o más del doble de empleados en operaciones con respecto a ventas
def doble ():
    doble =[]
    dpto1="Operaciones"
    dpto2 ="Ventas"

    empl1 =0
    empl2=0
    for i in Empresas:
        for j in Empresas[i]:
            if j["departamento"]==dpto1:
                empl1+=j['empleados']
                
            if j["departamento"]==dpto2:
                empl2+=j['empleados']
                

        print(empl1,empl2)

        if empl1 >(empl2 *2):
            print(i)
        empl1=0
        empl2=0
    
        
    print(doble)



#Mostrar una nueva estructura de datos reorganizada donde las llaves del diccionario principal no sea empresas sino por departamento.

def organizacion ():
    newDiccionari = {}
    for i in  Empresas.items():
        for j in i[1] :
            dpto = j["departamento"]
            emple =j["empleados"]

        if dpto in newDiccionari:
            for i in dpto:
                print(i)
            
        else:
            newDiccionari[dpto] =[{"empresa":i[0],"empleados":emple}]

organizacion()