import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  //function that handles the password reset
  const handleForgotPassword = async () => {
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your email.");
    } catch (err) {
      console.error("Error sending email: ", err.message);
      alert("Failed to send reset email.");
    }
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Reset your password
        </Typography>

        <form onSubmit={handleForgotPassword}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleForgotPassword}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleForgotPassword}
          >
            Send Email
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="text"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Go back to login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
