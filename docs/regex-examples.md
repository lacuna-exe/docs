# Regex's

Things in the bot that currently accept regex
* Flows - Action (4- Regex Match)
* Regex Filters - Used to filter messages in the counting channel- specifcally for modules that repost the message.

## Common Regex's for flows

| Regex                             | Description             |
|:----------------------------------|:------------------------|
| ` (\d{0,}69[^0-9])|(\d{0,}69$) `  | Any number ending in 69 |

## Common Regex's for filters

| What  it filters                                         | Regex/ Resource                    |
|:---------------------------------------------------------|:-----------------------------------|
| Common things                                            |[IhateRegex](https://ihateregex.io/) |
| Duck or poop                                             | ` duck|poop `                        |
| Capital Letters                                          |  `[A-Z]`                           |
|  A, B, C, X, Y, Z - regardless if it's capital or not.   | `[A-Ca-cX-Zx-z]`                   |
 
Get info on how to create a regex [here](https://flaviocopes.com/javascript-regular-expressions/#regular-expressions-choices)
Test and expermient with new regex's [here](https://regexr.com/)
