import { Component } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/statistics/statistics';
import { Section } from './components/Section/section';

export class App extends Component {
    constructor() {
        super();
        this.total = 0;
        this.positivePercentage = 0;
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    }
    onClick = e => {
        const { name } = e.currentTarget;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
        // this.setState(prevState => ({ [option]: this.state[option] + 1 }));
    };

    countTotalFeedback = () => {
        return (this.total =
            this.state.good + this.state.neutral + this.state.bad);
    };
    countPositiveFeedbackPercentage = () => {
        return (this.positivePercentage = Math.round(
            (this.state.good / this.total) * 100,
        ));
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.onClick}
                    />
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
            </div>
        );
    }
}
