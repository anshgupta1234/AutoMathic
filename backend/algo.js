function algo(problems) {
    version = {};
    version.problems = [];
    version.answers = [];
    for (var i = 0; i < problems.length; i++) {
        var problem = problems[i];
        var variables = problem.variables;
        var values = {};
        for (var j=0; j<variables.length; j++) {
           var lower = problem.ranges[variables[j]]['min'];
           var upper = problem.ranges[variables[j]]['max'];
           values[variables[j]] = Math.round(Math.random()*(upper-lower)+lower);
        }
        version.problems.push(values);
        version.answers.push(Math.round(Math.random()*100));
    }
    return version;
}

var test = {
    "problems": [
        {
            "question": "What is x+y+z?",
            "variables": [
                "x", "y", "z"
            ],
            ranges: {
                "x": {
                    "min": 0,
                    "max": 10
                },
                "y": {
                    "min": 0,
                    "max": 10
                },
                "z": {
                    "min": 0,
                    "max": 10
                }
            },
            "answer": "x+y+z"
        },
        {
            "question": "What is x*y*z?",
            "variables": [
                "x", "y", "z"
            ],
            ranges: {
                "x": {
                    "min": 0,
                    "max": 10
                },
                "y": {
                    "min": 0,
                    "max": 10
                },
                "z": {
                    "min": 0,
                    "max": 10
                }
            },
            "answer": "x*y*z"
        }
    ]
}
var version = algo(test.problems);
console.log(version);