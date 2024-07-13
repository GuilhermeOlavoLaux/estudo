class AddNewUserForm {
  get addButton() {
    return cy.get("#new-user");
  }
  get modal() {
    return cy.get(".ReactModal__Content");
  }
  get saveButton() {
    return cy.contains("button", "Salvar");
  }
  get nameInput() {
    return cy.get('input[placeholder="Nome"]');
  }
  get emailInput() {
    return cy.get('input[placeholder="Email"]');
  }
  get cellphoneInput() {
    return cy.get('input[placeholder="Telefone"]');
  }
  get cityInput() {
    return cy.get('input[placeholder="Cidade de nascimento"]');
  }
  get dateInput() {
    return cy.get('input[placeholder="Data de nascimento"]');
  }
  get companiesInput() {
    return cy.get(".multiselect-container");
  }

  typeName(text) {
    if (!text) return;
    this.nameInput.type(text);
  }
  typeEmail(text) {
    if (!text) return;
    this.emailInput.type(text);
  }
  typeCellphone(text) {
    if (!text) return;
    this.cellphoneInput.type(text);
  }
  typeCity(text) {
    if (!text) return;
    this.cityInput.type(text);
  }
  typeDate(text) {
    if (!text) return;
    this.dateInput.type(text);
  }
  chooseCompany(text) {
    if (!text) return;
    this.companiesInput.type(text);
  }
}

describe("New user registration", () => {
  describe("Successful User Registration", () => {
    it("Given the administrator is on the main page of the Contato Seguro system", () => {
      cy.visit("/");
    });

    it("And selects the +Novo Usuário button", () => {
      const addNewUserForm = new AddNewUserForm();

      addNewUserForm.addButton.click();
    });

    it("They fill in the Nome field with a valid name", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.typeName("Lucas Engelmann");
    });

    it("They fill in the E-mail field with a valid email", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.typeEmail("lucas@email.com");
    });

    it("They fill in the Telefone field with an area code and number", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.typeCellphone("51985696919");
    });

    it("They fill in the Data field with a valid date", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.typeDate("2000-01-01");
    });

    it("They select the desired company in the Empresas field", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.companiesInput.click();
      addNewUserForm.companiesInput.contains("Empresa 1").should("exist");
      cy.contains(".option", "Empresa 1").click();
    });
    it("They click the modal to close the dropdown menu", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.modal.click();
    });

    it("They select the Salvar button", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.saveButton.click();
    });

    it("It should be possible to view the registered user on the main page", () => {
      cy.contains("Lucas Engelmann").should("exist");
      cy.contains("lucas@email.com").should("exist");
    });
  });

  describe("Successful User Registration", () => {
    it("Successful User Registration with Multiple Companies", () => {
      cy.visit("/");
    });

    it("And selects the +Novo Usuário button", () => {
      const addNewUserForm = new AddNewUserForm();

      addNewUserForm.addButton.click();
    });

    it("They fill in the Nome field with a valid name", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.typeName("Lucas Engelmann");
    });

    it("They fill in the E-mail field with a valid email", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.typeEmail("lucas@email.com");
    });

    it("They fill in the Telefone field with an area code and number", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.typeCellphone("51985696919");
    });

    it("They fill in the Data field with a valid date", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.typeDate("2000-01-01");
    });

    it("They select the desired company in the Empresas field", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.companiesInput.click();
      addNewUserForm.companiesInput.contains("Empresa 1").should("exist");
      addNewUserForm.companiesInput.contains("Empresa 2").should("exist");
      cy.contains(".option", "Empresa 1").click();
      cy.contains(".option", "Empresa 2").click();
    });
    it("They click the modal to close the dropdown menu", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.modal.click();
    });

    it("They select the Salvar button", () => {
      const addNewUserForm = new AddNewUserForm();
      addNewUserForm.saveButton.click();
    });

    it("It should be possible to view the registered user on the main page", () => {
      cy.contains("Lucas Engelmann").should("exist");
      cy.contains("lucas@email.com").should("exist");
    });
  });
});
