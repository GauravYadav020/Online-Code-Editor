# Online-Code-Editor-using-React---React-Project---GauravYadav

Before We are going to build project npm i Codemirror-2 not supporting in react latest versions above 16V.

# Before Running npm install codemirror react-codemirror2 command we need to downgrade our react version.

# Steps for Downgrading react version

    *Open package.json file and change the react version to <=15.5 >=16.x<=> verison.
    *Delete the nodeModules folder & package-lock-json
    *After deleteing all these files open the terminal and run <npm intall>

# Bulding the Code editor

For building the Code we need to create a sparate component as Editor.jsx.
After Creating the Component create a function and export into the App.js
After Creating component we need to import some libraies from the Code mirror they are:-
<
<import "codemirror/lib/codemirror.css">
The above Command contains the style related to text editor that we are going to build
<import "codemirror/theme/material.css">
The Above Command contains Themes related data of our editor that we are going to build
<import "codemirror/mode/xml/xml">
The Above Command that support to produce Xml(HTML) language to write inside our Code Editor.
<import "codemirror/mode/javascript/javascript">
The Above Command that support to produce javaScript(javaScript) language to write inside our Code Editor.
<import "codemirror/mode/css/css">
The Above Command that support to produce css(CSS) language to write inside our Code Editor.
<import { Controlled as ControlledEditor } from "react-codemirror2">
ControlledEditor is a inbuilt function that is from codemirror which gives access to control the output of these languages , Changes, Themes ,Serial Numbers.

In App.js we have created 2-classes they are :

# .pane top-pane:-

        this class contains 3 Divs editors one for HTML&CSS&JS
        Wherewe can write our programming

# .pane :-

      This a another Div Class which for our output Block
      in this Div we are using <iframe/> tag which contains data related to codemirror
      1) srcDoc():- Inside the source doc we are proving the HTML&CSS&JS modes
      2)titel:- which Gives the Identification of that tab name
      3)sandBox:- we are giving permission to allow only scripts inside the iframes.
      4)width=100% &Hight=100% &frameBroder=0
