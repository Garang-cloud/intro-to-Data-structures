//introduction to data structuresand procedural programming
// sum of all distinct elements from two sets
def sum_of_distinct_elements(set1, set2):
sum = 0
for element in set1:
if element not in set2:
sum += element
for element in set2:
if element not in set1:
sum += element
return sum

dot product of two vectors
def dot_product(vector1, vector2):
ps = 0
for i in range(len(vector1)):
ps += vector1[i] * vector2[i]
return ps
// sum of all elements in a list
def sum_of_elements(lst):
sum = 0


// checked if vectors are orthogonal
def
check_orthogonal(vector1, vector2):
for i in range(len(vector1)):
if vector1[i] * vector2[i] != 0:
return False
return True
for element in lst:
sum += element
return sum
// check if two vectors are equal
def check_equal(vector1, vector2):
if len(vector1) != len(vector2):
return False
for i in range(len(vector1)):
if vector1[i] != vector2[i]:
return False
return True
// check if two vectors are perpendicular

set1 = {1, 2, 3}
set2 = {3, 4, 5}
ddistinct_sum = sum_of_distinct_elements(set1, set2)
print("Sum of distinct elements:", distinct_sum)
def check_perpendicular(vector1, vector2):
for i in range(len(vector1)):
if vector1[i] * vector2[i] != 0:
return False
return True

vector_pairs = [(1, 2), (3, 4), (5, 6)]
check_orthogonal(vector_pairs[0], vector_pairs[1])
vector1 = [1, 2, 3]
vector2 = [4, 5, 6]
check_equal(vector1, vector2)
// check if two vectors are parallel
def check_parallel(vector1, vector2):
