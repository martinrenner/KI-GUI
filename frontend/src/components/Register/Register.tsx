import { useState, ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  surname: string;
  email: string;
  password: string;
  password_confirmation: string;
}

function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

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

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3 || formData.name.length > 100) {
      newErrors.name = "Name must be between 3 and 100 characters";
    }

    // Validate surname
    if (!formData.surname) {
      newErrors.surname = "Surname is required";
    } else if (formData.surname.length < 3 || formData.surname.length > 100) {
      newErrors.surname = "Surname must be between 3 and 100 characters";
    }

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

    // Validate password confirmation
    if (!formData.password_confirmation) {
      newErrors.password_confirmation = "Password confirmation is required";
    } else if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation =
        "Password and password confirmation must match";
    }

    setErrors(newErrors);
    isValid = Object.keys(newErrors).length === 0;
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            navigate("/login", { replace: true });
          } else {
            setErrorMessage("Registration failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrorMessage("Failed to register");
        });
    }
  };

  return (
    <>
      <h1>Register</h1>
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
          />
          {errors.surname && (
            <div className="text-danger">{errors.surname}</div>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleInputChange}
          />
          {errors.password_confirmation && (
            <div className="text-danger">{errors.password_confirmation}</div>
          )}
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Register
        </Button>
      </Form>
    </>
  );
}

export default RegisterForm;
