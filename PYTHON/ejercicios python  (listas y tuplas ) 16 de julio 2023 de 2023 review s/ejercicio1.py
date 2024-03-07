""" 
1. Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en una lista, pregunte al usuario la nota que ha sacado en cada asignatura, y después las muestre por pantalla con el mensaje En <asignatura> has sacado <nota> donde <asignatura> es cada una des las asignaturas de la lista y <nota> cada una de las correspondientes notas introducidas por el usuario.
"""


asignaturas =[]

while True :
    print(" ")
    print("bienvenido")
    print("-- para salir en asignatura pulse s y de enter--")
    asignaruta = input("ingrese una asignatura :").lower()
    if asignaruta=='s' :break
    nota = float(input(f"ingrese una nota para {asignaruta} :"))
    asignaturas.append({asignaruta:nota})
    
    
for i in asignaturas :
    for j in i:
        print(f'en {j} has sacado {i[j]}')