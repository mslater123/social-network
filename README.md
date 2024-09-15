# Social Network Degrees of Separation

This application allows users to create a social network by adding people and establishing friendships between them. It can find the shortest path (degrees of separation) between any two individuals in the network.

## Features

- **Add People and Friendships**: Users can add people to the network and create bidirectional friendships.
- **Find Degrees of Separation**: Users can find the shortest path between two people in the network, indicating the degrees of separation.
- **View Friendships**: The app displays all the friendships that have been added.

## How It Works

1. **Adding Friendships**: Users enter the names of two people to establish a friendship. The app ensures that the friendships are unique and are not duplicated in the display.
2. **Finding Degrees of Separation**: Users input two names to find the shortest path between them, which indicates how many degrees of separation exist.
3. **Displaying Friendships**: All added friendships are displayed in a list format on the page.

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. Clone or download this repository to your local machine.
    ```bash
    git clone https://github.com/yourusername/social-network.git
    ```
2. Open the `index.html` file in a web browser.

### Project Structure

- `index.html`: The main HTML file containing the structure of the application.
- `styles.css`: The CSS file for styling the application.
- `app.js`: The JavaScript file containing the logic for adding friendships and finding degrees of separation.

### Usage

1. Open `index.html` in a browser.
2. **Add Friendships**:
   - Enter two names in the "Person 1" and "Person 2" fields and click "Add Friendship".
   - The friendship is added to the network and displayed in the "Friendships" section.
3. **Find Degrees of Separation**:
   - Enter the names of two people in the "Start Person" and "Target Person" fields.
   - Click "Find Shortest Path" to display the degrees of separation between them.
4. View the results in the "Result" section and the list of all friendships in the "Friendships" section.

### Example

1. Add friendship between `Alice` and `Bob`.
2. Add friendship between `Bob` and `Charlie`.
3. Find the degrees of separation between `Alice` and `Charlie`. The result should be `2`.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling the application for better user experience.
- **JavaScript**: Logic for managing the social network and calculating degrees of separation.

## Development Plan

### Phase 1: Initial Setup and Core Functionality
1. **Project Initialization**
   - Set up the repository and project structure.
   - Create basic HTML and CSS layout.

2. **Implement Core Logic in JavaScript**
   - Create `SocialNetwork` class with methods for adding friendships and finding paths.
   - Integrate logic with the UI and display friendships dynamically.

### Phase 2: User Interaction and Feedback Improvements
3. **Enhance User Feedback**
   - Use inline messages for confirmation instead of alerts.
   - Add basic input validation to improve user experience.

4. **Error Handling and Edge Cases**
   - Add error messages for invalid or non-existent user queries.
   - Implement conflict resolution for duplicate friendships.

### Phase 3: Advanced Features and Enhancements
5. **Implement Data Persistence**
   - Use `localStorage` to persist the network state across sessions.
   
6. **Advanced User Interface Improvements**
   - Introduce animations and transitions for a better user interface.
   - Allow users to delete friendships.

7. **Graph Visualization**
   - Integrate a visualization library to display the network graphically.

### Phase 4: Testing, Optimization, and Deployment
8. **Testing and Debugging**
   - Write unit tests for `SocialNetwork` methods.
   - Perform UI testing for various edge cases.

9. **Optimization**
   - Optimize performance for larger networks.
   - Refactor code for better maintainability.

10. **Deployment**
    - Deploy the application using GitHub Pages, Vercel, or Netlify.

## Future Improvements

- **Error Handling and Validation**: Add comprehensive error messages and validation for invalid inputs.
- **Friendship Removal**: Implement the ability to remove friendships.
- **Data Visualization**: Use a graphical representation to display the network.
- **User Experience**: Add animations for better user interaction.

## Contributing

Contributions are welcome! To contribute to this project:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them with a descriptive message.
    ```bash
    git commit -m "Add a meaningful commit message"
    ```
4. Push your changes to your forked repository.
    ```bash
    git push origin feature-name
    ```
5. Open a pull request with a description of your changes.

## License

This project is open-source and available under the MIT License.

## Acknowledgements

This app is a simple demonstration of using basic data structures (graphs) to solve the degrees of separation problem in a social network.
