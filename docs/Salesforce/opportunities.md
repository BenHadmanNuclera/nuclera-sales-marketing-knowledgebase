---
sidebar_position: 4
slug: opportunities
title: Opportunities
authors:
  - name: Ben Hadman
    title: Senior Digital Marketing Manager
tags: [salesforce]
---


# Opportunities

We us an opportunity process to guide each sales opportunity down a specific route. We do this to ensure best practice is followed in the qualification and nothing is missed off.

It is very important that opportunities are well qualified we spend time on the ones most likely to convert to a sale. The use of a specific process with clear criteria ensures that our attention is turned to the high probability opportunities and not to the people that demand the most attention, as human nature to opts toward.

The use of a defined process has another useful outcome, when used across a cohort of multiple opportunities which have all been through the same process we can start to apply probabilities -of closing the deal- to each stage as well as spotting trends between different types of account.

## Creating an Opportunity

Creating an opportunity can be performed from various areas of the platform e.g. from the opportunities list view, from a global action, and from an account record.

It is easiest to create an opportunity from a contact record. When you create an opportunity this way there are a number of automations or pre-filled actions that save you time and ensure data is entered using the correct formats/naming conventions.

The automations that pre populate data are as follows:
- The same account that the contact is connected to is also connected to the opportunity.
- The close date is set 6 months in advance (180 days).
- The Opportunity Amount is set to £90,000.
- The Opportunity Stage is set to the first stage (1 - Qualifying)
- The Opportunity Name is set according to [naming conventions](#naming-conventions)

There are a few prerequisities before creating an opportunity:
- The contact is connected to an account (preferably the [account hierarchy](./accounts#hierarchies) has been formed too)
- The contact has a Mailing Address added. (State and Country at a minimum)

## Naming Conventions

AccountName - ContactName - Location(State) - Location(CountryTwoLetterCode) - Date(Mmm/YY)

#### Examples
GlaxoSmithKline - Albert Einstein - Ware - UK - Oct/22

Moderna Therapeutics - Marie Curie - Massachusetts - US - Jul/21

## Walkthrough - Creating an Opportunity


### 1\. [Go to a Contact Record](https://nuclera.lightning.force.com/lightning/r/Contact/0038d00000H8ta6AAB/view)
-------------------------------------------------------------------------------------------------------------

![](https://dubble-prod-01.s3.amazonaws.com/assets/a87bcae2-c4bc-43ac-90e5-67fe9ce0eb2d.png?0)

### 2\. [Click on New Opportunity](https://nuclera.lightning.force.com/lightning/r/Contact/0038d00000H8ta6AAB/view)
---------------------------------------------------------------------------------------------------------------

![](https://d3q7ie80jbiqey.cloudfront.net/media/image/zoom/faf017e7-9ff2-441b-9d6d-b71feb3049df/2.5/92.715657552083/8.0211324479541?0)

### 3\. [Check the details are correct, maybe tidying the Opportunity Name, click on Save](https://nuclera.lightning.force.com/lightning/action/quick/Contact.Newopp?objectApiName=Opportunity&context=RECORD_DETAIL&recordId=0038d00000H8ta6AAB&backgroundContext=%2Flightning%2Fr%2FContact%2F0038d00000H8ta6AAB%2Fview)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](https://d3q7ie80jbiqey.cloudfront.net/media/image/zoom/40e3b9e3-6c76-4dee-93d4-3e4912f12b1e/2.5/65.9375/62.049645549174?0)



