/// <reference types="cypress" />
const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor");
import login from "../pageobject/login.js"
import company_profile from "../pageobject/company_profilepage.js"
Given("I am logged in and landing on dashboard",()=>{
  login.visiturl()
  login.Enter_Email("crm.superadmin@stubbenedge.com")
  login.Enter_pass("jFG$4234_eJN")
  login.Click_submit()
})
When("I go to the company profile page",()=>{
    company_profile.stuben_edge_toggle()
})
When("Click on the edit button",()=>{
   company_profile.company_details_edit() 
})
When("Edit number of Employees",()=>{
    company_profile.numberofEmployee()
})
When("Select industry",()=>{
    company_profile.industry()
})
When("Edit Est Annual GWP",()=>{
    company_profile.annual_gwp()
})
When("Reselect Company type",()=>{
    company_profile.company_type()
})
When("Click on the next button",()=>{
    company_profile.next_button()
})
Then("The company has been updated successfully",()=>{
    company_profile.edit_company_msg()
})
When("Click on the Branding Edit",()=>{
    company_profile.branding_edit()
})
When("Upload Company icon",()=>{
    company_profile.upload_companyicon()
})
When("Upload Company logo",()=>{
    company_profile.upload_companylogo()
})
When("Setting Colour setting",()=>{
    company_profile.setting_color()
})
When("Click on the Done button",()=>{
    company_profile.done_button()
})
Then("Company branding has been updated successfully",()=>{
    company_profile.success_branding()
})
When("Click on Service details Edit",()=>{
    company_profile.service_edit()
})
When("Edit details",()=>{
    company_profile.edit_details()
})
When("Click on the Save changes",()=>{
    company_profile.save_change_button()
})
Then("The servicing details have been updated successfully",()=>{
    company_profile.success_edit_service()
})