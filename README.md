# Serverless Web Application

## Introduction
This is a serverless web application that allows users to capitalize and reverse text or perform individual operations on the input text. The application is deployed on AWS and leverages various AWS services for different components.

## Services used:
* AWS CodeCommit
* AWS Amplify
* AWS Lambda
* AWS StepFunctions
* AWS APIGateway

## Application Overview
* The web application provides a user-friendly interface where users can enter text and choose from various transformation options (capitalization, reversal, or both).
* The application has dark mode support and responsive design for different screen sizes.
* It leverages AWS services to perform text transformations securely and efficiently.
* The user's mode preference is persisted across sessions using local storage.
* AWS CodeCommit is used for version control, allowing collaboration among developers.
* AWS Amplify simplifies the deployment process and provides continuous integration and continuous deployment (CI/CD) capabilities.
* AWS Lambda functions handle the actual text transformations based on user input.
* AWS Step Functions provide orchestration to ensure the correct sequence of transformations.
* AWS API Gateway serves as the interface between the web application and Lambda functions, allowing users to interact with the application.

## Live Demo
Access the live version of the application [here](https://master.d2liw1ey0h20u5.amplifyapp.com)
