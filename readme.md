Code Challenge #5: Angular and MongoDB
======================================
Description
Instructions
This assessment is intended to see how you are progressing with Angular, Mongo, Node, and Express. It is open-notes and open-book. No talking is allowed for the duration.

Once you are complete, check your work into a new repo and post it on GitHub. Submit this link with your assignment.

A friendly reminder that this is simply a way for us to see how you are individually doing with the technology. If this is no problem, great. If you are struggling with it, get done what you can and still submit. This assessment is not an indicator of how you will perform post Prime or a measure of overall success thus far. It just gives us an idea of where you are at.

Just relax and show us what you know!

Thanks and good luck!

Your Hero Tracker
The Department of Superhero Knowledge needs an app to help track super hero aliases and powers. You are going to build them this app with Angular and MongoDB. This app will have the following features. Please do not add anything. Focus on the functionality listed.

Hero Entry
This will have a form to fill out and create new heroes. Each hero will have the following information on their record:

alias (this is their superhero name)
first_name
last_name
city
power_name
Store these in a Collection called Heroes with Mongo.

Hero Listing & Removal
This should show a list of heroes, displaying all the information from the entry captured in the view before.

Node Server
Your app will need a Node/Express server that can serve static files. It should make use of route modules and run on port 4242.

Database
If you follow the naming guidelines above for your Collection, there is no need to submit any information about your database.

HARD MODE
Give each listing a button to delete that listing from the database.

PRO MODE
Super Power Select

Make the power name input into a select drop down list that will be populated by options from the database. Each super power has just one field called: power_name

Enter the following known super powers into your database of super powers:

Invisibility
Flight
Super Speed
Heat Vision
Super Strength
Accelerated Healing
Power Blast
Animal Affinity
Use the power_name string field as the value in your option elements. This would store the string on the Hero object.
