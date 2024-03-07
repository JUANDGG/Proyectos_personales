""" 
 Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en una lista, pregunte al usuario la nota que ha sacado en cada asignatura y elimine de la lista las asignaturas aprobadas. Al final el programa debe mostrar por pantalla las asignaturas que el usuario tiene que repetir.
"""

#falta
asignaturas =[]

while True :
    print(" ")
    print("bienvenido")
    print("-- para salir en asignatura pulse s y de enter--")
    asignaruta = input("ingrese una asignatura :").lower()
    if asignaruta=='s' :break
    nota = int(input(f"ingrese una nota para {asignaruta} :"))
    asignaturas.append({asignaruta:nota})
    
promedio = int(input("de cuanto es el promedio para pasar ? :")) 

countIndex =[]
for i in range(len(asignaturas)):
    esValue = False
    for j in asignaturas[i]:
        if asignaturas[i][j] >=promedio:
            countIndex.append(asignaturas[i][j])
            

for i in countIndex:
    
    asignaturas.remove(i)
    
            
print(asignaturas)
        
        