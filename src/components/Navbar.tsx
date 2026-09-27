import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Аптечка</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button color="inherit" component={Link} to="/">Главная</Button>
          <Button color="inherit" component={Link} to="/inventory">Аптечка</Button>
          <Button color="inherit" component={Link} to="/give-away">Отдать до срока</Button>
          <Button color="inherit" component={Link} to="/add">Добавить</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}