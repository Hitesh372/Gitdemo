const URL = "https://portal.segdevelopment.com/com-21ca366c-cfc9-4562-985a-fec728b30465/login"
const Email_input = "#email"
const password_input = "#password"
const click_button = "button[type='submit']"

class login{
    static visiturl(){
        cy.visit(URL)
    }
    static Enter_Email(email){
        cy.get(Email_input).type(email)
    }
    static Enter_pass(password){
        cy.get(password_input).type(password)
    }
    static Click_submit(){
        cy.get(click_button).click()
               
    }

}

export default login