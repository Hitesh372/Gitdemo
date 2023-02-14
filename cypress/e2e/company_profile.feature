Feature: Company profile  
    Background: 
        Given I am logged in and landing on dashboard
        And I go to the company profile page  
    Scenario: Editing company details
        When Click on the edit button 
        And Edit number of Employees
        And Select industry 
        And Edit Est Annual GWP
        And Reselect Company type
        And Click on the next button
        Then The company has been updated successfully

    Scenario: Editing Branding  
        When Click on the Branding Edit
        And Upload Company icon
        And Upload Company logo
        And Setting Colour setting
        And Click on the Done button
        Then Company branding has been updated successfully
    
    Scenario: Editing servicing details
        When Click on Service details Edit
        And Edit details 
        And Click on the Save changes 
        Then The servicing details have been updated successfully
