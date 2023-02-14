import { faker } from '@faker-js/faker';
/// <reference types="cypress" />

Arrow_buton = "body > div:nth-child(5) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(7) > a:nth-child(1) > span:nth-child(2) > i:nth-child(1)"
Taskoption = "body > div:nth-child(5) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(7) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)"
Createtask_button = "button[class='inline-block text-xs xl:text-sm font-bold uppercase transition-all open-drawer text-sky-400 hover:text-sky-600 outline-0 cta-create-task'] span[class='inline-block align-middle']"
Submit_btnloc = "#taskCreate-button"
ValidationMsg = ".mt-2.text-xs.italic.text-red-500"
task_namefield = "#task_name"
sourceof_task_edit = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > select:nth-child(2)"
Source_of_Task_dropdown = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > select:nth-child(2)"
pipeline_dropdown = "select[name='selectedPipeline']"
pipline_stage_dropdown = "select[name='pipeline_stage']"
close_date = '#expected_close_date'
date_select = "td[data-day='2']"
Toggle1 = "label[for='linkedtoaproduct'] div[class='block bg-gray-400 w-[40px] h-[24px] rounded-full']"
product_dropdown = "select[name='product']"
Annual_GWP_field = "#annual"
Monthly_GWP_field = "#monthly"
Annual_fees_field = "#annual_fee"
Monthly_fees_field = "#monthly_fee"
Toggle2 = "label[for='hasmonetaryvalue'] div[class='block bg-gray-400 w-[40px] h-[24px] rounded-full']"
Toggle3 = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > label:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
high_priority = "label[for='answer_high']"
medium_priority = "label[for='answer_medium']"
low_priority = "label[for='answer_low']"
Description_field = "textarea[placeholder='Enter text']"
linkto_dropdown = "select[name='selected_tasks_of']"
assignto_dropdown = "input[placeholder='Start typing...']"
assignteam_dropdown = "select[name='selectedTeam']"
assign_team_member_dropdown = "select[name='team_member']"
Task_created_message = ".text-base.mb-5.font-mono.text-gray-700"
task_edit_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > i:nth-child(1)"
first_task_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)"
edit_pipeline_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > i:nth-child(1)"
apply_button = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)"
task_checkboxes = "input[type*='checkbox']"
bulk_action_dropdown = "select[name='bulkAction']"
apply_button_bulk_delete = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2)"
popup_bulk_delete = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)"
success_message_bulkdelete = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)"
next_page_button = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > nav:nth-child(3) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > span:nth-child(2) > button:nth-child(1)"
active_page_loc = "body > div:nth-child(5) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > nav:nth-child(3) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > span:nth-child(1) > span:nth-child(3) > button:nth-child(1)"

tasknameinput = faker.fake.name
taskdescription  = faker.lorem.paragraph(5)
two_digit = faker.phone.number("##")
class Create_task{
  static selecttask(){
    cy.get(Arrow_buton).click()
    cy.get(Taskoption).click()
    cy.wait(3000)
  }

  static Createtaskbutton(){
    cy.get(Createtask_button).click()
    cy.wait(2000)
  }
  static Submit_button(){
    // cy.get(Submit_btnloc).scrollIntoView({duration:4000})
    cy.get(Submit_btnloc).click()
    cy.wait(3000)
  }
  static Validation(){
    cy.get(ValidationMsg).each(($el)=>{
      cy.wrap($el).scrollIntoView().should("be.visible")
    })
  }
  static taskname(){
    cy.get(task_namefield).clear()
    cy.get(task_namefield).type(tasknameinput)
  }
  static source_of_task(){
    cy.get(Source_of_Task_dropdown).select(1)
  }
  static pipeline(){
    cy.get(pipeline_dropdown).select(1)
    cy.wait(3000)
  }
  static pipeline_stage(){
    cy.get(pipline_stage_dropdown).select(1)
  }
  static close_date(){
    cy.get(close_date).click()
    cy.get("button[class='pika-next']").click()
    cy.get(date_select).click()
  }
  static linkto_product(){
    cy.get(Toggle1).click()
  }
  static monetory_value(){
    cy.get(Toggle2).click()
  }
  static include_fees(){
    cy.get(Toggle3).click()
    cy.wait(3000)
  }
  static product_select(){
    cy.get(product_dropdown).select(1)
  }
  static Annual_GWP(){
    cy.get(Annual_GWP_field).type(two_digit)
  }
  static Monthly_GWP(){
    cy.get(Monthly_GWP_field).type(two_digit)
  }
  static Annual_fees(){
    cy.get(Annual_fees_field).type(two_digit)
  }
  static Monthly_fees(){
    cy.get(Monthly_fees_field).type(two_digit)
  }
  static priority(opt){
    if(opt == "High"){
      cy.get(high_priority).click()
    }
    else if(opt == "Medium"){
      cy.get(medium_priority).click()
    }
    else{
      cy.get(low_priority).click()
    }
    
  }
  static Description(){
    cy.get(Description_field).clear()
    cy.get(Description_field).type(taskdescription)
  }
  static select_linkto(op){
    if(op == "Individual"){
      cy.get(linkto_dropdown).select(1)
      cy.wait(2000)
      cy.get(assignto_dropdown).clear()
      cy.get(assignto_dropdown).type("Mango Mango")
      cy.get(".text-xs.text-gray-700.cursor-pointer.block.w-full").click({force:true})
    }
    else{
      cy.get(linkto_dropdown).select(2)
      cy.wait(2000)
      cy.get(assignto_dropdown).clear()
      cy.get(assignto_dropdown).type("Test Ak")
      cy.get("img[alt='Test Akoni Company']").click({force:true})
    }
    
  }
  static select_team(){
    cy.get(assignteam_dropdown).select(1)
    cy.wait(1000)
  }
  static assign_team_member(){
    cy.get(assign_team_member_dropdown).select(1)
    cy.wait(1000)
  }
  static success_message(){
    cy.get(Task_created_message).should("be.visible")
  }
  static selec_first_task(){
    cy.get(first_task_loc).click()
  }
  static task_edit(){
    cy.get(task_edit_loc).click()
  }
  static source_of_task_edit(){
    cy.get(sourceof_task_edit).select(1)
  }
  static edit_pipeline(){
    cy.wait(1000)
    cy.get(edit_pipeline_loc).click()
    cy.get(pipeline_dropdown).select(1)
    cy.wait(3000)
    cy.get(pipline_stage_dropdown).select(1)
    cy.get(apply_button).click().should("be.s")

  }
  static bulk_action(){
    cy.get(task_checkboxes).each(($el,index,$list)=>{
      cy.wrap($list[1]).check()
      return false;
    })
    cy.get(bulk_action_dropdown).select(1)
    cy.get(apply_button_bulk_delete).click()
    cy.get(popup_bulk_delete).click()
    
  
  }
  static success_bulkdelete(){
    cy.get(success_message_bulkdelete).should("be.visible")
  }
  static searching(){

  }
  static next_page(){
    cy.get(next_page_button).click()
    cy.wait(2000)
  }
  static active_page(){
    cy.get(active_page_loc).each(($el)=>{
      cy.wrap($el.text()).should("contain","2")
    })
  }
  
}
export default Create_task;