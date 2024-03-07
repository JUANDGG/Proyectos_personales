""" 
Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, y diga al final cuántos han sido pares y cuántos impares

"""

counPar = 0
counImpar =0

entry = int(input("por favor indicame cuantos numeros vas a introducir :"))
for i in range(1,entry + 1):
    number = int(input(f'ingresa el numero  {i} :'))
    if i % 2 !=0 :counImpar+=1
    else :counPar+=1
    
print(f"hay {counPar} numeros pares 🎈")
print(f"hay {counImpar} numeros impares 🛶")