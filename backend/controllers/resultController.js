import result from '../models/result.js';


// COntroller for half test given by user
const getRecommendations = async (req, res) => {
    try {
        const questions = req.body.questions;
        var attempted = 0, correct = 0, total = questions.length, marks = 0;
        var tags = {
            "Stacks and Queues": 0,
            "Graph": 0,
            "Array": 0,
            "Linked List": 0,
            "Hashing": 0,
            "Tree": 0
        }

        questions.map((question) => {
            if (question.selectedOption !== undefined) {
                attempted++;
                if (question.selectedOption === question.correct_option) {
                    correct++;
                    marks += question.marks;
                }
            }

            tags[question.tag] += 1;
        })

        const result = {
            "partial": 1,
            "piechart": {
                "report": {
                    "test1": {
                        "chart": [
                            [
                                "Topic",
                                "Value"
                            ],
                            [
                                "correctAnswers",
                                correct
                            ],
                            [
                                "wrongAnswers",
                                attempted - correct
                            ],
                            [
                                "unattemptedQuestion",
                                total - attempted
                            ]
                        ],
                        "title": "Test 1 Result",
                        "other": [
                            [
                                "noOfQuestions",
                                total
                            ],
                            [
                                "marks",
                                marks
                            ]
                        ]
                    },
                    "test2": {
                        "chart": [
                            [
                                "Topic",
                                "Value"
                            ],
                            [
                                "correctAnswers",
                                -1
                            ],
                            [
                                "wrongAnswers",
                                -1
                            ],
                            [
                                "unattemptedQuestion",
                                -1
                            ]
                        ],
                        "title": "Test 2 Result",
                        "other": [
                            [
                                "noOfQuestions",
                                -1
                            ],
                            [
                                "marks",
                                -1
                            ]
                        ]
                    }
                }
            },
            "barchart": {
                "report": {
                    "test2": [
                        [
                            "Tag",
                            "Count"
                        ],
                        [
                            "Stacks and Queues",
                            -1
                        ],
                        [
                            "Graph",
                            -1
                        ],
                        [
                            "Array",
                            -1
                        ],
                        [
                            "Linked List",
                            -1
                        ],
                        [
                            "Hashing",
                            -1
                        ],
                        [
                            "Tree",
                            -1
                        ]
                    ],
                    "test1": [
                        [
                            "Tag",
                            "Count"
                        ],
                        [
                            "Stacks and Queues",
                            tags["Stacks and Queues"]
                        ],
                        [
                            "Graph",
                            tags["Graph"]
                        ],
                        [
                            "Array",
                            tags["Array"]
                        ],
                        [
                            "Linked List",
                            tags["Linked List"]
                        ],
                        [
                            "Hashing",
                            tags["Hashing"]
                        ],
                        [
                            "Tree",
                            tags["Tree"]
                        ]
                    ]
                }
            }

        }

        res.send(result);
    }
    catch (error) {
        console.log(error)
    }
}

// Controller for full test given by user
const getResults = async (req, res) => {
    try {
        const resultId = req.body.resultId;
        const questions = req.body.questions;
        var attempted = 0, correct = 0, total = questions.length, marks = 0;
        var tags = {
            "Stacks and Queues": 0,
            "Graph": 0,
            "Array": 0,
            "Linked List": 0,
            "Hashing": 0,
            "Tree": 0
        }

        questions.map((question) => {
            if (question.selectedOption !== undefined) {
                attempted++;
                if (question.selectedOption === question.correct_option) {
                    correct++;
                    marks += question.marks;
                }
            }

            tags[question.tag] += 1;
        })

        const result = {
            "partial": 0,
            "piechart": {
                "report": {
                    "test2": {
                        "chart": [
                            [
                                "Topic",
                                "Value"
                            ],
                            [
                                "correctAnswers",
                                correct
                            ],
                            [
                                "wrongAnswers",
                                attempted - correct
                            ],
                            [
                                "unattemptedQuestion",
                                total - attempted
                            ]
                        ],
                        "title": "Test 2 Result",
                        "other": [
                            [
                                "noOfQuestions",
                                total
                            ],
                            [
                                "marks",
                                marks
                            ]
                        ]
                    },
                    "test1": {
                        "chart": [
                            [
                                "Topic",
                                "Value"
                            ],
                            [
                                "correctAnswers",
                                resultId.correct
                            ],
                            [
                                "wrongAnswers",
                                resultId.attempted - resultId.correct
                            ],
                            [
                                "unattemptedQuestion",
                                resultId.total - resultId.attempted
                            ]
                        ],
                        "title": "Test 1 Result",
                        "other": [
                            [
                                "noOfQuestions",
                                resultId.total
                            ],
                            [
                                "marks",
                                resultId.marks
                            ]
                        ]
                    }
                }
            },
            "barchart": {
                "report": {
                    "test1": [
                        [
                            "Tag",
                            "Count"
                        ],
                        [
                            "Stacks and Queues",
                            resultId.tags["Stacks and Queues"]
                        ],
                        [
                            "Graph",
                            resultId.tags["Graph"]
                        ],
                        [
                            "Array",
                            resultId.tags["Array"]
                        ],
                        [
                            "Linked List",
                            resultId.tags["Linked List"]
                        ],
                        [
                            "Hashing",
                            resultId.tags["Hashing"]
                        ],
                        [
                            "Tree",
                            resultId.tags["Tree"]
                        ]
                    ],
                    "test2": [
                        [
                            "Tag",
                            "Count"
                        ],
                        [
                            "Stacks and Queues",
                            tags["Stacks and Queues"]
                        ],
                        [
                            "Graph",
                            tags["Graph"]
                        ],
                        [
                            "Array",
                            tags["Array"]
                        ],
                        [
                            "Linked List",
                            tags["Linked List"]
                        ],
                        [
                            "Hashing",
                            tags["Hashing"]
                        ],
                        [
                            "Tree",
                            tags["Tree"]
                        ]
                    ]
                }
            }

        }

        res.send(result);
    }

    catch (error) {
        console.log(error)
    }
}

// Gett all results separate by test
const getAllResults = async (req, res) =>{
    try{
        const results = await result.find();

        var partial = [], full = [];
        
        results.map((result) => {
            if(result.partial === 0){
                full.push(result)
            }
            else{
                partial.push(result)
            }
        })

        res.send({
            partial,
            full
        })
    }
    catch(error){
        console.log(error);
    }
}

export { getResults, getRecommendations, getAllResults }