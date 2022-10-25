---
sidebar_position: 2
slug: accounts
title: Accounts
authors:
  - name: Ben Hadman
    title: Senior Digital Marketing Manager
tags: [salesforce]
---

# Accounts

Accounts are companies/institutions and have links to the majority of other Salesforce objects, they might be considered as the 'highest order' object.

## Creating an Account

An account can be created from the Accounts Tab in salesforce and by clicking the New Account button in the top right. Enter as much detail as you know about the account.

## Hierarchies

Account objects can be placed into a hierarchy to account for different sites around the world as well as different departments and schools. <br>
In order to accurately 'map out' an account it is important to divide up different constituents of an account e.g sites, departments and labs into new accounts rather than attribute all activity to one high-level account. Particularly in large pharma organisations there may be different sales opportunities with different 'decision-making units' or teams of people who may not even know the names of the other employees you're speaking to within their own organisation.<br>
You are then able to collect the different accounts together in a hierarchy so that you can see the connection between the accounts and report from the highest level account.<br>
From a practical point of view an opportunity will pull the address from the account object and so quotes, invoices etc will read the wrong address info if this is not in-place.


### 1\. [Go to All Accounts | Accounts | Salesforce](https://nuclera.lightning.force.com/lightning/o/Account/list?filterName=00B8d000008Ha8BEAS)
--------------------------------------------------------------------------------------------------------------------------------------------

![](https://dubble-prod-01.s3.amazonaws.com/assets/801aa7ad-e0ba-42ea-a19e-05257dcfdf7f.png?0)

### 2\. [Click on an Account (e.g. Purdue University)](https://nuclera.lightning.force.com/lightning/o/Account/list?filterName=00B8d000008Ha8BEAS)
----------------------------------------------------------------------------------------------------------------------------------------------

![](https://d3q7ie80jbiqey.cloudfront.net/media/image/zoom/bf96b1a1-0517-408b-90e5-3dd894bd3b8a/2.5/4.4270834326744/28.978190630048?0)

### 3\. [Click on the Hierarchy Button](https://nuclera.lightning.force.com/lightning/r/Account/0018d00000IahVVAAZ/view)
--------------------------------------------------------------------------------------------------------------------

![](https://d3q7ie80jbiqey.cloudfront.net/media/image/zoom/33104f50-e56c-4e56-b946-9dcb70e3b829/2.5/9.07958984375/13.088988025277?0)

### 4\. [Expand the hierarchy button >](https://nuclera.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJzZmE6aGllcmFyY2h5RnVsbFZpZXciLCJhdHRyaWJ1dGVzIjp7InJlY29yZElkIjoiMDAxOGQwMDAwMElhaFZWQUFaIiwic09iamVjdE5hbWUiOiJBY2NvdW50In0sInN0YXRlIjp7fX0%3D)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](https://d3q7ie80jbiqey.cloudfront.net/media/image/zoom/03928964-a823-4230-8a49-6bcbbf2b79a0/2.5/3.3333334326744/23.747980613893?0)

### 5\. [View the Hierarchy](https://nuclera.lightning.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJzZmE6aGllcmFyY2h5RnVsbFZpZXciLCJhdHRyaWJ1dGVzIjp7InJlY29yZElkIjoiMDAxOGQwMDAwMElhaFZWQUFaIiwic09iamVjdE5hbWUiOiJBY2NvdW50In0sInN0YXRlIjp7fX0%3D)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](https://d3q7ie80jbiqey.cloudfront.net/media/image/zoom/b45cc6ae-df01-405e-aad3-64fbf4808c8e/1/0/0?0)

## Naming Conventions

Stick to established naming conventions for accounts, please follow guidelines so that we can denote relationships between accounts simply. <br>
For example: 'GSK' might be the account in the highest hierachical position, this is the account we can use to report against for all activity happening within the account.<br>
Beneath this top-order account are multiple account 'sites', with the naming convention utilising a ' - ' to append the site name to the top-order account name e.g. 'GSK - Stevenage, UK', 'GSK - Brentford, UK', 'GSK - North Carolina, USA'. <br>
You could then reach a level below that for individual departments or labs e.g. GSK - Stevenage, UK - Ronald McDonald Lab.<br><br>
In the context of academic institutions, 'University of Cambridge' would sit at the top with accounts sat beneath this for different schools or departments e.g. 'University of Cambridge - School of Pathology' <br><br>
*It is useful to use LinkedIn as the guideline for how to write the company name* since this is a 'self-declared' source the company themselves has declared how they would like their company name to be written.<br> 
Using LinkedIn as the master source serves as a good basis to prevent multiple 'orphan' accounts being generated which are efectively duplicates e.g. GlaxoSmithKline, GSK, SmithKlineBeecham, Glaxo ... <br>
The example in the image below shows how the naming and structure relates:
![Account Structure & Hierarchy](https://d3q7ie80jbiqey.cloudfront.net/media/image/zoom/03928964-a823-4230-8a49-6bcbbf2b79a0/2.5/3.3333334326744/23.747980613893?0)



