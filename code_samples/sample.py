import re

class MyClass:
    def __init__(self):
        self.my_variable = 1
        self.my_constant = 2

    def my_method(self):
        print("Hello World")

    def my_arrow_function(self, x):
        return x * 2

    def my_interface(self):
        pass

class MyOtherClass(MyClass):
    def __init__(self):
        super().__init__()

    def my_method(self):
        print("Hello Universe")

my_object = MyOtherClass()
print(my_object.my_variable)
print(my_object.my_constant)
my_object.my_method()
print(my_object.my_arrow_function(3))


class FileReader:
    def __init__(self, filename):
        self.filename = filename

    def read(self):
        with open(self.filename) as f:
            return f.read()

class WordCounter:
    def __init__(self, text):
        self.text = text

    def count_words(self):
        pattern = r'\b[A-Z]\w*\b'
        words = re.findall(pattern, self.text)
        counts = {}
        for word in words:
            if word in counts:
                counts[word] += 1
            else:
                counts[word] = 1
        return counts

if __name__ == '__main__':
    reader = FileReader('example.txt')
    text = reader.read()
    counter = WordCounter(text)
    counts = counter.count_words()
    for word, count in counts.items():
        print(f"{word}: {count}")





class Vampire:
  def __init__(self, props):
    self.location = props['location']
    self.birthDate = props['birthDate']
    self.deathDate = props['deathDate']
    self.weaknesses = props['weaknesses']
    

  def get_age(self):
    return self.calc_age()

  def calc_age(self):
    return self.deathDate - self.birthDate
  
  for key in invalidControls.keys():
    this.errorMessages[key]["message"] = this.labels.errors.VA0006
    this.errorMessages[key]["hasError"] = True
    if exception is not None and len(exception.errors) > 0:
        print("hello")



# ...there was a guy named Vlad

Dracula = Vampire({
  'location': 'Transylvania',
  'birthDate': 1428,
  'deathDate': 1476,
  'weaknesses': ['Sunlight', 'Garlic']
})

lightSensible = True