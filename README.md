<h2 align="center"><a href="https://alexisdanizan.github.io">🍿 Checklist Tools Website</a></h2>

<p align="center">
  <em>A user-friendly and fluid interface for using checklists.</em>
</p>
<p align="center">
    <a href="https://alexisdanizan.github.io" target="_blank">
        <img alt="Checklist tools website" title="Checklist tools website" src="https://github.com/AlexisDanizan/Checklist-Tools-Website/blob/master/data/checklist-tools.gif?raw=true" width="800">
    </a>
</p>


### Use the online version: [alexisdanizan.github.io](https://alexisdanizan.github.io)

[![npm](https://img.shields.io/npm/dw/localeval.svg)](https://www.npmjs.com/package/checklist-tools-website)
[![Hex.pm](https://img.shields.io/hexpm/l/plug.svg)]()
[![GitHub contributors](https://img.shields.io/github/contributors/cdnjs/cdnjs.svg)]()
[![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Stars)](https://github.com/AlexisDanizan/Checklist-Tools-Website)
[![GitHub followers](https://img.shields.io/github/followers/espadrine.svg?style=social&label=Follow)]()

  
**All the power of checklists, without the overhead:**
 - User-friendly and fluid interface
 - Fast build with Preact and Milligram
 - Generate PDF report
 - Offline checklists storage with LocalStorage
 - 💥 **Instant no-config app bundling**


## Getting Started

### Installation

To install the stable version:
```bash
npm i checklist-tools-website
```

Or
```bash
git clone https://github.com/AlexisDanizan/Checklist-Tools-Website.git
yarn install
```

### How to use ?
Build the final the version with Gulp:
```bash
gulp build
```
Built files are available in `dist` folder.

### Customize

Build and serve files with Gulp:
```bash
gulp build
gulp webserver
```
#### Add a new Checklist
Create a new json files in `src/checklist`.

Example template:
```json
{
  "name": "Front-dev",
  "group_categories": [
    {
      "title_group": "Head",
      "categories": [
        {
          "title": "Meta tags",
          "tasks": [
            {
              "title": "Doctype",
              "links": [
                {"path":"https://www.w3.org/TR/html5/syntax.html#determining-the-character-encoding",
                  "text":"Determining the character encoding - HTML5 W3C",
                  "type": "link"}
              ],
              "explications":"The Doctype is HTML5 and is at the top of all your HTML pages.",
              "code":"<!doctype html> <!-- HTML5 -->",
              "priority": "high"
            }
          ]
        }
      ]
    }
  ]
}
```

To make the checklist available in app you need to modify `src/stores/checklistStore.js` 
and add `import example from '../checklist/example.json';`.

Next add it in INITIAL_DATA:
```js
const INITIAL_DATA = {
  checklists: [
    example
  ],
  done: {
    high:{
      count: 0,
      total: 0
    },
    medium:{
      count: 0,
      total: 0
    },
    low: {
      count: 0,
      total: 0
    }
  },
  selected: 0,
  projet_name: "",
  team:""
};
```
## Troubleshooting
 - Empty the localstorage before add a new checklist.
