import { createModalComponent } from "./createModalComponent.js";
import { loadPage } from "../util/loadPage.js";

export function createModalContainer() {

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = modalComponent.getFormData();

    if (!formData.name || !formData.deepKey || !formData.pexelsKey) {
      modalComponent.showError("Please fill in all fields correctly.");
      return;
    }

    const isValid = await validateApiKeys(formData.deepKey, formData.pexelsKey);
  };

  const hideModal = () => {
    modalComponent.hide();
  };

  const viewProps = {
    onFormSubmit,
    onClose: hideModal,
  };

  const modalComponent = createModalComponent(viewProps);
}
