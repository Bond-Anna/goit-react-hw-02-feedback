import { Component } from 'react';
import css from './stat.module.css';
import { Notification } from '../Notification';
export class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return good === 0 && neutral === 0 && bad === 0 ? (
            <Notification message="No feedback given" />
        ) : (
            <>
                <p className={css.stats}>
                    Good: <span className={css.statsCount}>{good}</span>
                </p>
                <p className={css.stats}>
                    Neutral: <span className={css.statsCount}>{neutral}</span>
                </p>
                <p className={css.stats}>
                    Bad: <span className={css.statsCount}>{bad}</span>
                </p>
                <p className={css.stats}>
                    Total: <span className={css.statsCount}>{total}</span>
                </p>
                <p className={css.stats}>
                    Positive feedback:{' '}
                    <span className={css.statsCount}>
                        {positivePercentage}%
                    </span>
                </p>
            </>
        );
    }
}
