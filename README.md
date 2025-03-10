# Far Away ✈️

Far Away is a simple React-based packing list application that helps users manage their travel essentials efficiently. It allows users to add, sort, check off, and remove items from their packing list.

## Live Demo
Check out the live version of the app here: [Far Away](https://far-away-v.netlify.app/)

## Features
- Add items with a description and quantity
- Mark items as packed/unpacked
- Remove items from the list
- Sort items by input order, description, or packed status
- Clear the entire packing list with a confirmation prompt

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/far-away.git
   cd far-away
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open your browser and go to `http://localhost:3000/`

## Project Structure
```
far-away/
│-- src/
│   │-- components/
│   │   │-- Logo.js
│   │   │-- Form.js
│   │   │-- PackingList.js
│   │   │-- Item.js
│   │   │-- Stats.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## Technologies Used
- React.js (useState for state management)
- JavaScript (ES6+ features)
- HTML & CSS
- Netlify (for deployment)

## How It Works
1. Users enter an item description and select the quantity.
2. Click "Add" to include the item in the packing list.
3. Users can check/uncheck items to mark them as packed/unpacked.
4. Items can be sorted based on different criteria.
5. Users can remove individual items or clear the entire list.

## Contributing
If you'd like to contribute, feel free to fork the repo and submit a pull request. 

## License
This project is open-source and available under the MIT License.

---
Enjoy your travels with a well-organized packing list! ✈️
