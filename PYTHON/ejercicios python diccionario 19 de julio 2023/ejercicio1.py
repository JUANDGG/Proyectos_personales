""" 
1. Escribir un programa que guarde en una variable el diccionario {'Euro':'€', 'Dollar':'$', 'Yen':'¥'}, pregunte al usuario por una divisa y muestre su símbolo o un mensaje de aviso si la divisa no está en el diccionario

"""

divisas = {
    'euro':"€",
    'dollar':"$",
    'yen':"¥"
}

def getDataUser (divisa) :
    for i in divisas:
        if(divisa != i):return print("la divisa no fue encontrada")
        return print(f"la divisa encontrada  corresponde a {divisas[i]} ")
    
getDataUser("euro")