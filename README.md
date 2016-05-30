# Mocking page module

## Template


### Folder structure

- templates
  - api  _Contain mocks response_
  - client _Contains build template web application_
  - sources _Contains sources template web application_
    - angular _Contains files related to Angular app_
      - js
        - app
        - controllers
        - directives
        - services
    - partials
      - directives
    - partials _Contains part of html files_
      - common
      - editor
      - view
    - resources _Contains vendors CSS & JS files (eg. boostrap, AngularJS etc.) and images
      - css
        - bootstrap
        - fonts
      - images
      - js
        - vendors
    - scss _Contains SASS files for theme_

### Instalation
``` 
  > cd templates/ 
  > gulp
```


## Template example
* View: http://mock-page.localserv.waw.pl/templates/client/view.html
* Editor with content: http://mock-page.localserv.waw.pl/templates/client/editor.html
* Editor without content: http://mock-page.localserv.waw.pl/templates/client/editor_empty_content.html

## API Example
* Version 1: http://mock-page.localserv.waw.pl/api/v1/
* Version 1 mocks: http://mock-page.localserv.waw.pl/api/v1/mocks/ 

**NOTE**: _Mocks is static Response with fake data. Only use for testing._

