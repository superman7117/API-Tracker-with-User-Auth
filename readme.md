# API Tracker with User Auth

Allow authenticated users to track and manage data from an external API.  Use Mongoose for your database interaction, Firebase for user authentication, and Request for making API calls.

## MVP:
- Allow users to register, login, and logout.  User information should be stored in mongo.
- Properly display the frontend based on the login state.  i.e.: If the user is not logged in, they shouldn't see the logout button.  If they are logged in, they should not see the login or register buttons.
- Your app should retrieve and display information from an external API, and users should be able to select and save information related to that data.  Ideally this data would be timely.  Weather, stocks, or something like that would be best, so the user can see the current state of the data.
- Users should be able to reasonably select potential data from the API, and then see their selections.
- Be sure to show as much useful information from that API as you can sensibly.  Perhaps you should show a list in one view, and a detail view for one piece of data.
- The user should be able to interact with their saved data, like adding, removing, and editing it.
- Allow a user to reset their password if they forget it.  Also, logged in users should also be able to choose to change their password.  (look up Firebase resetPassword and changePassword).
- The homepage of your app should be a nice splash page to welcome your users.
- Include a descriptive readme to be displayed on your github.
### Make your app look nice and stylish!

# heroku http://floating-dusk-17220.herokuapp.com/
