import styles from './form.module.css';

export const Form: React.FC = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input required type="email" id="email" name="email" autoComplete="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        required
                        minLength={8}
                        type="password"
                        id="password"
                        className="password-field"
                        name="password"
                        aria-describedby="password-minlength"
                        autoComplete="new-password"
                    />
                    <button
                        type="button"
                        hidden
                        data-pressed="false"
                        className="reveal-password"
                        aria-controls="password"
                        data-text-show="Show password"
                        data-text-hide="Hide password"
                    >
                        Show password
                    </button>
                    <span
                        data-text-shown="Your password is shown"
                        data-text-hidden="Your password is hidden"
                        className="visually-hidden password-announce"
                        aria-live="polite"
                    ></span>
                    <div id="password-minlength">Eight or more characters</div>
                </div>
                <button className="submit">Sign up</button>
            </form>
        </div>
    );
};
