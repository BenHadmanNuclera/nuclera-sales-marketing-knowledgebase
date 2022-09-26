---
sidebar_position: 5
slug: quotes
title: Quotes
authors:
  - name: Ben Hadman
    title: Senior Digital Marketing Manager
tags: [salesforce]
---

:::caution

this content is under development, for illustrative purposes only.

:::

# Quotes

### Prequisites

- Opportunity is open
- Opportunity Currency is filled
- Account is linked
- Account has Billing Address filled
- Contact is linked
- Contact has Shipping Address filled
- Primary Contact is the person to receive the quote

### Add Products to Opportunity

- Click on the Products Related List from the opportunity record.
- Click the Add Products button in the top right.
- Select the products which you would like to add to the quote. (The currency is filtered by the Opportunity Currency field to show the products in the correct currency)
- Add the correct quantity in the quantity fields. (Leave Date and Line Description blank)
- Click Save at the bottom of the modal screen.
  (Move back to the opportunity record)

### Creating a Quote from an Opportunity

- Click on the Quotes Related List from the opportunity record.
- Click the New Quote button in the top right.
- Fill in the following fields:

* Quote Name the quote the company name and/or the contact name. (A quote number will be automatically generated in a separate field)
* Expiration Date this by default should be 30 days into the future of the date you expect to issue the quote.
* Status = 'Draft'
* Tax if applies (US)
* Shipping and Handling Leave blank if absorbed into cost of unit.
* Prepared For These fields should be prepopulated with Primary Contact information
* ddress Information These fields should be prepopulated with Account information

- Click Save
  (The page may need to be refreshed for the quote to appear)

### Quote Process

Quote issuing follows a similar staged process as opportunities. Depending on the need for internal review of quotes this process may be shorter or as outlined below.

### Draft Initial stage after creation

- Needs Review (If applicable) Reviewer needs to check the quote
- Approved Reviewer approves the quote and issuer can send to customer
- Rejected Reviewer rejects the quote and uses the Activity pane to write a task for the issuer detailing what needs changing.
  Presented to Customer Issuer has sent to customer and is waiting for a reply
- Accepted Customer accepts the quote
- Declined Customer Declines the quote

### Generating a Quote PDF

Once the Quote has been set to approved status the quote issuer can create a Quote PDF which will generate the quote in PDF format, suitable for sending to a customer.

- Click the Create PDF button in the top right of the screen
- Review the generated PDF
- Click Save PDF
- Download or Print using the buttons in the PDF Viewer.
- Send the quote to the customer either via Salesforce or Outlook.
- Each time the quote detail is amended a new PDF Quote will need to be generated, these versions will be numbered and listed in the Quote PDFs related list.

### Syncing the Quote to the Opportunity

Syncing the quote to the opportunity will replace the opportunity products listed and update the Opportunity Amount assigned to the opportunity which importantly feeds through to pipeline reports.

From the quote record view click the Start Sync button in the top right of the screen.

### Changes to a Quote

Any changes/revisions to a quote should be edited on the existing quote, all changes to fields are tracked. A second quote should not be generated as the tracking becomes split over >1 record and analytics will be skewed.

### Issuing Discounts

Discounts from the standard price can be applied to the quote line item, do not confuse this with the opportunity product. You can apply percentage discount to the line item by editing the discount box.

Discount as part of the partner promotion package
Discount is applied in the same way as above however the quote template applied should be the promotion template which includes the phrasing which describes the promotion package.
