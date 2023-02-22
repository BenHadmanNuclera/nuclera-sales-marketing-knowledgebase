---
sidebar_position: 1
slug: bioapps-bitesize
title: BioApps Bitesize Slack Newsletter Setup
authors:
  - name: Ben Hadman
    title: Senior Digital Marketing Manager
tags: [leads]
description: How to secompose and send a BioApps Bitesize Newsletter
---

#


# Slack Setup Code

```json title="Slack Setup code"
{
	"blocks": [
		{
			"type": "image",
			"image_url": "https://res.cloudinary.com/benhadman/image/upload/v1676279284/bioapps_dalbv9.png",
			"alt_text": ""
		},
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "BioApps Bitesize - January 2023",
				"emoji": true
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "plain_text",
					"text": "A monthly digest of BioApps R&D highlights",
					"emoji": true
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*<https://nuclera.com|UMAMI_v2>*\n *Experiment ID:* N23R20; N23R86 \n *Who:* <@UF9UYB4BH> \n *Team:* Lys Dev"
			},
			"accessory": {
				"type": "image",
				"image_url": "https://res.cloudinary.com/benhadman/image/upload/v1676282893/unnamed_ymitrm.png",
				"alt_text": ""
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "[Optional Text Description]"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Conclusion:* Comprehensive dataset to support empirical down-selection to an initial set of 22x UMAMI_v2 mastermixes for testing and validation expansion"
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Link to Experiment",
					"emoji": true
				},
				"value": "click_me_123",
				"url": "https://nuclera.com",
				"action_id": "button-action"
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": "*Tags:* *#Performance improvement* | *#New Capability* | *#Bugfix* | *#Workflow simplification*"
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*<https://nuclera.com|UMAMI_v2>*\n *Experiment ID:* N23R20; N23R86 \n *Who:* <@UF9UYB4BH> \n *Team:* Lys Dev"
			},
			"accessory": {
				"type": "image",
				"image_url": "https://res.cloudinary.com/benhadman/image/upload/v1676282893/unnamed_ymitrm.png",
				"alt_text": ""
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "[Optional Text Description]"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Conclusion:* Comprehensive dataset to support empirical down-selection to an initial set of 22x UMAMI_v2 mastermixes for testing and validation expansion"
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Link to Experiment",
					"emoji": true
				},
				"value": "click_me_123",
				"url": "https://nuclera.com",
				"action_id": "button-action"
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": "*Tags:* *#Performance improvement* | *#New Capability* | *#Bugfix* | *#Workflow simplification*"
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*<https://nuclera.com|UMAMI_v2>*\n *Experiment ID:* N23R20; N23R86 \n *Who:* <@UF9UYB4BH> \n *Team:* Lys Dev"
			},
			"accessory": {
				"type": "image",
				"image_url": "https://res.cloudinary.com/benhadman/image/upload/v1676282893/unnamed_ymitrm.png",
				"alt_text": ""
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "[Optional Text Description]"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Conclusion:* Comprehensive dataset to support empirical down-selection to an initial set of 22x UMAMI_v2 mastermixes for testing and validation expansion"
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Link to Experiment",
					"emoji": true
				},
				"value": "click_me_123",
				"url": "https://nuclera.com",
				"action_id": "button-action"
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": "*Tags:* *#Performance improvement* | *#New Capability* | *#Bugfix* | *#Workflow simplification*"
				}
			]
		},
		{
			"type": "divider"
		}
	]
}
```