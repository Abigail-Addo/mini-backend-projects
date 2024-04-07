# Build a system that accepts the numeric months of the year (1 - 12) and based on the input, print the name of the month (January - December).

# Abigail
# months = {
#     "Jan": 1,
#     "Feb": 2,
#     "Mar": 3,
#     "Apr": 4,
#     "May": 5,
#     "Jun": 6,
#     "Jul": 7,
#     "Aug": 8,
#     "Sep": 9,
#     "Oct": 10,
#     "Nov": 11,
#     "Dec": 12,
# }

# month_number = int(input("Enter the number: "))

# # chained comparison in python
# if 1 <= month_number <= 12:
#     for key, value in months.items():
#         if value == month_number:
#             print(f"Month: {key}")
# else:
#     print("Invalid month number. Please enter a number between 1 and 12.")

# Francis
months = {
    1: "Jan",
    2:"Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
}

value = int(input("Enter the month number (1 - 12): " ))
print(months.get(value, "Month is invalid"))


# using the match case statement
match value:
    case 1:
        print("Jan")
    case _:
        print("Month is invalid")






















