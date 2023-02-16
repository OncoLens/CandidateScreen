# SDET - OncoLens Coding Challenge

This is the OncoLens coding challenge for SDET.

## Algorithm Implementation

### Overview

You task is to implement the `getMissingNumbersOrdered` function that takes as parameter an array of numbers and returns the list of the missing numbers in ascending order.

### Example

Example:

```
console.log(getMissingNumbersOrdered([1, 7, 3, 4, 9, 8, 11, 5, -1]));
```

Should returns:

```
 0,2,6,10
```


## Auto tests implementation


### Overview
Your task is to implement some auto tests to validate the login page of this website: https://www.saucedemo.com/


### Acceptance Criteria
The Product Owner is unfortunally sick and was not able to fill the Acceptances Criteria.
Fell free to define them !


## Code Review

A developer has pushed his changes into his branch and he assigned it to you for review.
The code is in `scenario.cy.ts` file

### Acceptance Criteria

 We want to verify these scenarios
 
 #### AC #1
 * Given I am logged in https://www.saucedemo.com/
 * When I add an article
 * Then The shopping card badge is updated
 
 #### AC #2
 * Given I am logged in https://www.saucedemo.com/
 * When I remove an article from the shopping card
 * Then The shopping card badge is updated



### Note
- Fell free to update the AC as well ;) 
- There is a mock class `ArticlesService`