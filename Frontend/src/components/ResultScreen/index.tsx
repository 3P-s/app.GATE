import { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import { AppLogo, Refresh } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { device } from '../../styles/BreakPoints'
import { Flex, LogoContainer, ResizableBox } from '../../styles/Global'
import { refreshPage } from '../../utils/helpers'

import Button from '../ui/Button'
import ResultOverview from './ResultOverview'
import RightAnswer from './RightAnswer'

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
  const { result } = useQuiz()
  const [report,setReport] = useState({})

  
  const onClickRetry = () => {
    refreshPage()
  }
  const onClickShowReport = () => {

    console.log('Show Report')
  }

  return (
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
            index: number
          ) => {
            return (
              <QuestionContainer key={question_text}>
                <ResizableBox width="90%">
                  <Flex gap="4px">
                    <QuestionNumber>{`${index + 1}. `}</QuestionNumber>
                    <QuestionStyle>{question_text}</QuestionStyle>
                  </Flex>
                  <div>
                    <ul>
                      {choices.map((ans: string, index: number) => {
                        // Convert index to alphabet character
                        const label = String.fromCharCode(65 + index)
                        const correct =
                          selectedAnswer.includes(ans) && correct_option.includes(ans)
                        const wrong =
                          selectedAnswer.includes(ans) && !correct_option.includes(ans)

                        return (
                          <Answer key={ans} correct={correct} wrong={wrong}>
                            <span>{label}.</span>
                            {ans}
                          </Answer>
                        )
                      })}
                    </ul>
                    {/* only show if the answer is wrong */}
                    {!isMatch && (
                      <RightAnswer correctAnswers={correct_option} choices={choices} />
                    )}
                  </div>
                </ResizableBox>
                <Score right={isMatch}>{`Score ${isMatch ? marks : 0}`}</Score>
              </QuestionContainer>
            )
          }
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
  )
}

export default ResultScreen
