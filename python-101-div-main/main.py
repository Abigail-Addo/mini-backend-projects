print("Hello World!")

# primitive data types
# int, float, str, bool, None
age = 20 # const age = 24
age: int = 20
weight: float = 70.5 # weight = 70.5
name: str = "John" # name = "John" 
is_active: bool = True # is_active = True, is_active = False
weather: None = None # weather = None
print(age, weight, name, is_active, weather)
# print(type(age))

# using str REPL - Read Evaluate Print Loop
print(name.capitalize())
print(name.upper())
print(name.lower())

# list, tuple, set, dict (collections)
names = ["John", "Jane", "Jack", "John"] # names: list[str] = ["John", "Jane", "Jack"]
ages = [20, 30, 40] # ages: list[int] = [] or use list()
print(names)
print(ages)
print(names[0])
print(len(names))

# tuple
point = (-3, 5) # point: tuple[int, int] = (-3, 5)
print(point)
print(point[0], point[1]) # x, y = point # tuple destructuring

# set
names = {"John", "Jane", "Jack", "John"} # names: set[str] = {"John", "Jane", "Jack"}
print(names)

numbers = [2, 3, 4, 2, 3, 4, 4,4, 8, 9]
unique_numbers = set(numbers)
print(numbers, unique_numbers)

# dict
person = {"name": "John", "age": 23, "is_active": True} 
print(person)
print(person["name"])
print(person.get("contact", "N/A"))
person["name"] = "Jane"
print(person)

# functions // js: const add = (a, b) => a + b or function addANumber(a, b) { return a + b }
def say_hello():
    print("Hello World!")

say_hello()

def add(x: int, y: int) -> int:
    return x + y

sum = add(3, 2)
print(sum)
# loops
alphabets = ["a", "b", "c"]
for alphabet in alphabets:
    print(alphabet)

for value in [1, 4, 5]:
    print(value)
# const name = "james" in js
# `hello ${name}`
for x in range(0, 10, 2):
    print(f"counting {x}")

person2 = {"name": "John", "age": 23, "is_active": True}
for key, value in person2.items():
    print(f"{key} => {value}")

is_running = True
while is_running:
    print("this is running forever")
    is_running = False

if is_running:
    print("is running is true")
# elif is_running and is_raining:
    # print("it")
else:
    print("is running is false")

# dataclasses

# pytest introduction

# fastapi introduction