# build an app that accepts a number of student scores, prnts back the scores and calculate the sum of it

scores: str = input("Enter scores separated by a single space: ")

scores_in_str: list[str] = scores.split(" ")
scores_in_int: list[int] = []
for score in scores_in_str:
# changing a sring to integer
    scores_in_int.append(int(score))

print("Your scores:", scores_in_int)
print("Total score is:", sum(scores_in_int))


#accepts an inputs from people
# name = input("Name of Student")
# print(f"Your name is ${name}")

# answer = input("What is the capital of Ghana?")

# if answer.upper() == "Accra".upper(): 
#     print("Yaaayyyy, you got it.")
# else: 
#     print("Nope, it's wrong.")

