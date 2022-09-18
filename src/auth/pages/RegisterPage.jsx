import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
  email: "yerson.programador@gmail.com",
  password: "123456",
  displayName: "yerson reyes",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener un @"],
  password: [
    (value) => value.length >= 6,
    "El password debe tener mas de 6 caracteres",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};
export const RegisterPage = () => {
  const {
    onInputChange,
    formState,
    email,
    password,
    displayName,
    formValid,
    emailValid,
    passwordValid,
    displayValid,
  } = useForm(formData, formValidations);

  console.log(emailValid);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, displayName });
  };
  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear una cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
