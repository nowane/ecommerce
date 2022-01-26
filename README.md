# Ecommerce | Full Stack Frameworks with Django

## Project Overview

This is the fourth milestone project in obtaining a **Full-Stack Web Development Diploma** from  **[Code Institute](https://codeinstitute.net/)**. The purpose of this project is building a full-stack site based around business logic used to control a centrally-owned dataset. Features of the project will include an authentication mechanism, as well as providing paid access to the site's data and/or other activities based on the dataset, such as the purchase of a product or service.

The required main technologies for this project are **HTML**, **CSS**, **Javascript**, **Python** + **Django**, using a relational database (MySQL or Postgres) and using Stripe payments. To improve the overall quality and user experience of the site other technologies were used as well. The full list of technologies used can be found in the technologies section of this document. 

Ecommerce - FabricZ is designed for people who take great pride and joy creating their own clothing. It is our goal to facilitate those people, supplying them with the best quality materials and the most beautiful fabrics. The goal is to build a loyal and growing base of customers, who can easily and intuitively navigate the site prodiving them a positive user experience.  

**Please note: To open any links in this document in a new browser tab, please press CTRL + Click.**


View live website [here](https://fabricz.herokuapp.com/)

---

A mockup of the project, displaying responsiveness.

![Mockup](-----------------------------------)

---

## Table of content

- [Tradeoff table](#tradeoff-table)
- [User experience -UX-](#user-experience--ux-)
  - [User stories](#user-stories)
    - [As a new user](#as-a-new-user)
    - [As a returning user](#as-a-returning-user)
    - [As the site owner/admin](#as-the-site-owner/admin)
  - [Design](#design)
    - [Colour scheme](#colour-scheme)
    - [Typography](#typography)
    - [Styling](#styling)
    - [Wireframes](#wireframes)
    - [Database schema](#database-schema)
- [Features](#features)
  - [Features implemented](#features-implemented)
    - [Navigation](#navigation)
    - [Security](#security)
    - [Managing data](#managing-data)
      - [Update database](#update-database)
      - [Delete product](#delete-cuisine)
      - [Delete product:](#delete-recipe)
      - [Add or edit product](#add-or-edit-recipes)
      - [Product information](#recipe-information)
      - [Profile page](#profile-page)
    - [Future features](#future-features)
- [Technologies](#technologies)
  - [Languages](#languages)
  - [Libraries and frameworks](#libraries-and-frameworks)
  - [Version control, workspace, repository storage and deployment](#version-control,-workspace,-repository-storage-and-deployment)
  - [Other technologies](#other-technologies)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Acknowledgements](#acknowledgements)
- [Disclaimer](#disclaimer)

---


## User Experience -UX-

### User stories

  #### As a new user

- As a new user, I want to immediately understand the purpose of the site	to be able to decide whether to stay or not.
- As a new user, I want to easily browse through fabrics and be able to tell how much they cost and how others have rated them.
- As a new user, I want to create an account easily to be able to purchase products.
- As a new user, I want to add fabrics to my shopping cart before registering to avoid having to register if not necessary.
- As a new user, I want to be able to learn more about a specific fabric to make an informed purchase decision.
- As a new user, I want to filter my search by different criteria to find a specific product.
- As a new user, I want to read reviews/ratings for fabrics to make an informed purchase decision.

[Back to table of content](#table-of-content) 

---
  #### As a returning user

- As a returning user, I want to see if/what fabrics are on sale to find the best value for money.
- As a returning user, I want to have free delivery above an certain order threshold to feel rewarded for larger purchases
- As a returning user, I want to view my previous purchases to be able to make repeat orders more easily.
- As a returning user, I want to review my basket prior to checkout to inspect quantities/products.
- As a returning user, I want to receive confirmation of my order to have proof of purchase.
- As a returning user, I want to save my default delivery details to proceed to the checkout more quickly in the future.
- As a returning user, I want to leave a review and rating for fabrics to inform others about their potential buy.

[Back to table of content](#table-of-content) 

---
  #### As the site owner/admin

- As the owner/admin of the website, I want to be able to view, add, edit and delete products to keep the products list up to date.
- As the owner/admin of the website, I want to manage the attributes assigned to a product so I can correctly display and categorise products.
- As the owner/admin of the website, I want to provide a secure shopping experience so the customers can confidently return to the site.
- As the owner/admin of the website, I want to have a secure payment structure so customers can safely pay.

[Back to table of content](#table-of-content) 

### Design

  #### Colour scheme

  The main colours used for the site are as follows:

![Colour scheme](https://github.com/nowane/ecommerce/blob/main/media/coolors.png)

- Two darker shades of blue are used for for background.
- The light blue is used mostly for text, headers and links. 
- Purple is used throughout the site for buttons and links that can be clicked, as well as when hoovering over an element.
- The white/gray is used for the search form when active, as well as a background for places in need of some extra contrast.

[Back to table of content](#table-of-content)

---

  #### Typography

[Raleway](https://fonts.google.com/specimen/Raleway?query=raleway) - A relatively slim font used for all headers.

[Karla](https://fonts.google.com/specimen/Karla?query=karla) - A softer and elegant font used for everything other than headings. 

---

  #### Wireframes

Added [Wireframes](------------------) for desktop, tablet and mobile.

[Back to table of content](#table-of-content)


  #### Database schema

![Diagram schema](------------------------)


[Back to table of content](#table-of-content)

---

## Features

### Features implemented

  #### Navigation





[Back to table of content](#table-of-content)

---

  #### Security







[Back to table of content](#table-of-content)

---

  #### Managing data

  ##### Update database
  





[Back to table of content](#table-of-content)

---

  ##### Delete product






[Back to table of content](#table-of-content)

---

  ##### Delete product






[Back to table of content](#table-of-content)

---

  #####  Add or edit product
  





[Back to table of content](#table-of-content)

---

  ##### Product information







[Back to table of content](#table-of-content)

  ##### Profile page







[Back to table of content](#table-of-content)

---

### Future features





[Back to table of content](#table-of-content)

---

## Technologies

  ### Languages

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used to style and colour HTML as well as dynamic elements.
- [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - Used to structure the individual page(s) of the website.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used to create and manipulate the dynamic elements of the website.
- [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) - Used to generate HTML from templates.
- [Python](https://www.python.org/) - Used for the backend server and to run queries to the database.

[Back to table of content](#table-of-content) 

---

  ### Libraries and frameworks
  
- [Bootstrap v5.1](https://getbootstrap.com/docs/5.1/getting-started/introduction/) - Javascript plugins and CSS toolkit used for this project.
- [Django](https://www.djangoproject.com/) - Python web framework used for this project.
- [Font Awesome](https://fontawesome.com/) - Icons used for this project.
- [Google Fonts](https://fonts.google.com/) - Fonts used for this project.
- [JQuery](https://jquery.com/) - Used to simplify DOM manipulation.

[Back to table of content](#table-of-content) 

---

  ### Version control, workspace, repository storage and deployment

- [Git](https://git-scm.com/) - Version control software used to commit and push code to the GitHub repository where the source code is stored.
- [Gitpod](https://www.gitpod.io/) - Main workspace IDE (Integrated Development Environment).
- [GitHub](https://github.com/) - Used to store the project repository and deploy the website via github pages.
- [Heroku](https://www.heroku.com/platform) - Platform used to deploy this project.

[Back to table of content](#table-of-content) 

---

  ### Other technologies

[Coolors](https://coolors.co/) - Used to create a colour schema.

[Favicon](https://favicon.io/) - Used for making the favicons.

[Jpg2png](https://jpg2png.com/) - Used to convert jpg to png.

[Namecheap](https://www.namecheap.com/) - Used for creating the site logo.

[Photopea](https://www.photopea.com/) - Used to get rid of the logo's background-colour.




[Back to table of content](#table-of-content)

---

## Testing

This [testing document](https://github.com/nowane/ecommerce/blob/main/TESTING.md)  contains all testing.

[Back to table of content](#table-of-content)

---

## Deployment

The master branch of this repository is the most current version and has been used for the deployed version of the site. Separate branches were used developing other features.

**Environment variables values and Heroku Config Vars used in the sections below will be unique to each SQLite, Postgres and AWS S3 Bucket created. Please refer to their documentation for further details.**

<details>
<summary> How to clone and run the repository locally</summary>
<p>

To clone this project from its [GitHub repository](https://github.com/nowane/ecommerce):
- From the repository, click **Code**.
- In the **Clone > HTTPS** section, copy the clone URL for the repository.
- In your local IDE open Git Bash.
- Change the current working directory to the location where you want the cloned directory to be made.
- Type `git clone`, and then paste the URL you copied earlier.
```console
git clone https://github.com/nowane/ecommerce.git
```
- Press Enter. Your local clone will be created
- Either create a file called `env.py` to hold your app's environment variables, or store the configure environment variables in your IDE. They should contain the following:

```console
import os

os.environ.setdefault("SECRET_KEY", "<App SECRET_KEY of choice>")
os.environ.setdefault("DEVELOPMENT", "True")
os.environ.setdefault('STRIPE_PUBLIC_KEY', '<Key generated by Stripe>')
os.environ.setdefault('STRIPE_SECRET_KEY', '<Key generated by Stripe>')
os.environ.setdefault('STRIPE_WH_SECRET', '<Key generated by Stripe for webhook endpoint>')
```
To find your Stripe keys, login to Stripe - under the **Developers** tab look for the 'Publishable Key' and 'Secret Key'

The webhook secret key can be found under **Webhooks** once you have created an endpoint, which should be set to receive all events and match this url structure:
```
<your site's base url>/checkout/wh/
```
You will need a different endpoint for the local version and deployed site, updating the `STRIPE_WH_SECRET` accordingly in their respective environment variables.

**The following should be listed in your .gitignore file, preventing environment variables accidently being made public:**
```
core.Microsoft*
core.mongo*
core.python*
env.py
__pycache__/
*.py[cod]
*.sqlite3
*.pyc
node_modules/
*.json
```
- Install app requirements using:
```
pip3 install requirements.txt
```
- Apply database migrations using:
```
python3 manage.py migrate
```
- Create a superuser and fill in details:
```
python3 manage.py createsuperuser
```
- The app can now be run locally using:
```
python3 manage.py runserver
```
</details>

[Back to table of content](#table-of-content)

---

  #### Setup Procfile



[Back to table of content](#table-of-content)

---

### Heroku

  #### Create a new Heroku application




[Back to table of content](#table-of-content)

---

  #### Connecting to the GitHub repository





[Back to table of content](#table-of-content)

---

  #### Setup the Config Vars





[Back to table of content](#table-of-content)

---

  #### Automatic deployment





[Back to table of content](#table-of-content)

---

### Local development

  #### Forking





[Back to table of content](#table-of-content)

---

  #### Making a local clone





[Back to table of content](#table-of-content)

---

## Credits

[noimage.png](https://commons.wikimedia.org/wiki/File:No-image-available.png) - Used with this linking to the license.




[Back to table of content](#table-of-content)

  ---

  ### Acknowledgements



[Back to table of content](#table-of-content)

---

## Disclaimer

This site was developed for educational purposes.

[Back to table of content](#table-of-content)