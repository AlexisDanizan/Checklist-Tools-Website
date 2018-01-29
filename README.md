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

[![GitHub license](https://img.shields.io/github/license/AlexisDanizan/Checklist-Tools-Website.svg)](https://github.com/AlexisDanizan/Checklist-Tools-Website/blob/master/LICENSE)
[![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist/)
[![GitHub issues](https://img.shields.io/github/issues/AlexisDanizan/Checklist-Tools-Website.svg)](https://github.com/AlexisDanizan/Checklist-Tools-Website/issues)
[![GitHub stars](https://img.shields.io/github/stars/AlexisDanizan/Checklist-Tools-Website.svg)](https://github.com/AlexisDanizan/Checklist-Tools-Website/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/AlexisDanizan/Checklist-Tools-Website.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FAlexisDanizan%2FChecklist-Tools-Website)

**All the power of checklists, without the overhead:**
 - User-friendly and fluid interface
 - Fast build with [Preact]() and [Milligram](https://github.com/milligram/milligram)
 - Generate PDF report
 - Offline checklists storage with LocalStorage
 - 💥 **Instant no-config app bundling**

Based on checklists:
 - [Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist)

## Installation

**Install with npm**
```bash
npm i checklist-tools-website
```

**Install with Yarn**
```bash
yarn add checklist-tools-website
```

**Install manually**

```bash
git clone https://github.com/AlexisDanizan/Checklist-Tools-Website.git
yarn install
# or
npm install
```

## How to use ?

**Build with [Gulp](https://github.com/gulpjs/gulp)**
```bash
gulp build
```
Built files are available in `dist` folder.

## Customize

**Build and serve files with [Gulp](https://github.com/gulpjs/gulp)**
```bash
gulp build
gulp webserver
```

The version is available at [http://localhost:8080](http://localhost:8080)

### Add a new Checklist

Create a new json files in `src/checklist`.

Sample template:
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
  ...
};
```

## Troubleshooting

The new checklist does not appear in select:
 - Empty the localstorage before add a new checklist.
 
## Contributing

**Open an issue or a pull request to suggest changes or additions.**

### Guide

The **Checklist Tools Website** repository consists of two branches:

#### 1. `master`

This branch consists of the current stable branchof [Checklist Tools Website](https://github.com/AlexisDanizan/Checklist-Tools-Website).

#### 2. `develop`

This branch will be used to make some significant changes to the structure, content if needed. It is preferable to use the master branch to fix small errors or add a new checklist.

## Support

If you have any question or suggestion, don't hesitate to use Twitter:
* [Twitter](https://twitter.com/alexisdanizan)

## Author

**[Alexis Danizan](https://github.com/AlexisDanizan)**

## Contributors

This project exists thanks to all the people who contribute.

## License

Designed and created with ♥ by Danizan Alexis. Licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).