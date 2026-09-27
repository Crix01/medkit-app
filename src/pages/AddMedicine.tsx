import { Container, Typography, TextField, Button, Stack } from "@mui/material";

export default function AddMedicine() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Добавить лекарство</Typography>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <TextField label="Название" fullWidth />
        <TextField label="Количество" type="number" fullWidth />
        <TextField label="Годен до" type="date" fullWidth InputLabelProps={{ shrink: true }} />
        <Button variant="contained">Сохранить</Button>
      </Stack>
    </Container>
  );
}