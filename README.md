# emberfire-chat

This addon provides a chat interface for ember apps, and an addition to a service worker that allows a progressive web app to send notifications using Firebase Cloud Messaging.

## Requirements

In order for the addon to be correctly configured it needs the following:
 * Firebase Cloud Messaging Server
 	* Server that sends push notications
 * Topics to subscribe to
 	* topic such as username, or model names
 * Ember app that requires sending messages

## How it Works

 * [ember-chat](https://github.com/PrinceCornNM/ember-chat)
 * Instance Initializer: emberfire-chat - an instance-initializer that adds the push notification listener subscription to the service worker.

## Example:

`{{firebase-chat messages=messages sendMessage='sendMessage' name=name avatarUrl=avatarUrl}}`

## Installation

* `ember install emberfire-chat`

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
