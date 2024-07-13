#10 Scenario: Date Not Filled In

    Given the administrator is on the main page of the Contato Seguro system
    And they select the "+Novo Usuário" button
    When they fill in the "Nome" field with a valid name
    And they fill in the "E-mail" field with a valid email
    And they fill in the "Telefone" field with an area code and number
    And they leave the "Data" field empty
    And they select the desired company in the "Empresas" field
    And they click the modal to close the dropdown menu
    And they select the "Salvar" button
    Then the system should alert the mandatory "Data" field
    And display a message requesting the empty field to be filled in


.
#13 Scenario: Company Not Selected

    Given the administrator is on the main page of the Contato Seguro system
    And they select the "+Novo Usuário" button
    When they fill in the "Nome" field with a valid name
    And they fill in the "E-mail" field with a valid email
    And they fill in the "Telefone" field with an area code and number
    And they fill in the "Data" field with a valid date
    And they leave the "Empresas" field empty
    And they click the modal to close the dropdown menu
    And they select the "Salvar" button
    Then the system should alert the mandatory "Empresas" field
    And display a message requesting the empty field to be filled in