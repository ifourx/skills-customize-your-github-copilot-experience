# 📘 Assignment: Python Data Structures

## 🎯 Objective

Master Python's core data structures — lists, dictionaries, and sets — through practical exercises involving list comprehensions, dictionary transformations, and set operations.

## 📝 Tasks

### 🛠️ List Comprehensions and Transformations

#### Description
Write functions that use list comprehensions to transform and filter data, replacing traditional for-loop patterns with more concise and readable Python code.

#### Requirements
Completed program should:

- Write a function `square_evens(numbers)` that returns a list of squares for only the even numbers using a single list comprehension
- Write a function `capitalize_words(words)` that returns a new list with each word capitalized, using a list comprehension
- Write a function `flatten_matrix(matrix)` that flattens a 2D list (list of lists) into a 1D list using a nested list comprehension
- Example:
  ```python
  square_evens([1, 2, 3, 4, 5])   # [4, 16]
  capitalize_words(["hello", "world"])  # ["Hello", "World"]
  flatten_matrix([[1, 2], [3, 4, 5]])  # [1, 2, 3, 4, 5]
  ```

### 🛠️ Dictionary Operations and Frequency Counts

#### Description
Create functions that manipulate dictionaries — merging data, counting frequencies, and inverting key-value pairs.

#### Requirements
Completed program should:

- Write a function `word_frequencies(text)` that takes a string and returns a dictionary with each word as a key and its count as the value
- Write a function `merge_dicts(dict1, dict2)` that merges two dictionaries; if keys overlap, sum their values
- Write a function `invert_dict(d)` that swaps keys and values, handling duplicate values by storing them in a list
- Example:
  ```python
  word_frequencies("the cat and the dog")  # {"the": 2, "cat": 1, "and": 1, "dog": 1}
  merge_dicts({"a": 1, "b": 2}, {"b": 3, "c": 4})  # {"a": 1, "b": 5, "c": 4}
  invert_dict({"a": 1, "b": 2, "c": 1})  # {1: ["a", "c"], 2: ["b"]}
  ```

### 🛠️ Set Operations

#### Description
Write functions that use sets to perform common operations — finding unique elements, identifying overlaps, and comparing collections.

#### Requirements
Completed program should:

- Write a function `unique_elements(lst)` that returns a sorted list of unique elements using a set
- Write a function `common_elements(list1, list2)` that returns a sorted list of elements appearing in both lists
- Write a function `missing_items(full_set, subset)` that returns elements in `full_set` that are not in `subset`
- Example:
  ```python
  unique_elements([3, 1, 2, 1, 3, 4])  # [1, 2, 3, 4]
  common_elements([1, 2, 3], [3, 4, 5])  # [3]
  missing_items({1, 2, 3, 4}, {2, 4})  # [1, 3]
  ```

### 🛠️ Comprehensive Application: Inventory Manager

#### Description
Combine list, dictionary, and set skills into an inventory management system that tracks products, processes orders, and reports stock status.

#### Requirements
Completed program should:

- Maintain an inventory dictionary mapping product names to quantities in stock
- Write a function `add_product(inventory, name, quantity)` that adds or updates a product
- Write a function `process_order(inventory, order_list)` that accepts a list of product names and reduces stock for each, returning a list of out-of-stock items if any are unavailable
- Write a function `stock_report(inventory)` that returns three lists: products with zero stock, low stock (quantity ≤ 5), and fully stocked (quantity > 5)
- Example:
  ```python
  inv = {}
  add_product(inv, "apple", 10)
  add_product(inv, "banana", 3)
  process_order(inv, ["apple", "banana", "apple"])  # returns []
  stock_report(inv)  # ([], ["banana"], ["apple"])
  ```
