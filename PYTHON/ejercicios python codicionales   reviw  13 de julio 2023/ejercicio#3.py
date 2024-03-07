"""
 En una determinada empresa, sus empleados son evaluados al final de cada año. Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando, traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas. A continuación se muestra una tabla con los niveles correspondientes a cada puntuación. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la puntuación del nivel.

Nivel                 Puntuación
Inaceptable  0.0
Aceptable    0.4
Meritorio    0.6 o más

Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento, así como la cantidad de dinero que recibirá el usuario.


"""

dineroMensual =2400

inaceptable = 0.0
aceptable   = 0.4
meritorio   = 0.6


puntuacionUsuario = float(input('ingrese su puntuacion actual :'))

if puntuacionUsuario >=inaceptable and puntuacionUsuario <=aceptable -0.1:
    print(dineroMensual * (inaceptable))
elif puntuacionUsuario >=aceptable and puntuacionUsuario <=meritorio -0.1:
    print(dineroMensual * (aceptable + 1) )
else:
    print(dineroMensual * (meritorio + 1))