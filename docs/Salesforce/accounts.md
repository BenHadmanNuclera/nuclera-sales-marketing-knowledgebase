---
sidebar_position: 2
slug: accounts
title: Accounts
authors:
  - name: Ben Hadman
    title: Senior Digital Marketing Manager
tags: [salesforce]
---

:::caution

this content is under development, for illustrative purposes only.

:::

# Accounts

Accounts are companies and have links to the majority of other Salesforce objects, they might be considered as the 'highest order' object.

## Naming Conventions

Stick to established naming conventions for accounts, although the naming convention isn't required to be too strict for this object but it makes sense to follow guidelines so that we can denote relationships between accounts. For example, if you work with multiple sites, you might need to use names that make sense in a hierarchy but also help you differentiate between two sites with the same name in a similar geographic area. For example: GSK might be the account in the highest position, beneath this are multiple account sites - 'GSK - Stevenage, UK', 'GSK - Brentford, UK', 'GSK - North Carolina, USA' In the context of academic institutions, 'University of Cambridge' would sit at the top with account sat beneath this for different schools or departments e.g. 'University of Cambridge - School of Pathology' It is useful to use LinkedIn as the guideline for how to write the company name and serves as a good basis to prevent multiple 'orphan' accounts which are efectively duplicates e.g. GlaxoSmithKline, GSK, SmithKlineBeecham, Glaxo ...

## Hierarchies

Account objects can be placed into a hierarchy to account for different sites around the world as well as different departments and schools. It is important to create multiple accounts for multinational companies since the billing and shipping addresses associated with them will be incorporated into opportunities and quotes and the requirement to have accurate address data in these scenarios is important.

## Creating an Account

An account can be created from the Accounts Tab in salesforce and by clicking the New Account button in the top right. Enter as much detail as you know about the account.
