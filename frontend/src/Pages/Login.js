// // src/Login.js
// import React, { useState } from 'react';
// import './Css/Login.css';
// import './Css/Alert.css'; // Ensure to import the CSS for Alert
// import Form from 'react-bootstrap/Form';
// import Header from './Componets/Header_Signup';
// import Footer from './Componets/Footer';
// import Alert from './Alert'; // Import the Alert component

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isAdmin, setIsAdmin] = useState(false); // Toggle for admin role
//     const [alert, setAlert] = useState(null); // State for alert

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const role = isAdmin ? 'Admin' : 'Patient';
//         console.log("Role: ", role, "Email: ", email, "Password: ", password);

//         // Admin and patient role-based redirection
//         if (isAdmin && email === 'admin@hospital.com' && password === 'admin123') {
//             setAlert({ message: 'Welcome to Admin Portal', type: 'success' });
//             setTimeout(() => { window.location.href = '/admin_dashboard'; }, 2000); // Redirect after 2 seconds
//         } else if (!isAdmin && email !== '' && password !== '') {
//             setAlert({ message: 'Welcome to Patient Portal', type: 'success' });
//             setTimeout(() => { window.location.href = '/patient_dashboard'; }, 2000); // Redirect after 2 seconds
//         } else {
//             // setAlert({ message: 'Invalid credentials, please try again', type: 'error' });
//             setAlert({ message: 'Invalid, please try again....', type: 'error' });
//         }
//     };

//     const toggleRole = () => {
//         setIsAdmin(!isAdmin);
//     };

//     const closeAlert = () => {
//         setAlert(null);
//     };

//     return (
//         <div className="page-wrapper">
//             <Header />
//             <br />
//             <div className="login-wrapper">
//                 <div className="login-left">
//                     <div className="login-content">
//                         <h1>Welcome Back!</h1>
//                         <p className="subtitle">Please enter your Email, Password, and Role to continue</p>
//                         <form onSubmit={handleSubmit} className="form-container">
//                             <input
//                                 type="email"
//                                 placeholder="Email Address"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="input-field"
//                                 required
//                             />
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="input-field"
//                                 required
//                             />

//                             <div className="login-role-switch-container">
//                                 <label className="login-role-label">Login as:</label>
//                                 <div className="login-role-toggle modern-toggle">
//                                     <span className={`login-role-option ${!isAdmin ? 'login-active-role' : ''}`}>Patient</span>
//                                     <Form className='mx-2'>
//                                         <Form.Check
//                                             type="switch"
//                                             id="custom-switch"
//                                             checked={isAdmin}
//                                             onChange={toggleRole}
//                                         />
//                                     </Form>
//                                     <span className={`login-role-option ${isAdmin ? 'login-active-role' : ''}`}>Admin</span>
//                                 </div>
//                             </div>
//                             <a href="#" className="forgot-password">Forgot your password?</a>
//                             <button type="submit" className="btn-login login-btn">Login</button>
//                         </form>

//                         <div className="signup-link">
//                             <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//                         </div>

//                         <div className="support-info">
//                             <p>Need help? Contact our support team</p>
//                             <a href="mailto:support@ayurved.com" className="support-email">support@ayurved.com</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="login-right">
//                     <div className="login-right-content text-bg-light opacity-30">
//                         <h2>Nature Medicine</h2>
//                         <p>The new gold standard for cancer treatment. This interactive report includes updated information about approved or investigational treatments for each patient.</p>
//                     </div>
//                 </div>
//             </div>
//             <br />
//             {alert && <Alert message={alert.message} type={alert.type} onClose={closeAlert}  />}
//             <Footer />
//         </div>
//     );
// };

// export default Login;





//LogIn.js code -- Before backend initialization
// import React, { useState } from 'react';
// import './Css/Login.css';
// import './Css/Alert.css'; // Ensure to import the CSS for Alert
// import Form from 'react-bootstrap/Form';
// import Header from './Componets/Header_Signup';
// import Footer from './Componets/Footer';
// import Alert from './Alert'; // Import the Alert component

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isAdmin, setIsAdmin] = useState(false); // Toggle for admin role
//     const [alert, setAlert] = useState(null); // State for alert
//     const [isLoading, setIsLoading] = useState(false); // Loading state for submit button

//     // Helper function to show alert with automatic dismissal
//     const showAlert = (message, type) => {
//         setAlert({ message, type });
//         setTimeout(() => setAlert(null), 3000); // Close alert after 3 seconds
//     };

//     // Form validation function
//     const validateForm = () => {
//         if (!email || !password) {
//             showAlert('Please fill in all fields', 'error');
//             return false;
//         }
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email)) {
//             showAlert('Please enter a valid email address', 'error');
//             return false;
//         }
//         if (password.length < 6) {
//             showAlert('Password should be at least 6 characters', 'error');
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!validateForm()) return;

//         const role = isAdmin ? 'Admin' : 'Patient';
//         console.log("Role:", role); // Avoid logging sensitive data like passwords

//         setIsLoading(true); // Set loading state

//         // Role-based redirection logic
//         if (isAdmin && email === 'admin@hospital.com' && password === 'admin123') {
//             showAlert('Welcome to Admin Portal', 'success');
//             setTimeout(() => {
//                 setIsLoading(false);
//                 window.location.href = '/admin_dashboard';
//             }, 2000);
//         } else if (!isAdmin) {
//             showAlert('Welcome to Patient Portal', 'success');
//             setTimeout(() => {
//                 setIsLoading(false);
//                 window.location.href = '/patient_dashboard';
//             }, 2000);
//         } else {
//             showAlert('Invalid credentials, please try again', 'error');
//             setIsLoading(false); // Reset loading state after handling submission
//         }
//     };

//     const toggleRole = () => {
//         setIsAdmin((prev) => !prev); // Toggle the role state
//     };

//     return (
//         <>
//             <Header />

//             <div className="page-wrapper">

//                 <br />
//                 <div className="login-wrapper">
//                     <div className="login-left">
//                         <div className="login-content">
//                             <h1>Welcome Back!</h1>
//                             <p className="subtitle">Please enter your Email, Password, and Role to continue</p>
//                             <form onSubmit={handleSubmit} className="form-container">
//                                 <input
//                                     type="email"
//                                     placeholder="Email Address"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="input-field"
//                                     required
//                                     aria-label="Email Address"
//                                 />
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="input-field"
//                                     required
//                                     aria-label="Password"
//                                 />
//                                 <div className="login-role-switch-container">
//                                     <label className="login-role-label">Login as:</label>
//                                     <div className="login-role-toggle modern-toggle">
//                                         <span className={`login-role-option ${!isAdmin ? 'login-active-role' : ''}`}>Patient</span>
//                                         <Form className="mx-2">
//                                             <Form.Check
//                                                 type="switch"
//                                                 id="custom-switch"
//                                                 checked={isAdmin}
//                                                 onChange={toggleRole}
//                                                 aria-label="Toggle Admin Role"
//                                             />
//                                         </Form>
//                                         <span className={`login-role-option ${isAdmin ? 'login-active-role' : ''}`}>Admin</span>
//                                     </div>
//                                 </div>
//                                 <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
//                                 <button type="submit" className="btn-login login-btn" disabled={isLoading}>
//                                     {isLoading ? 'Logging in...' : 'Login'}
//                                 </button>
//                             </form>
//                             <div className="signup-link">
//                                 <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//                             </div>
//                             <div className="support-info">
//                                 <p>Need help? Contact our support team</p>
//                                 <a href="mailto:support@ayurved.com" className="support-email">support@ayurved.com</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="login-right">
//                         <div className="login-right-content text-bg-light opacity-30">
//                             <h2>Nature Medicine</h2>
//                             <p>The new gold standard for cancer treatment. This interactive report includes updated information about approved or investigational treatments for each patient.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//                 {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Login;


//LogIn.js code -- After backend initialization
// LogIn.js
// import React, { useState } from 'react';
// import './Css/Login.css';
// import './Css/Alert.css';
// import Form from 'react-bootstrap/Form';
// import Header from './Componets/Header_Signup';
// import Footer from './Componets/Footer';
// import Alert from './Alert';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [alert, setAlert] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     const showAlert = (message, type) => {
//         setAlert({ message, type });
//         setTimeout(() => setAlert(null), 3000);
//     };

//     const validateForm = () => {
//         if (!email || !password) {
//             showAlert('Please fill in all fields', 'error');
//             return false;
//         }
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(email)) {
//             showAlert('Please enter a valid email address', 'error');
//             return false;
//         }
//         if (password.length < 6) {
//             showAlert('Password should be at least 6 characters', 'error');
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         if (!validateForm()) return;
    
//         setIsLoading(true);
    
//         try {
//             const response = await fetch("http://localhost:5000/api/auth/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });
    
//             const data = await response.json();
//             console.log("Login response data:", data); // Debugging line
    
//             if (response.ok) {
//                 showAlert('Login successful!', 'success');
    
//                 // Save token to localStorage
//                 localStorage.setItem("token", data.token);
    
//                 // Check if user data exists in the response and store it in localStorage
//                 if (data.user) {
//                     localStorage.setItem("user", JSON.stringify(data.user));
//                 } else {
//                     console.error("User data is missing from the response");
//                     showAlert("Unexpected error: User data not found.", "error");
//                     return;
//                 }
    
//                 // Redirect based on the user role after a short delay
//                 setTimeout(() => {
//                     window.location.href = isAdmin ? "/admin_dashboard" : "/patient_dashboard";
//                 }, 2000);
//             } else {
//                 showAlert(data.message || 'Login failed', 'error');
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//             showAlert('Server error. Please try again later.', 'error');
//         } finally {
//             setIsLoading(false);
//         }
//     };
    
//     const toggleRole = () => {
//         setIsAdmin((prev) => !prev); // Toggle the role state
//     };

//     return (
//         <>
//             <Header />
//             <div className="page-wrapper">
//                 <br />
//                 <div className="login-wrapper">
//                     <div className="login-left">
//                         <div className="login-content">
//                             <h1>Welcome Back!</h1>
//                             <p className="subtitle">Please enter your Email, Password, and Role to continue</p>
//                             <form onSubmit={handleSubmit} className="form-container">
//                                 <input
//                                     type="email"
//                                     placeholder="Email Address"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="input-field"
//                                     required
//                                     aria-label="Email Address"
//                                 />
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="input-field"
//                                     required
//                                     aria-label="Password"
//                                 />
//                                 <div className="login-role-switch-container">
//                                     <label className="login-role-label">Login as:</label>
//                                     <div className="login-role-toggle modern-toggle">
//                                         <span className={`login-role-option ${!isAdmin ? 'login-active-role' : ''}`}>Patient</span>
//                                         <Form className="mx-2">
//                                             <Form.Check
//                                                 type="switch"
//                                                 id="custom-switch"
//                                                 checked={isAdmin}
//                                                 onChange={toggleRole}
//                                                 aria-label="Toggle Admin Role"
//                                             />
//                                         </Form>
//                                         <span className={`login-role-option ${isAdmin ? 'login-active-role' : ''}`}>Admin</span>
//                                     </div>
//                                 </div>
//                                 <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
//                                 <button type="submit" className="btn-login login-btn" disabled={isLoading}>
//                                     {isLoading ? 'Logging in...' : 'Login'}
//                                 </button>
//                             </form>
//                             <div className="signup-link">
//                                 <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//                             </div>
//                             <div className="support-info">
//                                 <p>Need help? Contact our support team</p>
//                                 <a href="mailto:support@ayurved.com" className="support-email">support@ayurved.com</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="login-right">
//                         <div className="login-right-content text-bg-light opacity-30">
//                             <h2>Nature Medicine</h2>
//                             <p>The new gold standard for cancer treatment. This interactive report includes updated information about approved or investigational treatments for each patient.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <br />
//                 {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Login;


// LogIn.js
import React, { useState } from 'react';
import './Css/Login.css';
import './Css/Alert.css';
import Form from 'react-bootstrap/Form';
import Header from './Componets/Header_Signup';
import Footer from './Componets/Footer';
import Alert from './Alert';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // Toggle for admin role
    const [alert, setAlert] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert(null), 3000);
    };

    const validateForm = () => {
        if (!email || !password) {
            showAlert('Please fill in all fields', 'error');
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showAlert('Please enter a valid email address', 'error');
            return false;
        }
        if (password.length < 6) {
            showAlert('Password should be at least 6 characters', 'error');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            const url = isAdmin 
                ? "http://localhost:5000/api/auth/admin/login"
                : "http://localhost:5000/api/auth/login";
                
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, isAdmin }), // Include isAdmin in the request body
            });

            const data = await response.json();

            if (response.ok) {
                showAlert('Login successful!', 'success');

                // Save token to localStorage
                localStorage.setItem("token", data.token);

                // Check if user data exists in the response and store it in localStorage
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                } else {
                    console.error("User data is missing from the response");
                    showAlert("Unexpected error: User data not found.", "error");
                    return;
                }

                // Redirect based on the user role after a short delay
                setTimeout(() => {
                    window.location.href = isAdmin ? "/admin_dashboard" : "/patient_dashboard";
                }, 2000);
            } else {
                showAlert(data.message || 'Login failed', 'error');
            }
        } catch (error) {
            console.error("Login error:", error);
            showAlert('Server error. Please try again later.', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const toggleRole = () => {
        setIsAdmin((prev) => !prev); // Toggle the role state
    };

    return (
        <>
            <Header />
            <div className="page-wrapper">
                <div className="login-wrapper">
                    <div className="login-left">
                        <div className="login-content">
                            <h1>Welcome Back!</h1>
                            <p className="subtitle">Please enter your Email, Password, and Role to continue</p>
                            <form onSubmit={handleSubmit} className="form-container">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input-field"
                                    required
                                    aria-label="Email Address"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input-field"
                                    required
                                    aria-label="Password"
                                />
                                <div className="login-role-switch-container">
                                    <label className="login-role-label">Login as:</label>
                                    <div className="login-role-toggle modern-toggle">
                                        <span className={`login-role-option ${!isAdmin ? 'login-active-role' : ''}`}>Patient</span>
                                        <Form className="mx-2">
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                checked={isAdmin}
                                                onChange={toggleRole}
                                                aria-label="Toggle Admin Role"
                                            />
                                        </Form>
                                        <span className={`login-role-option ${isAdmin ? 'login-active-role' : ''}`}>Admin</span>
                                    </div>
                                </div>
                                <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
                                <button type="submit" className="btn-login login-btn" disabled={isLoading}>
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </button>
                            </form>
                            <div className="signup-link">
                                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                            </div>
                            <div className="support-info">
                                <p>Need help? Contact our support team</p>
                                <a href="mailto:support@ayurved.com" className="support-email">support@ayurved.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="login-right">
                        <div className="login-right-content text-bg-light opacity-30">
                            <h2>Nature Medicine</h2>
                            <p>The new gold standard for cancer treatment. This interactive report includes updated information about approved or investigational treatments for each patient.</p>
                        </div>
                    </div>
                </div>
                <br />
                {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
            </div>
            <Footer />
        </>
    );
};

export default Login;
