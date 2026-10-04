import { useNavigate } from 'react-router-dom';
import useLoginForm from '../../hooks/useLoginForm';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './LoginForm.css';

export default function LoginForm() {
    const navigate = useNavigate();
    const { formState, errors, handleSubmit, handleChange, limits, isLoading, completeLogin } = useLoginForm();
    const hasErrors = Object.keys(errors).length > 0;

    if (isLoading) {
        return (
            <LoadingScreen
                onComplete={() => {
                    completeLogin();
                    navigate('/home');
                }}
            />
        );
    }

    return (
        <div className='login-main-container'>
            <section className="login-container">
                <header className="login-header">
                    <h1 className="login-title">Welcome back!</h1>
                    <p className="login-subtitle">We're so excited to see you again!</p>
                </header>

                <form className="login-form" onSubmit={handleSubmit} noValidate>
                    {hasErrors && (
                        <div className="alert-banner">
                            Please check the highlighted fields below.
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Full Name <span className="required-star">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            maxLength={limits.name}
                            value={formState.name}
                            onChange={handleChange}
                            className={`form-input ${errors.name ? 'input-error' : ''}`}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email Address <span className="required-star">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            maxLength={limits.email}
                            value={formState.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password <span className="required-star">*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            maxLength={limits.password}
                            value={formState.password}
                            onChange={handleChange}
                            className={`form-input ${errors.password ? 'input-error' : ''}`}
                        />
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <button type="submit" className="submit-btn">
                        Log In
                    </button>
                </form>
            </section>
        </div>
    );
}