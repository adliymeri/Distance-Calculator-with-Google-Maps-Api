# Distance-Calculator-with-Google-Maps-Api
A web application to calculate the distance between addresses added with autocomplete.
The user has to complete a HTML a 3-step form. In the scond step of the form the user has to complete two inputs that suggest addresses from Google Maps Places Api. The user has the option to add or remove multiple inputs. After inserting the addresses markers show up on a map a route is drawn between them showing also the distance.
This is enabled by using Distance Matrix Api,Places Api and Directions Api.
After the form is submitted it is handled with PHPMailer library using a smtp configuration, and two emails are sent with all the data from the form, one to the client and one to the user.
