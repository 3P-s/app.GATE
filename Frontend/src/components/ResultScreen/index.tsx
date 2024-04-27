import { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import { AppLogo, Refresh } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { device } from '../../styles/BreakPoints'
import { Flex, LogoContainer, ResizableBox } from '../../styles/Global'
import { refreshPage } from '../../utils/helpers'
import axios from 'axios'
import Button from '../ui/Button'
import ResultOverview from './ResultOverview'
import RightAnswer from './RightAnswer'
import { Link } from 'react-router-dom'
import { Chart } from "react-google-charts";
import { title } from 'process'
import recom from '../../recom'
const ResultScreenContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
  @media ${device.md} {
    width: 90%;
    margin: 30px auto;
    padding-top: 40px;
  }
`

const InnerContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 40px 90px 90px 90px;
  @media ${device.md} {
    padding: 15px;
  }
`

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media ${device.md} {
    flex-direction: column;
  }
`

const QuestionNumber = styled.h6`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
`

const QuestionStyle = styled.span`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  @media ${device.md} {
    margin-bottom: 10px;
  }
`

interface AnswerProps {
  correct?: boolean
  wrong?: boolean
}

const Answer = styled.li<AnswerProps>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 90%;
  @media ${device.md} {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.answerBg};
  border-radius: 16px;
  font-size: clamp(16px, 5vw, 18px);
  font-weight: 600;
  padding: 15px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);

  // if user answer matches to correct answer make answer background success color otherwise danger color
  ${({ correct }) =>
    correct &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.success};
      background-color: ${({ theme }) => theme.colors.successLight};
    `}

  ${({ wrong }) =>
    wrong &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger};
      background-color: ${({ theme }) => theme.colors.dangerLight};
    `}

  span {
    margin-right: 14px;
  }

  @media ${device.md} {
    font-weight: 400;
  }
`

const Score = styled.span<{ right: boolean }>`
  font-weight: 500;
  font-size: 16px;
  color: ${({ right, theme }) =>
    right ? `${theme.colors.success}` : `${theme.colors.danger}`};
  margin-top: 4px;
  @media ${device.md} {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    margin-right: 10px;
  }
`

const ResultScreen: FC = () => {
  const [report, setReport] = useState();
  const [rec, setRec] = useState()
  const { result } = useQuiz()
  const onClickRetry = () => {
    refreshPage()
  }
  const [bar, setBar] = useState({})
  const onClickShowReport = async () => {
    console.log('button clicked');

    // create put req to localhost:5000/result/recommend 
    const response = await axios.post('http://localhost:5000/result/recommend', {
      'questions': result
    })
    setReport(response.data[0])
    setBar(response.data[0].barchart.report.test1)
    const store = response.data[0].barchart.report.test1;
    console.log(response.data[0].barchart.report.test1);
    let newRecom = [];
  }

  interface Recom {
    [key: string]: string[];
  }
  const recom: Recom = {
    "Stacks and Queues": [
      "https://www.youtube.com/watch?v=-n2rVJE4vto",
      "https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html",
      "https://www.youtube.com/playlist?list=PLDzeHZWIZsTrhXYYtx4z8-u8zA-DzuVsj",
      "https://www.javatpoint.com/ds-stack-vs-queue"
    ],
    "Graph": [
      "https://www.javatpoint.com/ds-graph",
      "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
      "https://www.youtube.com/playlist?list=PLDzeHZWIZsTobi35C3I-tKB3tRDX6YxuA",
      "https://www.javatpoint.com/graph-theory-in-discrete-mathematics"
    ],
    "Array": [
      "https://www.youtube.com/playlist?list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB",
      "https://leetcode.com/problemset/?topicSlugs=array&page=1"
    ],
    "Linked List": [
      "https://www.youtube.com/playlist?list=PLDzeHZWIZsTr54_TH_NK4ibFojS4mmQA6",
      "https://www.geeksforgeeks.org/data-structures/linked-list/",
      "https://leetcode.com/problemset/?page=1&topicSlugs=linked-list"

    ],
    "Hashing": [
      "https://www.youtube.com/watch?v=W5q0xgxmRd8",
      "https://www.geeksforgeeks.org/hashing-data-structure/",
      "https://www.geeksforgeeks.org/hashing-in-java/",
      "https://leetcode.com/problemset/?topicSlugs=hash-table&page=1"
    ],
    "Tree": [
      "https://www.youtube.com/playlist?list=PLkjdNRgDmcc0Pom5erUBU4ZayeU9AyRRu",
      "https://www.youtube.com/watch?v=YAdLFsTG70w",
      "https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/",
      "https://www.w3schools.com/dsa/dsa_theory_trees.php",
      "https://www.youtube.com/playlist?list=PLkIpj7mL1E7sgSzwlAxM6TfS_WJ529O7y",
      "https://leetcode.com/problemset/?topicSlugs=tree&page=1"
    ]
  }
  return (
    <>
      {report === undefined ? (
        <ResultScreenContainer>
          <LogoContainer>
            <AppLogo />
          </LogoContainer>
          <InnerContainer>
            <ResultOverview result={result} />
            {result.map(
              (
                {
                  question_text,
                  choices,
                  type,
                  correct_option,
                  marks,
                  tags,
                  appeared_in_next_exam,
                  number_of_times_appeared,
                  average_time_gap_between_appearances,
                  current_year,
                  difficulty_level,
                  years_since_last_appearance,
                  total_years_since_first_appearance,
                  selectedAnswer,
                  isMatch,
                },
                index
              ) => (
                <QuestionContainer key={question_text}>
                  <ResizableBox width="90%">
                    <Flex gap="4px">
                      <QuestionNumber>{`${index + 1}. `}</QuestionNumber>
                      <QuestionStyle>{question_text}</QuestionStyle>
                    </Flex>
                    <div>
                      <ul>
                        {choices.map((ans, index) => {
                          // Convert index to alphabet character
                          const label = String.fromCharCode(65 + index);
                          const correct =
                            selectedAnswer.includes(ans) &&
                            correct_option.includes(ans);
                          const wrong =
                            selectedAnswer.includes(ans) &&
                            !correct_option.includes(ans);

                          return (
                            <Answer key={ans} correct={correct} wrong={wrong}>
                              <span>{label}.</span>
                              {ans}
                            </Answer>
                          );
                        })}
                      </ul>
                      {/* only show if the answer is wrong */}
                      {!isMatch && (
                        <RightAnswer
                          correctAnswers={correct_option}
                          choices={choices}
                        />
                      )}
                    </div>
                  </ResizableBox>
                  <Score right={isMatch}>{`Score ${isMatch ? marks : 0}`}</Score>
                </QuestionContainer>
              )
            )}
          </InnerContainer>
          <Flex spaceBetween>
            <Button
              text="Show Report"
              onClick={onClickShowReport}
              iconPosition="left"
              bold
            />
            <Button
              text="RETRY"
              onClick={onClickRetry}
              icon={<Refresh />}
              iconPosition="left"
              bold
            />
          </Flex>
        </ResultScreenContainer>
      ) : (
        <>

          <div style={{ margin: "150px" }}>
            <h1>Barchart</h1>
            <Chart
              chartType="BarChart"
              width="100%"
              height="400px"
              data={bar}
              options={{
                title: 'Bar Chart',
                chartArea: { width: '50%' },
                hAxis: {
                  title: 'Incorrect Questions',
                  minValue: 0,
                },
                vAxis: {
                  title: 'Tags',
                },
              }}
            />
          </div>
          <div className='piechart' style={{ margin: "100px" }}>
            <h1>PieChart</h1>
            <Chart
              chartType="PieChart"
              data={bar}
              options={{
                title: 'Pie Chart`',
                is3D: true,
              }
              }
              width={"100%"}
              height={"400px"}
            />
          </div>
          <div className='piechart' style={{ margin: "100px" }}>
            <h1>Differnce</h1>
            <Chart
              chartType="BarChart"
              width="100%"
              height="400px"
              diffdata={{
                old: bar,
                new: dataNew,
              }}
              options={options}
            />
          </div>
          <div style={{ margin: "100px" }}>
            <h1>Recommendations</h1>
            {Object.keys(recom).map((key) => (
              <div key={key}>
                <h2 className='my-5'>{key}</h2>
                <div className="flex flex-wrap">
                  {recom[key].map((value, index) => (
                    <div key={index} className="mr-2 mb-2">
                      <a href={value} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Link</a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

const dataNew = [
  ['Tag', 'Count'],
  ['Stacks and Queues', 0],
  ['Graph', 0],
  ['Array', 4],
  ['Linked List', 0],
  ['Hashing', 1],
  ['Tree', 0],
];

const options = {
  legend: { position: "top" },
};
export default ResultScreen
