#  classes

# user information : name, age, date_of_birth

user = {
    "name": "Adwoa",
    "age": 25,
    "date_of_birth": "1998-12-31"

}

# functions that belongs to a class are called methods
# importance of classes = you can put together functions that are doing the same thing/ operates around the user domain
class User:
    # constructor
    def __init__(self, name: str, age: int) -> None:
        # pass
        self.name = name
        self.age = age

        # if you want to make something private use an underscore _ or double underscores __
        # self._name = name
        # self.__age = age

    def greet(self) -> None:
        print(f"Welcome to the app {self.name}")
    
    def can_vote(self) -> bool:
        return self.age >= 18
    
    def save(self) -> bool:
        # save into a database
        print("User saved successfully")
        return "123"
    

# instantiating a class
# User()
user = User("Adwoa", 25)
# user = User(name="Adwoa", age=25)
user.greet()
print(user.name)
user.name = "Nana"
user.greet()
print(user.can_vote())
user.save()



#  dataclasses
from dataclasses import dataclass
# import datetime
# import dataclasses

# decorators
@dataclass
# @dataclasses.dataclass
class Student:
    name: str
    level:int
    gender: str
    programme: str

    def greet(cls) -> None:
        print(f"Welcome to the app {cls.name}")

student = Student("Adwoa", 200, "female", "Computer Science")
print(student.programme)
student.programme = "IT"
print(student.programme)
student.greet()