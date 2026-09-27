import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import { mockMedicines } from "../mockData";

export default function Inventory() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Моя аптечка</Typography>
      <Grid container spacing={2}>
        {mockMedicines.map((m) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={m.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{m.name}</Typography>
                <Typography variant="body2">Количество: {m.quantity} шт.</Typography>
                <Typography variant="body2">Годен до: {m.expiryDate}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}