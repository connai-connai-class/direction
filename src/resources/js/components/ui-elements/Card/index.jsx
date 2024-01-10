import { Card as MuiCard, CardContent } from "@mui/material";

export default function Card({ children }) {
  return (
    <MuiCard sx={{ p: "1rem" }}>
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
}
