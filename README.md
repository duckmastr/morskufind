# Simple Search Web

This project is a simple web application that allows users to search for information based on a number input. The application retrieves data from a JSON file and displays the corresponding information on the webpage.

## Project Structure

```
simple-search-web
├── src
│   ├── index.html        # Main HTML document for the webpage
│   ├── css
│   │   └── styles.css    # Styles for the webpage
│   └── js
│       └── main.js       # JavaScript code for search functionality
├── data
│   └── records.json      # JSON file containing saved information
├── package.json           # Configuration file for npm
├── .gitignore             # Specifies files to be ignored by Git
└── README.md              # Documentation for the project
```

## Getting Started

To set up and run the webpage, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd simple-search-web
   ```

2. **Open the `index.html` file**:
   You can open the `src/index.html` file in your web browser to view the application.

3. **Modify the `records.json` file**:
   Add or update key-value pairs in the `data/records.json` file to change the information that can be retrieved by the search bar.

## Usage

- Enter a number in the search bar and press Enter or click the search button.
- The application will fetch the corresponding information from `records.json` and display it on the webpage.

## License

This project is open-source and available under the MIT License.