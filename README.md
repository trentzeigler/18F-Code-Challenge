# 18F-Code-Challenge
This is the base repo for a code test for developers to use in tandem with the instructions given if they make it past the first round interview.

# SETUP
* Use the GitHub fork feature to fork this repo into your own account

* If needed, install whatever tools you may need to do local dev with mongodb (e.g. MongoDB Compass)

* Project is run on node version 16.18.0

* Ensure you have docker installed in order to house the container for mongodb instance
--ref: https://hub.docker.com/_/mongo
--If this causes issues, figure a solution to house the db in whatever way you are comfortable

* Feel free to edit the package.json as needed and uninstall or install any deps that you may need

# CLIENT SIDE
* Checkout to client folder in terminal

* run npm i

* run npm run start

# SERVER SIDE
* Checkout to server folder

* run npm i

* run npm run dev

# DEV NOTES/RULES
1 - Have integrity. Please do not share this repo url or any of the testing criteria with anyone

2 - If you are having any issues with the technologies used here, feel free to work around them and deliver the best possible product that you can regardless of if it fits the acceptance criteria. We are looking for those who can think outside the box and adapt to adversity.

3 - Be a free thinker! If you want to add in your own features or make any part of the code more intuitive, absolutely do so!

4 - If you like the BE more, put more effort into the BE files and have a basic FE // Vice Versa

5 - Save any notes that you make have about possible flaws in testing criteria for us to review during the interview. We are always looking to make improvements

6 - Please add in any pseudo-code that you can so that we have a look into why you do things the way that you do them. It will help us to evaluate things that were done as well as help us to access functionality if it is not obvious given how you choose to design the UI.

7 - Have Fun with it! Make the project your own and develop to the best of your abilities given the time alloted and resources available

# TESTING CRITERIA
Create a multi component React/Redux/Node/Mongo app to process results from a REST service and store in a local db instance.

Backend (Node/Express Server && Mongodb):
* On startup of the server, you should fetch data from the following url and store in the db:
  http://jsonplaceholder.typicode.com/posts
* Create a REST API using express/node to interact with your data that you have now stored
* BONUS - Implement authentication method on your endpoints 

Frontend (React/Redux SPA):
* Provide ability for user to search the JSON data by title and body text.
* Results of user search should be presented on the page.
* Provide ability for user to select an entry from the results and have it populate an edit form.
* Provide ability for user to edit the entry and have it saved in the local Redux store. (the edited entry should be presented on subsequent searches until page reload).
* BONUS - Implement auto fill and search on type.
