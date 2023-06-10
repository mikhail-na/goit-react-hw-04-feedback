import PropTypes from 'prop-types';
import { StatisticList, StatisticItem} from './FeedbackStatistics.module'

export const Statistics = ({ good, neutral, bad, total, positiveFeedbacks }) => {

    const arr = [
    { feedbackItem: good, title: 'Good' },
    { feedbackItem: neutral, title: 'Neutral' },
    { feedbackItem: bad, title: 'Bad' },
    { feedbackItem: total, title: 'Total feedbacks' },
    { feedbackItem: positiveFeedbacks, title: 'Positive feedback' },
    ];
    
    return (
        <StatisticList>
            {arr.map(({ feedbackItem, title }) => (
        <StatisticItem key={title}>
          <p>
            {title}:{' '}
            <span>
              {title !== 'Positive feedback'
                ? feedbackItem
                : positiveFeedbacks + '%'}
            </span>
          </p>
        </StatisticItem>
      ))}
        </StatisticList>
    )
    
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacks: PropTypes.number.isRequired,
};
