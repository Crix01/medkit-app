import { Container, Typography, Box, Paper } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Домашняя аптечка</Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Учет лекарств, контроль сроков годности и список для передачи в приют.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
        <Paper sx={{ p: 3, minWidth: 200 }}>
          <Typography variant="h6">Всего лекарств</Typography>
          <Typography variant="h3">6</Typography>
        </Paper>
        <Paper sx={{ p: 3, minWidth: 200 }}>
          <Typography variant="h6">Скоро истекает</Typography>
          <Typography variant="h3">3</Typography>
        </Paper>
      </Box>
    </Container>
  );
}