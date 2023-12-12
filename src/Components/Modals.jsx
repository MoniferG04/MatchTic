import { Modal, Box, Typography } from "@mui/material";
import {CreatePerson} from "./CreatePerson";

export function Modals({
  openModal,
  handleCloseModal,
}) {
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "rgba(208, 234, 255, 1)", // Color de fondo
          boxShadow: 24,
          p: 2,
          minWidth: 300,
          maxWidth: 400,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <CreatePerson/>
      </Box>
    </Modal>
  );
}