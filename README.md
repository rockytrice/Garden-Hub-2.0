# Create React Express App
GardenHub 2.0

System Summary:
This application directly controls a user’s home lawn/garden  irrigation system and monitors the immediate soil and climate with wirelessly transmitted sensor data. The user must follow a simple set of instructions for attaching the GardenHub-Controller to their previous irrigation controller, and they must also place the soil sensors throughout the `zones` of their lawn/garden. After installing the hardware, the application will automatically switch the irrigation system on and off in response to measured soil moisture level of each zone. The user of course can select to manually switch their irrigation on/off or preset timers for their irrigation if they would like; however the core concept is that the automated mode relieves the chore of setting timers while also, most importantly, improves water use efficiency.
	The application automates control of irrigation and it also provides real time data of each zone that can be viewed individually or as a summarized description of their garden’s ‘health index’. Due to time constraints of the deadline we will only be utilizing temperature and moisture sensors as well as doing a minified demo of the concept on a single potted plant. The fully developed project will utilize solar and battery powered sensors that can be remotely dispersed in a yard/garden/field. That design and schematic will be presented (and I intend to build one just as a demo, time permitting)


Automation Method & Benefits:
The user sets a moisture max and minimum level to regulate the cycle of adding or allowing water to drain from the soil. When the minimum level of moisture is reached the water is turned on till the maximum level is reached. Then the water is shut off until the minimum permitted moisture level is achieved again. The cyclical nature of the watering will ensure the roots are provided with the water they need as well as the oxygen need. The oxygen is pulled down to the roots by the evacuating water. 


Web App Deployment Coming Soon:

The passport-jwt login page
<img src='https://github.com/Pioneer18/garden_hub2.1/blob/master/src/images/Screenshot%20(37).png'>

Dashboard Weather API (forecast for the week)
<img src='https://github.com/Pioneer18/garden_hub2.1/blob/master/src/images/Screenshot%20(50).png'>

Real time Temperature and Humidity from garden sensors (relies on WebSockets and MQTT)
<img src='https://github.com/Pioneer18/garden_hub2.1/blob/master/src/images/Screenshot%20(48).png'>

<img src='https://github.com/Pioneer18/garden_hub2.1/blob/master/src/images/Screenshot%20(49).png'>

Manual and Auto mode control page
<img src='https://github.com/Pioneer18/garden_hub2.1/blob/master/src/images/Screenshot%20(54).png'>







