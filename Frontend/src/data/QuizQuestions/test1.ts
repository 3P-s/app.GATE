// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import BrandLogo from '../../assets/images/brand-logo.jpg'
import Car from '../../assets/images/car.jpg'
import Dish from '../../assets/images/dish.jpg'
import Mosque from '../../assets/images/mosque.jpg'
import Place from '../../assets/images/place.jpg'
import Reptile from '../../assets/images/reptile.jpg'

export const test1: Topic = {
  topic: 'Test1',
  level: 'Beginner',
  totalQuestions: 12,
  totalScore: 60,
  totalTime: 180 ,
  questions: [
    {
      question: 'In a compact single dimensional array representation for lower triangular matrices (i.e all the elements above the diagonal are zero) of size nX n, non-zero elements (i.e., elements of the lower triangle) of each row are stored one after another, starting from the first row, the index of the (i, j)th element of the lower triangular matrix in this new representation is',
      choices: ['i+j', 'i+j-1', '(j-1) + i(i-1)/2', 'i + j(j-1)/2'],
      type: 'MCQs',
      correctAnswers: ['(j-1) + i(i-1)/2'],
      score: 10,
    },
    {   
      question: 'A program P reads in 500 integers in the range [0, 100] representing the cores of 500 students. It then print the frequency of each score above 50. What would be the best way for P to store the frequencies?',
      choices: ['an array of 50 numbers', 'An array of 100 numbers', 'An array of 500 numbers', 'A dynamically allocated array of 550'],
      type: 'MCQs',
      correctAnswers: ['an array of 50 numbers'],
      score: 10,
    },
    {
      question: 'What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order?',
      choices: ['Theta(n^2)', 'Theta(n)', 'Theta(n log n)', 'Theta(1)'],
      type: 'MCQs',
      correctAnswers: ['Theta(n^2)'],
      score: 10,
    },
    {
      question: 'A hash table contains 10 buckets and uses linear probing to resolve collisions. The key values are integers and the hash function used is key % 10. If the values 43, 165, 62, 123, 142 are inserted in the table, in what location would the key value 142 be inserted?',
      choices: ['2', '3', '4', '6'],
      type: 'MCQs',
      correctAnswers: ['6'],
      score: 10,
    },
    {
      question: 'A program attempts to generate as many permutation as possible of the string “abcd” by pushing the character a,b,c,d in the same order onto a stack, but it may pop off the top character at any time. Which one of the following a strings CANNOT be generated using this program?',
      choices: ['abcd', 'dcba', 'cbad', 'cabd'],
      type: 'MCQs',
      correctAnswers: ['cabd'],
      score: 10,
    },
    {
      question: 'Let P be a singly linked list, Let Q be the pointer to an intermediate node x in the list.What is the worst-case time complexity of the best known algorithm to delete the node x from the list??',
      choices: [
        'O(n)',
        'O(log^2(n))',
        'O(log n)',
        "O(1)",
      ],

      type: 'MCQs',
      correctAnswers: ["O(1)"],
      score: 10,
    },
  ],
}