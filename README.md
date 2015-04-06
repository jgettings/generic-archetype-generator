# Generic Archetype Generator #

> archetype: 
>
> noun | ar·che·type | \ˈär-ki-ˌtīp\
>
> the original pattern or model of which all things of the same type are representations or copies :  prototype; also :  a perfect example 

This tool will help create a new project quicker.
It is intended to work similar to the [Maven Archetype Plugin](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html)
but it is designed to work with any company standards and can create projects that use different frameworks. This is useful for companies that do not have one set technology stack for all projects.

It is written in [Node.js](https://nodejs.org/), but we do not intend to push this to NPM because without any archetypes defined (see "Configuration" below) it is not very useful. 


### Configuration ###
This is shared with the intention that anyone can fork this and add archetypes as necessary for their own use. See **archetypes/example** for an example. There are also some configuration options in archetypes/default/config.json for things like jira base url, etc. 

The files in the **default** archetype will be added to all projects and anything in the archetype-specific folders will be added to projects of that type only. 

The **questions** are using [Inquirer.js](https://github.com/SBoudrias/Inquirer.js). All responses are available as filters in the resulting files by using ${question-name} in the files to be copied.


### Installation ###
This is a node js project and can be installed using npm. For use locally you can clone this repo and do a ```npm install``` in the project directory.


### Create a Project ###

Once this is installed globally, all you have to do is navigate to the parent folder where you want your project to reside and run
```
generate-archetype
```
The tool will prompt you for configuration options and generate some base files so that it is all set up to run without much effort.