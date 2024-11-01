## PROBLEM-1  
---
>> the align items property was not working for container

** solution **
---
```The align-items property in a flex container aligns flex items along the cross axis (vertically in a column layout or horizontally in a row layout). For align-items to position items correctly, the parent container (in this case, the body element) must have a defined height. If the height is not explicitly set, the body will only be as tall as its content, which can prevent the flex alignment properties from working as expected.```
---
