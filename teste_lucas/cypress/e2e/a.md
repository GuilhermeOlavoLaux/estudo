# Scenarios for User Registration

## #2 Scenario: Successful User Registration with Multiple Companies

**Given** the administrator is on the main page of the Contato Seguro system  
**And** selects the "+Novo Usuário" button  
**When** they fill in the "Nome" field with a valid name  
**And** they fill in the "E-mail" field with a valid email  
**And** they fill in the "Telefone" field with an area code and number  
**And** they fill in the "Data" field with a valid date  
**And** they select the desired company in the "Empresas" field  
**And** they select another company in the "Empresas" field  
**And** they click the modal to close the dropdown menu  
**And** they select the "Salvar" button  
**Then** it should be possible to view the registered user on the main page
