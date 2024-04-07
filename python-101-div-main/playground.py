# build an app that accepts a number of student scores, prints back the scores and calculates the sum of it.
scores: str = input("Enter scores seperated by a single space: ")

# todo: handle exceptions
scores_in_str: list[str] = scores.split(" ")
scores_in_int: list[int] = []
for score in scores_in_str:
    scores_in_int.append(int(score))

print("Your scores:", scores_in_int)
print("Total scores is: ", sum(scores_in_int))


# Build a system that accepts the numeric months of the year (1 - 12) and based on the input, print the name of the month (January - December).


# name = input("Name of Student 🌚: ")
# print(f"Your name is {name} 🔥")

# answer = input("What is the capital of Ghana 🇬🇭? ")

# if answer.upper() == "Accra".upper():
#     print("yaayyyyyy, you got it. 🐓")
# else:
#     print("noppeee, it's wrong. 😭")