# LivinSound

Application Web / Mobile locate and display all the musical events and save our favorites events


### Copy and Run the project on your local machine

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

- Clone the repository
- Create your branch (name of your Branch is the name of your Component)
- Go to your project directory
- Install node_modules listed in package.json

```
git clone [https://github.com/WildCodeSchool/nantes-0219-js-wild-song.git]
git checkout -b BranchComponent
cd /nantes-0219-js-wild-song 
npm install
```

if Materialize is not in package.json:
```
npm install materialize-css
npm install react-materialize
```


### Create your API Key File:

if you work on your local machine, create /src/config.js to include the API Key from SongKick (with the right Key):
```
const config = "xxxxxxxxxx"
export default config ;
```


### Goal of this project: 
- Show music events around you with geoloc
- Show data of event and button for reservation
- Save / Remove in navigator your favorites event
- Make reservation with songKick
- Show help information and show contributor
- (bonus: Create an alert when the event starts soon)


### Technical instruction from our client:
- React
- Song Kick API
- React Materialize
- **Smartphone friendly**


### End project skills :
- understand web browser api
- Learn what’s an api
- Responsive web mobile
- Understand and use asynchrone javascript code
- and more …
- Learn how to read documentation


### Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Materialize](https://react-materialize.github.io/) - A modern responsive front-end framework based on Material Design
* [Songkick API](https://www.songkick.com/developer) - Gives you easy access to the biggest live music database in the world


## Authors

This work is the result of [Wild Code School](https://wildcodeschool.fr/) Project

* **Baptiste** - [LinkedIn](https://www.linkedin.com/in/baptiste-lagisquet-bb2a8937/)
* **Cedric** - [LinkedIn](https://www.linkedin.com/in/c%C3%A9dric-gardianot/)
* **Maelenn** - [LinkedIn](https://www.linkedin.com/in/maelenn-sallic/)
* **Samantha** - [LinkedIn](https://www.linkedin.com/in/samantha-besnard/)
* **Tanguy** - [LinkedIn](https://www.linkedin.com/in/tanguy-j-081087167/)

See also the list of [contributors](https://github.com/WildCodeSchool/nantes-0219-js-wild-song/contributors) who participated in this project.


## Acknowledgments

* Special Thanks to **Simon** - *Teacher/Trainer* - [GitHub](https://github.com/HitAngry)
* Need help to layout your README.md: check **Billie Thompson** work on [GitHub](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md)


### HOW TO USE VAR IN CSS

Look at the color palette :
- the first color is : var(--main-bg-color)
- the second color var(--second-bg-color)
- the third var(--third-bg-color)
- for the "saillance" color var(--button-bg-color)

To define variables in CSS:
```
:root {
  --main-bg-color: #f57c00;
  --second-bg-color: #ff9800;
  --third-bg-color: #ffb74d;
  --button-bg-color: #40c4ff;
}
```
To use the variables: 

```
button {
  background-color: var(--button-bg-color) !important;
}
```



