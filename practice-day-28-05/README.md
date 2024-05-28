# Comprehensive Guide to Regular Expressions (Regex) in JavaScript

## Introduction

Regular expressions, often abbreviated as regex or regexp, are powerful tools for pattern matching and text manipulation in JavaScript. This comprehensive guide will cover the basics of regex and delve into advanced usage scenarios in JavaScript.

## Getting Started

### Syntax Basics

Regex patterns consist of normal characters and special characters with specific meanings:

- `^` - Start of input
- `$` - End of input
- `.` - Any single character except newline
- `*` - Zero or more occurrences
- `+` - One or more occurrences
- `?` - Zero or one occurrence
- `[]` - Character set
- `[^]` - Negated character set
- `\d` - Digit (0-9)
- `\w` - Word character (a-z, A-Z, 0-9, underscore)
- `\s` - Whitespace character (space, tab, newline)
- `\b` - Word boundary

### Flags

Flags modify regex behavior:
- `g` - Global search (find all matches)
- `i` - Case-insensitive search
- `m` - Multi-line search

## Basic Examples

### Matching Patterns

- Match email addresses: `/\w+@\w+\.\w+/`
- Match phone numbers: `/(\d{3})-(\d{3})-(\d{4})/`
- Match URLs: `/https?:\/\/\w+\.\w+/`

### Using Regex Methods in JavaScript

JavaScript provides several methods for working with regex:
- `test()`: Tests if a pattern matches a string.
- `exec()`: Returns match information.
- `match()`: Returns an array of matches.
- `replace()`: Replaces matches with a new string.
- `split()`: Splits a string into an array based on matches.

```javascript
const text = "Hello, my email is user@example.com";
const pattern = /\w+@\w+\.\w+/;
const isMatch = pattern.test(text); // true
const matchInfo = pattern.exec(text); // ["user@example.com"]
const matches = text.match(pattern); // ["user@example.com"]
const replacedText = text.replace(pattern, "REDACTED"); // "Hello, my email is REDACTED"
const parts = text.split(pattern); // ["Hello, my email is ", ""]
