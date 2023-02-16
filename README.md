# Green Corporate Website
In this project, which is part of my master's thesis, various front-end web technologies are analysed and evaluated in terms of their energy efficiency. The Green Corporate Website is a fictitious company website which is supposed to inform about the services or the employees of the company. The website is used to determine the individual energy demand of the website with the help of standard usage scenarios.

![CaseStudy_GreenCorporateWebsite_Screenshot.png](./assets/CaseStudy_GreenCorporateWebsite_Screenshot.png)

## Usage Scenarios
In order to be able to measure the energy consumption as identically as possible for each adaptation of the web application, usage scenarios are created. The usage scenarios automatically simulate a visit to the website. During the execution, different metrics are tracked with a measurement procedure to be able to determine the energy consumption.

## Measurement
The Green Metrics Tool is used for the measurement. It offers precise possibilities to determine the consumption of 
a web application with different components that are normally used for this type of application. This includes a web server, a web client and, if applicable, a database. These components are deployed independently of each other in Docker containers and can then be measured using the usage scenarios CPU load, memory load or network traffic.

## Analysis

The [Principles of Green Software Engineering](https://principles.green/) contain generic recommendations for making 
software more sustainable. Based on these 
principles, some technologies are analysed below.

### Client Side Rendering vs Static Side Rendering

Part of the research deals with different Javascript web frameworks. React.js has emerged as the market leader in the field of front-end web frameworks in recent years. The pages are rendered on the client side and thus have many advantages in terms of displaying dynamic content. However, the framework has also been criticised for the amount of data required to render web pages. For this reason, the frameworks Next.js and Asto.js are analysed comparatively using the same website. Both frameworks offer the possibility of rendering on the server side and even static rendering with some restrictions. On the one hand, this approach theoretically reduces the load on the client because less Javascript has to be interpreted, and on the other hand it could also reduce network traffic.