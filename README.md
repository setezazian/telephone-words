# Telephone words

Write a function that takes up to four digits of a phone number, and
returns a list of all of the words that can be written on the phone with
that number. (You should return all permutations, not only English words.)

Example:
```
  telephoneWords('2745');
  => ['APGJ',
      'APGK',
      'APGL',
      ..., // many many more of these
      'CSIL']
```

Tips:
  - Phone numbers are strings! (A phone number can start with a zero.)
  - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  - Don't return every combination of those digits in any order, just the order given.

