---
sidebar_position: 3
title: Leads
authors:
  - name: Ben Hadman
    title: Associate Director of Demand Generation
tags: [salesforce]
---

# Leads

A 'Lead' is the starting point within Salesforce, typically at the first stage a potential customer makes themselves known to a company there is limited information about that person and their associated company. 
The 'Lead' record stores that limited information and allows a salesperson to act upon the them.

## Converting a Lead

A Lead is 'converted' into an Account, Contact, and (optionally) an Opportunity, using information from the lead you're converting. This allows for higher fidelity information to be recorded in the more detailed Account, Contact and Opportunity. Creating the link between the person as being part of an account, which paints a bigger picture of your territory and who is in it.

![](https://knowledgebase.nuclera.com/img/lead_conversion.png)

If existing accounts and contacts exist within the system that the lead is associated with, you can choose to associate with existing accounts and contacts (rather than create a duplicate record) at the point of lead conversion.

The following process diagram shows how to go about working through this conversion process. 
Simply put, you should check if the account or contact already exists in the platform before creating a new one.
Commonly duplicate Accounts are created because spotting duplicates is more difficult when the variations in naming accounts are virtually endless (e.g. GSK, GlaxoSmithKline, SmithKlineBeecham ...), make sure to try searching a few variations before creating a new account.


![Lead Conversion Decision Matrix](https://knowledgebase.nuclera.com/img/lead_conversion.svg)

## Lead Statuses

### Open - Not Contacted

- Leads in this stage have either got in contact through email, forms or third party channels or been uploaded from conferences or lists.
- They have not been contacted by Nuclera yet.

### Working - Contacted
- In this stage you are attempting to engage with the Lead.
- Before closing this Lead (either as converted or not converted), ensure all relevant fields, specifically Verticals, - Persona and Industry, are completed.

### Closed - Not Converted
There is no chance of a sale either now or in the future.
*This is not the correct status for non-responsive Leads*, they should still be converted to a Contact if a good fit based on their profile, not on their responsiveness.
These leads require nurturing in order to be ready to buy.

### Closed - Converted 
Either now or in the future there is a chance of sale.
Lead gets converted to a Contact.

## How to convert a lead

![Click Convert](https://res.cloudinary.com/df4tgmvzg/image/upload/v1755172069/convert_button_qevfm1.png)
![Lead Conversion Window](https://res.cloudinary.com/df4tgmvzg/image/upload/v1755172074/conversion_window_sc3m3r.png)
![Don't make opportunity](https://res.cloudinary.com/df4tgmvzg/image/upload/v1755172319/optionally_opportunity_creation_ech3zd.png)
![Lead Conversion Success Window](https://res.cloudinary.com/df4tgmvzg/image/upload/v1755172073/conversion_success_screen_cxdxkr.png)


### Common scenarios

There is an important but subtle difference between how we record common scenarios.

#### Scenario A

_Description:_ In *Scenario A* you might have eg. a spam lead, a lead who has misunderstood what we provide or a duplicate lead comes into the lead queue.

_How to Process:_ The status is set to 'Closed - Not Converted' in the conversion window. No contact or account is created or associated with because there is no use for this record to be added to our system.

#### Scenario B
_Description:_ In *Scenario B* a lead who in the future might become an opportunity but for any reason won't at this point in time because e.g. lack of budget, product features aren't ready etc...

_How to Process:_ In *Scenario B* the status is set to 'Closed - Converted' and in the Lead Conversion Window the "Click on "Don't create an opportunity upon conversion" is checked:
![Click on "Don't create an opportunity upon conversion"](https://d3q7ie80jbiqey.cloudfront.net/media/image/zoom/5878c0ad-1493-4e3b-abcf-5d5b3e4e3f64/2.5/27.674790083657/70.284700581968?0)

#### Scenario C
_Description:_ In *Scenario C* a lead comes in with pressing requirement for our products/services.

_How to Process:_ In *Scenario C* the status is set to _'Closed - Converted'_ AND and an Opportunity is created (default behaviour).

## Required Fields
Some fields are required before you can convert:
- Area of Work
- Industry
- Persona
- Research Focus
Validation rules will prevent you form converting till you have assigned these values.

## Workflow Diagram

![LeadConversion](https://knowledgebase.nuclera.com/img/leadConversion.jpg)

## Lead Queues

n Salesforce, lead queues and lead record ownership represent different ways of managing and assigning leads, with queues acting as temporary holding areas and ownership representing individual responsibility. A queue is a holding area for leads where multiple users (queue members) can access and claim ownership of leads. Lead record ownership, on the other hand, designates a specific individual user as the owner of a lead, making them responsible for its management and follow-up.

You have all been created a Lead Queue which this pool of leads have been sent to.

This is different from the “My Leads” list view which shows you leads you own.




