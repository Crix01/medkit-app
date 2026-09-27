import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import { mockMedicines } from "../mockData";

export default function GiveAway() {
  const soon = mockMedicines.filter(
    (m) => new Date(m.expiryDate) < new Date("2026-06-01")
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Отдать до срока</Typography>
      <Typography variant="body2" color="text.secondary">
        Лекарства, которые еще годны, но скоро истекут - можно передать в приют.
      </Typography>
      <List>
        {soon.map((m) => (
          <ListItem key={m.id}>
            <ListItemText primary={m.name} secondary={`Годен до: ${m.expiryDate}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}