# USGS Earthquake API

This simple site allows you to view global earthquakes in the past 24 hours, or use your browser's built-in location API to view earthquakes near you.

[Earthquake API Docs](https://earthquake.usgs.gov/fdsnws/event/1/)

[Location API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)


<img width="1440" alt="Earthquake_near" src="https://user-images.githubusercontent.com/60751508/192332731-6098f2b9-fc77-4de9-8e2d-9a712d99212b.png">
<img width="1440" alt="Quakelist_global" src="https://user-images.githubusercontent.com/60751508/192332760-ac1f06fa-3240-4c40-a618-5465f88b027a.png">
<img width="1440" alt="Quakelist_local" src="https://user-images.githubusercontent.com/60751508/192332781-3ec0e0bc-7855-47f8-8a60-dfe2e1c5d611.png">


<h1>Inspiration</h1>

Our inspiration for this project was our previous experiences with natural disasters, and our desire to help the people who face these disasters more often by providing them with information about nearby incidents, so that they can take precautionary measures.

<h1>What it does</h1>

Our website provides information about the most recent disasters in the United States and also provides the user the option to find out about the disasters occurring in their area by detecting their location. It also provides information about the magnitude of the disaster and the exact location of its occurrence.

<h1>How we built it</h1>

We spent a long time brainstorming ways to approach the challenge provided. We used HTML5 Browser Location API and JavaScript to pull data from USGS’ Earthquake API. We used CSS and HTML to build and render the elements on the web pages, to create an interface as user-friendly as possible.

<h1>Challenges we ran into</h1>

Our front-end developer couldn’t check in to the event with us, because of the capacity restrictions of the venue, so most of our first day was spent researching about front-end development, and attempting to recover from this major setback.

<h1>Accomplishments that we're proud of</h1>

Despite the fact that we didn’t have our front-end developer, we managed to create a working webpage, within 24 hours, without much proficiency in HTML and CSS.

<h1>What we learned</h1>

We learned the basics of front-end development - HTML, CSS, and JavaScript. We learned how to use Adobe Illustrator, and take the help of Bootstrap’s customizable elements to improve the user-friendliness of the website.

<h1>What's next for GeoFlash</h1>

In the time that we had, we only managed to add an Earthquake Detection page, which gives you live information about recent earthquakes and their magnitudes. The next step for GeoFlash is to add more web pages for the other kinds of climate crises, like hurricanes, floods, etc. We want to integrate multiple APIs to improve the precision of the data obtained, and eventually make use of Machine Learning and Artificial Intelligence to train satellites to obtain feeds and images to detect such calamities. We are even thinking about using OpenCV Library with Python programming using algorithms that examine the sky and ground, to detect forest fires.
