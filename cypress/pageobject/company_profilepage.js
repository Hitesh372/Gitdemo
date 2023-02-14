import { faker } from '@faker-js/faker';
/// <reference types="cypress" />

stuben_edge_loc = "body > div:nth-child(5) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1) > span:nth-child(2)"
comapany_profile_tab_loc = "body > div:nth-child(5) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
company_details_edit_loc = "button[class='open-drawer transition-all text-sm uppercase font-bold inline-block mr-[15px] text-sky-400 hover:text-sky-600 outline-0 cta-edit-detail-step1'] span[class='inline-block align-middle']"
numberofEmployee_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > select:nth-child(2)"
industry_loc = "select[class$='cta-industry companyCreate-input border-gray-300  pr-8 focus:ring-opacity-50 text-gray-700 block border-0 border-b rounded-none shadow-none antialiased focus:shadow-none px-0 font-semibold text-sm focus:border-b-sky-500 focus:ring-0 w-full']"
annual_gwp_loc = "#estannualGWP"
company_type_loc = "select[class$='cta-company-type companyCreate-input border-gray-300 pr-6  focus:ring-opacity-50 text-gray-700 block border-0 border-b rounded-none shadow-none antialiased focus:shadow-none px-0 font-semibold text-sm focus:border-b-sky-500 focus:ring-0 w-full']"
next_button_loc = "#companyCreate-button"
success_edit_company = ".text-base.mb-5.font-mono.text-gray-700"
branding_edit_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > i:nth-child(1)"
upload_companyicon_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
upload_companylogo_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(4) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)"
setting_color_loc = "#color"
done_button_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)"
service_edit_loc = "div[class='card shadow-sm bg-white rounded-[10px] overflow-hidden h-full flex flex-col justify-between'] div button[class='open-drawer transition-all text-sm uppercase font-bold inline-block mr-[15px] text-sky-400 hover:text-sky-600 outline-0 cta-edit-detail'] span[class='inline-block align-middle']"
phone_number = "#servicing_phone"
save_change_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)"
success_edit_service_loc = ".text-base.font-mono.text-gray-700"
success_branding_loc = ".text-base.font-mono.text-gray-700"
upload_companyicon_button_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)"
upload_companylogo_button_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(4) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)"

class company_profile{
    static stuben_edge_toggle(){

        cy.get(stuben_edge_loc).click()
        cy.get(comapany_profile_tab_loc).click()
    }
    static company_details_edit(){
        cy.get(company_details_edit_loc).click()
    }
    static numberofEmployee(){
        cy.get(numberofEmployee_loc).select(faker.finance.amount(1,6,0))
    }
    static industry(){
        cy.get(industry_loc).select(5)
    }
    static annual_gwp(){
        cy.get(annual_gwp_loc).type(faker.finance.amount(1,200,0))
    }
    static company_type(){
        cy.get(company_type_loc).select(faker.finance.amount(1,6,0))
    }
    static next_button(){
        cy.get(next_button_loc).click()
    }
    static edit_company_msg(){
        cy.get(success_edit_company).should("be.visible")
    }
    static branding_edit(){
        cy.get(branding_edit_loc).click()
        cy.wait(2000)
    }
    static upload_companyicon(){
        cy.get(upload_companyicon_loc).attachFile("photo.png")
        cy.wait(3000)
        cy.get(upload_companyicon_button_loc).click()
        
    }
    static upload_companylogo(){
        cy.get(upload_companylogo_loc).attachFile("photo.png")
        cy.wait(3000)
        cy.get(upload_companylogo_button_loc).click()
    }
    static setting_color(){
        cy.get(setting_color_loc).clear()
        cy.get(setting_color_loc).type("#8b97c6")
    }
    static done_button(){
        cy.get(done_button_loc).click()
    }
    static success_branding(){
        cy.get(success_branding_loc).should("be.visible")
    }

    static service_edit(){
        cy.get(service_edit_loc).click()
    }
    static edit_details(){
        cy.get(phone_number).clear()
        cy.get(phone_number).type(faker.phone.number("08#########"))
    }
    static save_change_button(){
        cy.get(save_change_loc).click()
    }
    static success_edit_service(){
        cy.get(success_edit_service_loc).should("be.visible")
    }

}
export default company_profile
