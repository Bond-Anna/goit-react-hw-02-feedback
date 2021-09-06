import css from './statistics/stat.module.css';
export const Notification = ({ message }) => {
    return <p className={css.stats}>{message}</p>;
};
