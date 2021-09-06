import css from './fb.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    const names = Object.keys(options);
    return (
        <ul className={css.btnsList}>
            {names.map(name => (
                <li key={name} className={css.btns}>
                    <button
                        type="button"
                        name={name}
                        onClick={onLeaveFeedback}
                        className={css.btn}
                    >
                        {name}
                    </button>
                </li>
            ))}
        </ul>
    );
};
