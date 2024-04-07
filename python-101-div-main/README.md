# Python 101
An intro to python for a DIV session

* Install [Python 3.10.0](https://www.python.org/downloads/) or later
* You could use an online python [IDE](https://www.python.org/downloads/)
* Install VSCode or PyCharm Community Edition [here](https://www.jetbrains.com/products/compare/?product=pycharm&product=pycharm-ce)

#### Check the python version
```shell
python --version
```
#### Create and activate the Python environment
 Read more about creating envs [here](https://python.land/virtual-environments/virtualenv)
```shell
python -m venv .env

# on macOS and Linux:
source .env/bin/activate

# on Windows:
.env\Scripts\activate.bat
```

#### To run a python program, use the command below with the filename
```shell
python main.py
```

### The Zen of python
Read about it [here](https://peps.python.org/pep-0020/)
```shell
# inside the python shell. 
import this

# it prints this
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```
