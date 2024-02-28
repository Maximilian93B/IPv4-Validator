# Title: Validating IPv4 Addresses with Regx 

![Validating IPv4 Addresses with Regex](./images//Toolbaricon_RegEx.svg.png)


In this tutorial, we will explore how to use Regular Expressions (Regex) to validate IPv4 addresses. If you are unsure what IPv4 addresses are, don't stress. We will cover that too. We will dissect a regex pattern specifically designed to match IPv4 addresses, explaining each step along the way and how each part of the pattern contributes to the validation of the address format


## Summary 

This tutorial will guide you through the regex pattern:
``bash``
"^(\d{1,3}\.){3}\d{1,3}$" 

This pattern is used to validate IPv4 addresses, ensuring that an address consists of four octets (the numbers ranging from 0 to 255) separated by dots. We will explain how the pattern works and why it can effectively match valid IPv4 addresses.


## Table of Contents
- [IPv4 Addresses](#IPv4)
- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## What is an IPV4 Address?

Think of an IPv4 address as a home address for your computer on the internet. Just like the post office uses your home address to deliver mail, the internet uses an IPv4 address to send information to the correct computer or device.

An IPv4 address looks like a series of four numbers separated by dots, for example, 192.168.1.1. Each number can range from 0 to 255. This unique number ensures that when you request a webpage or send an email, it goes exactly where it's supposed to go.

Now that we have a basic understanding of what an IPv4 Address is and how it's used, let's dive into the Regex Components.

## Regex Components

### Anchors 
^ and $ are anchors that match the beginning and end of the string, ensuring the entire string conforms to the IPv4 pattern.

 "`^`(\d{1,3}\.){3}\d{1,3}`$`"

### Quantifiers 

`{1,3}` is a quantifier that matches between one and three digits, representing each octet in the IPv4 address.

### Grouping Constructs

`(\d{1,3}\.)` is a grouping construct that matches an octet followed by a dot. This group is repeated exactly three times to match the first three octets.

### Character Classes 

`\d` is a character class that matches any digit (0-9), used here to match the numerical part of each octet.


### Character Escapes 

The dot `.` is escaped as `\.` to match the literal dot character, since unescaped dots in regex match any character.

## Use Case 

Make sure to checkout my GitHub Repo (https://github.com/Maximilian93B/IPv4-Validator)



## Conclusion 

Validating IPv4 addresses with regex ensures that the addresses you're working with are in the correct format. It's similar to checking if a phone number has the correct number of digits before making a call! The regex pattern ^(\d{1,3}\.){3}\d{1,3}$ is a tool used to do exactly that, enhancing data integrity and network configuration processes (for the techies).

## Author 

Thank you for making it this far. Writing out regular expressions like this helps me understand the concepts and structure of the expressions used. Cybersecurity is a growing curiosity and passion of mine, and this was a fun way to cover a basic concept of IPv4 and how regex can be used to validate and match addresses.
