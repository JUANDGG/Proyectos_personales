"""
Escribir una función que calcule el total de una factura tras aplicarle el IVA. La función debe recibir la cantidad sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura. Si se invoca la función sin pasarle el porcentaje de IVA, deberá aplicar un 21%.
"""

def iva (totalSinIva,iva):
    return print(f"el iva de {totalSinIva} es de {(1+(iva/100))*totalSinIva}")

iva(50000,19)