# Problem Statement

### Backend Task

Consider there is a teacher who wants to teach students online. The teacher has specified their availability for the weekdays.  You will be given the availability for a teacher in a JSON file.
The teacher now wants to accept requests for a class from the students. In response to each request the teacher wants to reply with a date and the time slot for which the class is scheduled. Your task is to give the students a way to book classes. That can be divided into the following sub-tasks:
Create a Django/Express.JS application for this task:
- Read the [teacher_availability.json](https://raw.githubusercontent.com/rohit-userfacet/userfacet-backend-testcase/main/teacher_availability.json) file given to you in memory.
- Create an API Endpoint on which the student can send a POST Request to schedule a class.
- The request will contain the student's name, email address and their preferred day and time slot for the class.
- If a teacher is available at the student's preferred day and time slot, send back a success message.
- If a teacher is not available for a student’s preferred weekday and time slot, return an error message stating that the requested date and time slot is booked.
- Consider each student request to be independent of each other and the teacher availability to be the same for each request.
- Sample JSON for student request format and response format can be found [here](https://github.com/rohit-userfacet/userfacet-backend-testcase/blob/main/student.md).

#### Backend Submission

- Create an application in your localhost using Django/Express.JS as per your choice and write the API logic for the given task there.
- Include a requirements.txt/package.json file containing the list of all used dependencies.
- Push the code along with the output file to a public git repository (preferably Github).
- Submit the link of that repository in the Google Form provided.

### Frontend Task
Design the frontend in React for the API created above. It should include:
- A UI Component to display the teacher availability on the frontend
- Dropdowns for a user to select weekdays, start time and end time for booking a slot. By default the weekday should be selected to today’s day and start time should be selected to the current hour.
- Once a student submits a request to book a class, they should receive a response with either success or error. You are free to design the notification system as you please.
- On page refresh, the selection in all the dropdowns should be preserved.
- A reset button which selects the default value for all the dropdowns.

#### Frontend Submission

- You can use React - CodeSandbox  https://codesandbox.io/s/new . Make sure you Sign up , rename your project and  save your code. 
	  Or
  You have to push your code to a public git repo and publish it to a serverless platform (like netlify) to demo it.

- Submit the links using the google form provided.


## NEXT.JS
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
