Feature: Task functionality 
    Background: 
        Given I am logged in and landing on dashboard    
   Scenario: Creating task without filling data
       When I land on task page
       And Click on the Create task 
       And Click on the Submit button 
       Then The validation should appear
   
   Scenario: Creating task with the random data 
       When I land on task page
       And Click on the Create task 
       And Entering Task name
       And Selecting source of task
       And Selecting pipeline
       And Selecting pipeline stage 
       And Selecting Expected Date
       And Activating link to product
       And Activating Has monetory value
       And Activating include fees
       And Selecting product and count
       And Adding Annual GWP and Monthly GWP
       And Adding Annual and Monthly fees
       And Selecting priority "Medium"
       And Adding description 
       And Linking task and assigning to "Individual"
       And Assigning team
       And Assigning Team member
       And Click on the Submit button
       Then The Task has been created/updated successfully should appear
   Scenario: Editing task
       When I land on task page
       And Click on the first task
       And Click on edit
       And Entering Task name
       And Selecting source of task for edit
       And Selecting Expected Date
       And Selecting priority "High"
       And Adding description 
       And Linking task and assigning to "Individual"
       And Assigning team
       And Assigning Team member
       And Click on the Submit button
       Then The Task has been created and updated successfully should appear
    
    Scenario: Editing pipeline
       When I land on task page
       And Click on the first task
       And Editing pipeline
       Then The Task has been created and updated successfully should appear      
    Scenario: Bulk Actions and search
        When I land on task page
        And Doing bulk delete
        Then The confirmation message should appear
        And Searching task which does not exist
        Then Status message should appear
        And Searching task which exist
        Then the word should appear
      Scenario: filter functionality 
        When I land on task page
        And Click on Select filter
        And Selecting pipeline and stage as filter
       Then The filtered result should appear
 
    Scenario: The pagination 
        When I land on task page
        And Click on the next page 
        Then The second page should be selected 
  
    











        