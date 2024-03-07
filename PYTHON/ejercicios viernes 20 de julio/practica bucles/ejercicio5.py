"""  Muestra por pantalla cuántos alumnos suspendieron cada asignatura
    Realiza la media de las notas de cada alumno
    Muestra por pantalla los nombres de los alumnos que obtuvieron una nota media superior a 5
    
"""

calificaciones = {

    "Alumno 1": [
        {"asignatura": "Latin", "calificacion": 8},
        {"asignatura": "Castellano", "calificacion": 8},
        {"asignatura": "Francés", "calificacion": 9}, 
        {"asignatura": "Inglés", "calificacion": 4}
    ],

    "Alumno 2": [
        {"asignatura": "Latin", "calificacion": 7},
        {"asignatura": "Castellano", "calificacion": 6}, 
        {"asignatura": "Francés", "calificacion": 7}, 
        {"asignatura": "Inglés", "calificacion": 2}],

    "Alumno 3": [
        {"asignatura": "Latin", "calificacion": 10}, 
        {"asignatura": "Castellano", "calificacion": 7}, 
        {"asignatura": "Francés", "calificacion": 8}, 
        {"asignatura": "Inglés", "calificacion": 9}],

    "Alumno 4": [
        {"asignatura": "Latin", "calificacion": 4},
        {"asignatura": "Castellano", "calificacion": 4}, 
        {"asignatura": "Francés", "calificacion": 3},
        {"asignatura": "Inglés", "calificacion": 2}],

    "Alumno 5": [
        {"asignatura": "Latin", "calificacion": 9}, 
        {"asignatura": "Castellano", "calificacion": 8},
        {"asignatura": "Francés", "calificacion": 9}, 
        {"asignatura": "Inglés", "calificacion": 6}],

}



def media ():
    sumMedia =0
    countMedia =0
    for i in calificaciones:
        for j in calificaciones[i]:
            countMedia +=1
            sumMedia +=j["calificacion"]
        
        mediaAric = int((sumMedia/countMedia))
        print(f"la media del alumno {i} es {mediaAric}")
        print(" ")
        if mediaAric > 5 :print(f"el alumno {i} saco mas de 5")
        sumMedia =0
        countMedia=0
media()