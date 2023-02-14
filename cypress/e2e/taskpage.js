/// <reference types="cypress" />
const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor");
import login from "../pageobject/login.js"
import Create_task from "../pageobject/taskobj.js";

Given("I am logged in and landing on dashboard",()=>{
  login.visiturl()
  login.Enter_Email("crm.superadmin@stubbenedge.com")
  login.Enter_pass("jFG$4234_eJN")
  login.Click_submit()
})

When("I land on task page",()=>{
    Create_task.selecttask()
})
When("Click on the Create task",()=>{
    Create_task.Createtaskbutton()
})
When("Click on the Submit button",()=>{
  Create_task.Submit_button()
})
Then("The validation should appear",()=>{
  Create_task.Validation()

})
When("Entering Task name",()=>{
  Create_task.taskname()
})
When("Selecting source of task",()=>{
  Create_task.source_of_task()
})
When("Selecting pipeline",()=>{
  Create_task.pipeline()
})
When("Selecting pipeline stage",()=>{
  Create_task.pipeline_stage()
})
When("Selecting Expected Date",()=>{
  Create_task.close_date()
})
When("Activating link to product",()=>{
  Create_task.linkto_product()
})
When("Activating Has monetory value",()=>{
  Create_task.monetory_value()
})
When("Activating include fees",()=>{
  Create_task.include_fees()
})
When("Selecting product and count",()=>{
  Create_task.product_select()
})
When("Adding Annual GWP and Monthly GWP",()=>{
  Create_task.Annual_GWP()
  Create_task.Monthly_GWP()
})
When("Adding Annual and Monthly fees",()=>{
  Create_task.Annual_fees()
  Create_task.Monthly_fees()
})
When("Selecting priority {string}",(prt)=>{
  Create_task.priority(prt)
})
When("Adding description",()=>{
  Create_task.Description()
})
When("Linking task and assigning to {string}",(opt)=>{
  Create_task.select_linkto(opt)
})
When("Assigning task",()=>{
  Create_task.assign_task_to()
})
When("Assigning team",()=>{
  Create_task.select_team()
})
When("Assigning Team member",()=>{
  Create_task.assign_team_member()
})
Then("The Task has been created and updated successfully should appear",()=>{
  Create_task.success_message()
})
When("Click on the first task",()=>{
  Create_task.selec_first_task()
})
When("Click on edit",()=>{
  Create_task.task_edit()
})
When("Selecting source of task for edit",()=>{
  Create_task.source_of_task_edit()
})
When("Editing pipeline",()=>{
  Create_task.edit_pipeline()
})
When("Doing bulk delete",()=>{
  Create_task.bulk_action()
})
When("The confirmation message should appear",()=>{
  Create_task.success_bulkdelete()
})
When("Searching task which does not exist",()=>{
  Create_task.success_bulkdelete()
})
When("Click on the next page",()=>{
  Create_task.next_page()
})
Then("The second page should be selected",()=>{
  Create_task.active_page()
})
