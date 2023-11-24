import { useRef } from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@ui-elements";
import useModal from "@hooks/useModal";
import Form from "./DeleteUserForm";

export default function DeleteUser({ className = "", header = "" }) {
  const { openModal, closeModal, Modal } = useModal();
  const passwordInput = useRef();

  const {
    reset,
    delete: destroy,
    ...formState
  } = useForm({
    password: "",
  });

  const deleteUser = (e) => {
    e.preventDefault();

    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset(),
    });
  };

  const onClickCloseModal = () => {
    closeModal();
    reset();
  };

  return (
    <section className={`space-y-6 ${className}`}>
      {header}

      <Button color="error" onClick={openModal}>
        Delete Account
      </Button>

      <Modal>
        <Form
          closeModal={onClickCloseModal}
          deleteUser={deleteUser}
          {...formState}
        />
      </Modal>
    </section>
  );
}
