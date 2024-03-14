import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormText,
} from "react-bootstrap";

interface FormData {
  email: string;
  password: string;
}

function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    } else if (formData.email.length < 3 || formData.email.length > 100) {
      newErrors.email = "Email must be between 3 and 100 characters";
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 3 || formData.password.length > 100) {
      newErrors.password = "Password must be between 3 and 100 characters";
    }

    setErrors(newErrors);
    isValid = Object.keys(newErrors).length === 0;
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      fetch("http://localhost:8000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: formData.email,
          password: formData.password,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setErrorMessage("Login failed");
          }
        })
        .then((data) => {
          console.log(data.access_token);
          navigate("/projects");
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrorMessage("An error occurred");
        });
    }
  };

  return (
    <>
      <h1>Login</h1>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label>Email</Form.Label>
          <FormControl
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          ></FormControl>
          {errors.email && (
            <FormText className="text-danger"> * {errors.email}</FormText>
          )}
        </FormGroup>
        <FormGroup>
          <Form.Label>Password</Form.Label>
          <FormControl
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          ></FormControl>
          {errors.password && (
            <FormText className="text-danger"> * {errors.password}</FormText>
          )}
        </FormGroup>
        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
