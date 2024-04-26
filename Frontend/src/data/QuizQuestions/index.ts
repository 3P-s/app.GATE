import { test1 } from './test1'
// import { javascript } from './javascript'
// import { python } from './python'
// import { react } from './react'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question_text: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  correct_option: CorrectAnswers
  marks: number
  code?: string
  image?: string
  tags?: string[]
  appeared_in_next_exam?: number
  number_of_times_appeared?: number
  average_time_gap_between_appearances?: number
  current_year?: number
  difficulty_level?: string
  years_since_last_appearance?:number
  total_years_since_first_appearance?:number
  selectedOption?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]

}

export const quiz: Record<string, Topic> = {
  Test1: test1,
}
