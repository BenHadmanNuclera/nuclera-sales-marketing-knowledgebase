---
sidebar_position: 3
title: Leads
authors:
  - name: Ben Hadman
    title: Senior Digital Marketing Manager
tags: [salesforce]
---

# Leads

## Converting a Lead

A 'Lead' is the starting point within Salesforce, typically at the first stage a potential customer makes themselves known to a company there is limited information about that person and their associated company. The 'Lead' record stores that limited information and allows a sales user to act upon the them. 

A Lead is 'converted' into an account, contact, and optionally an opportunity, using information from the lead you're converting. This allows for higher fidelity information to be recorded in the more detailed Account, Contact and Opportunity relational data structures.
The converted lead becomes a read-only record.

![](https://douglascayers.files.wordpress.com/2014/09/lead_conversion.png)

If existing accounts and contacts exist within the system that the lead is associated with, you can choose to associate with existing accounts and contacts (rather than create a duplicate record) at the point of lead conversion.

![Lead Conversion Window](https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/leads_opportunities_lightning_experience/create-and-convert-leads-lightning/images/bbaa57bf095de982b6e9f5f99b357307_convert-lead.png)

The following process diagram shows how to go about working through this conversion process. Simply put, you should check if the account or contact already exists in the platform before creating a new one.

![Lead Conversion Decision Matrix](https://focusonforce.com/wp-content/uploads/2014/02/Salesforce-Lead-Conversion-Process2.png)

## When to convert a lead and when to create an opportunity

### Common scenarios

There is an important but subtle difference between how we record common 'Lead scenarios'.

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




