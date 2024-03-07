""" 

Escribir un programa que pregunte por una muestra de números, separados por comas, los guarde en una lista y muestre por pantalla su promedio.

"""

    
nums = input("ingrese un numero separados por comas :")
arr = nums.split(',')

count =0
countNumber =0
for i in arr :
    try:
        number = int(i)
        count +=number
        countNumber+=1
    except Exception:
        continue


print(count/countNumber)