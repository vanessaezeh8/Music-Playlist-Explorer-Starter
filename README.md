## Unit Assignment: Music Playlist Explorer

Submitted by: **Vanessa Ezeh**

Estimated time spent: **40** hours spent in total

Deployed Application (**required**): [Music Playlist Explorer Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [✅] **Display Playlists**
  - [✅] Dynamically render playlists on the homepage using JavaScript.
    - [✅] Playlists should be shown in grid view.
    - [✅] Playlist images should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [✅] Fetch data from a provided Javascript file and use it to create interactive playlist tiles.

- [✅] **Playlist Components**
  - [✅] Each tile should display the playlist's:
    - [✅] Cover image
    - [✅] Name
    - [✅] Author
    - [✅] Like count

- [✅] **Playlist Details**
  - [✅] Create a modal pop-up view that displays detailed information about a playlist when a user clicks on a playlist tile.
  - [✅] The modal should show the playlist's:
    - [✅] Cover image
    - [✅] Name
    - [✅] Author
    - [✅] List of songs, including each song's:
      - [✅] Title
      - [✅] Artist
      - [✅] Duration
  - [✅] The modal itself should:
    - [✅] Not occupy the entire screen.
    - [✅] Have a shadow to show that it is a pop-up.
    - [✅] Appear floating on the screen.
    - [✅] The backdrop should appear darker or in a different shade.

- [✅] **Like Playlists**
  - [✅] Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile.
  - [✅] When the heart icon is clicked:
    - [✅] If previously unliked:
      - [✅] The like count on the playlist tile should increase by 1.
      - [✅] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been liked by the user.
    - [✅] If previously liked:
      - [✅] The like count on the playlist tile should decrease by 1.
      - [✅] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been unliked by the user.
    - [✅] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please film yourself liking and unliking:
      - [✅] a playlist with a like count of 0
      - [✅] a playlist with a non-zero like count

- [✅] **Shuffle Songs**
  - [✅] Enable users to shuffle the songs within a playlist using a shuffle button in the playlist's detail modal.
  - [✅] When the shuffle button is clicked, the playlist's songs should display in a different order.
  - [✅] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself shuffling the same playlist more than once. 
  
- [✅] **Featured Page**
  - [✅] Application includes a dedicated page that randomly selects and displays a playlist, showing the playlist’s:
    - [✅] Playlist Image
    - [✅] Playlist Name
    - [✅] List of songs, including each song's:
      - [✅] Title
      - [✅] Artist
      - [✅] Duration
  - [✅] When the page is refreshed or reloaded, a new random playlist is displayed
    - For example, navigating to the all playlists page and then back to the featured playlist page should result in a new random playlist being displayed
    - Note that because your algorithm will not be truly random, it is possible that the same playlist will feature twice in a row. 
    - [✅] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself refreshing the featured page more than once. 
  - [✅] Application includes a navigation bar or some other mechanism such that users can navigate to the page with all playlists from the featured page and vice versa without using the browser's back and forward buttons. 

#### STRETCH FEATURES

- [✅] **Add New Playlists**
  - [✅] Allow users to create new playlists.
  - [✅] Using a form, users can input playlist:
    - [✅] Name
    - [✅] Author
    - [✅] Cover image
    - [✅] Add one or more songs to the playlist, specifying the song's:
      - [✅] Title
      - [✅] Artist
  - [✅] The resulting playlist should display in the grid view.
  - [✅] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself adding at least two songs to the playlist. 

- [✅] **Edit Existing Playlists**
  - [✅] Enable users to modify the details of existing playlists.
  - [✅] Add an edit button to each playlist tile.
  - [✅] Users can update the playlist:
    - [✅] Name
    - [✅] Author
    - [✅] Songs
  - [✅] The playlist grid view and playlist detail modal should update to display any changes (see Required Features, Criterion 1 & 2).
  - [✅] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself:
    - [✅] Editing all of a playlist's features (name, creator, AND songs)
    - [✅] Editing some of a playlist's features (name, creator, OR songs) 

- [✅] **Delete Playlists**
  - [✅] Add a delete button to each playlist tile within the grid view.
  - [✅] When clicked, the playlist is removed from the playlist grid view.

- [✅] **Search Functionality**
  - [✅] Implement a search bar that allows users to filter playlists by:
    - [✅] Name 
    - [✅] Author
  - [✅] The search bar should include:
    - [✅] Text input field
    - [✅] Submit/Search Button
    - [] Clear Button
  - [✅] Playlists matching the search query in the text input are displayed in a grid view when the user:
    - [✅] Presses the Enter Key
    - [✅] Clicks the Submit/Search Button 
  - [✅] User can click the clear button. When clicked:
    - [✅] All text in the text input field is deleted
    - [✅] All playlists in the `data.json` file are displayed in a grid view
    - [✅] **Optional:** If the Add Playlist, Edit Existing Playlist, or Delete Playlist stretch features were implemented:
      - [✅] If users can add a playlist, added playlists should be included in search results.
      - [✅] If users can edit a playlist, search results should reflect the latest edits to each playlist.
      - [✅] If users can delete a playlist, deleted playlists should no longer be included in search results.
      - **Note:** You will not be graded on the implementation of this optional subfeature to keep your grade of this stretch feature independent of your implementation of other stretch features. However, we highly suggest including this in your implementation to model realistic behavior of real applications. 

- [✅] **Sorting Options**
  - [✅] Implement a drop-down or button options that allow users to sort the playlist by:
    - [✅] Name (A-Z alphabetically)
    - [✅] Number of likes (descending order)
    - [ ] Date added (most recent to oldest, chronologically)
  - [✅] Selecting a sort option should result in a reordering based on the selected sort while maintaining a grid view.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video actually renders and is playable when viewing this README. Ensure your walkthrough showcases the presence and/or functionality of all features you implemented above (check them off as you film!). Pay attention to any **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS** checkboxes listed above to ensure graders see the full functionality of your website! (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I would say it was most adding the DOM to the website especially the New playlist feature

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I would do more practice to get more comfortable with vanilia Javascript and improve in my CSS. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I would have loved to add the clear button for the search features. 

### Open-source libraries used

- [Add any links to open-source libraries used in your project.](https://fontawesome.com/icons/)

### Shout out

Shoutout to my Cohort TA,Gregg who was always there to sit with me through all my bugs and explain them better and also shoutout to my friends, Mercy and Eniola for their help.
