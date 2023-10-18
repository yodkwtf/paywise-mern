# Cinematica: Track Your Movies and Shows

Cinematica is a feature-rich MERN (MongoDB, Express, React, Node.js) application that allows users to seamlessly track and manage the movies and shows they watch or plan to watch. With user account management, full CRUD (Create, Read, Update, Delete) functionality, and a user-friendly interface, Cinematica is your go-to tool for organizing your entertainment preferences.

## Key Features

- **User Accounts**: Create and sign in to manage your collection.
- **Add Movies and Shows**: Quickly add details like name, duration, release year, genre, plot, and rating.
- **Rate Movies**: Keep a record of your movie ratings for future reference.
- **Shows Too**: Cinematica supports TV shows, tracking seasons and episodes.
- **Edit and Delete**: Easily manage your collection by editing or removing entries.

## Upcoming Features

We're adding more features to make Cinematica even better:

- **Enhanced Show Support**: Track your favorite shows with ease, including seasons and episodes.
- **Sorting and Filtering**: Sort and filter your collection by name, rating, genre, and more.
- **Watchlist**: Keep a list of movies and shows you plan to watch.
- **Custom Usernames**: Personalize your profile with a custom username.
- **Edit Movies/Shows**: Edit your entries to keep your collection up-to-date.

Cinematica is your ultimate tool for organizing your movie and show preferences.

## Getting Started

1. Clone this repository.

   ```shell
   git clone https://github.com/yodkwtf/cinematica-mern.git
   ```

2. Install server dependencies:

   ```shell
   cd server
   npm install
   ```

3. Install client dependencies:

   ```shell
   cd client
   npm install
   ```

4. Create a `.env` file in the `server` directory and add the following:

   ```.env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
   JWT_SECRET=some_secret_string
   ```

5. Run the server:

   ```shell
   cd server
   npm run dev
   ```

6. Run the client:

   ```shell
   cd client
   npm start
   ```

7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** CSS, CSS Modules
- **Data Validation:** Express Validator
- **State Management:** React Context API

## Deployment

The app is deployed on Vercel. Check it out [here](https://cinematica-dk.vercel.app/).

![Cinematica](https://user-images.githubusercontent.com/55128990/126039817-9b0b9b0a-9b0a-4b0a-9b0a-9b0a9b0a9b0a.png)

## Contact

- Email: 48durgesh.kumar@gmail.com
- GitHub: [@yodkwtf](https://github.com/yokdwtf)
- LinkedIn: [Durgesh Chaudhary](https://www.linkedin.com/in/durgesh-chaudhary/)
