# **CLIENT DOCUMENTATION**

[documentation](../documentation.md)

## **USERSERVICE**

*Methods that make ``requests`` to the SportSee ``API`` asynchronously*

### **.findID(id)**
*Retrieve User data from an `ID` (Personal information, daily score and count data)*

**Return: `json`**

### **.getAvarageSession(id)**

*Retrieve user data from an ``ID``
(session times per week)*

**Return: `json`**

### **.getActivity(id)**

*Retrieve user data from an ``ID``
(Kilograms and calories per day)*

**Return: `json`**

### **.getPerf(id)**

*Retrieve user data from an ``ID``
(user performance like endurance, speed, cardio and etc...)*

**REPONSE (EXEMPLE)**

```json
"userId": 12,
    "kind": {
        "1": "cardio",
        "2": "energy",
        "3": "endurance",
        "4": "strength",
        "5": "speed",
        "6": "intensity"
    },
    "data": [
        {
            "value": 80,
            "kind": 1
        },
        {
            "value": 120,
            "kind": 2
        },
        {
            "value": 140,
            "kind": 3
        },
        {
            "value": 50,
            "kind": 4
        },
        {
            "value": 200,
            "kind": 5
        },
        {
            "value": 90,
            "kind": 6
        }
    ]
```

**Return: `json`**

## **Router**

*Client application router used to display pages.*

* `/` | *Displays the [Home page](http://localhost:3000)*

* `/user/:id` | *Displays the [User (12) page](http://localhost:3000/udrt/12)*

* `Not found` | *Displays page 404*

## **Components**

*The ``client`` application was developed with [React](https://fr.reactjs.org/) and its **components** for the ``Header``, ``Analytics`` and etc...*


1- **Component** `Aside`.

2- **Component** `Header`.

3- **Components** `Analytics`.