---
sidebar_position: 3
slug: contacts
title: Contacts
authors:
  - name: Ben Hadman
    title: Senior Digital Marketing Manager
tags: [salesforce]
---

# Contacts

## Introduction

Contact records are the people you interact with. The fields we store on the contacts

## Creating a Contact

There are many way to create a contact but the best suggested way is to make this from the Account record. Find the right account that your contact belongs to, making sure that the location/ site/ department is correct. Click New Contact in the top right hand corner and fill in the fields presented on the popup model.

## Fields

### Standard Fields

Owner - the record owner is a field which is not of great importance until we have specific sales territories or follow-up criteria split by sales users.
Name - The contact's name
Reports to - If you are aware of the contact's manager, you can link this person here, this will form the basis of account organogram mapping.
Title - Job Title, please use their email signature or LinkedIn information.
Lead Source - This field captures the 'first touch' where we first came into contact with the contact, more detailed and robust tracking is performed on the Campaign object
Mailing Address - This is the main address the contact works.
Account Name - All contacts must be connected to an account.
Phone - Phone Number, use this as the primary field and not 'mobile' or 'fax'.
Email - Email Address

### Additional Data Fields

This is information pulled in from a data enrichment service, do not edit this data or manually input. If there is a match the pdl match field will either show as a true or false (ticked or unticked). If there is no value the job has not run yet to search for and enrich the contact profile.
