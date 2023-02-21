# Movile Test Zemoga 

basic implementation of a PostList app that fetches data from a remote API and displays a list of posts. The user can also mark posts as favorites, delete them or remove non-favorite ones

Here is a brief summary of the code:

App.tsx: The root component of the app. It uses createStackNavigator to create a stack of screens for the app. It includes two screens: PostList and PostDetails.

PostList.tsx: A component that displays a list of posts. It fetches the list of posts from a remote API using Axios and stores them in the state. The state also includes an array of favorite post IDs. The component renders each post using the PostItem component and allows the user to mark a post as a favorite, delete it or remove non-favorite posts.

PostItem.tsx: A component that renders a single post item. It receives the post data as props and displays the title, user ID, and a "favorite" icon that changes depending on whether the post is marked as a favorite. It also includes a "delete" icon that allows the user to delete the post.

PostDetails.tsx: A component that displays the details of a single post. It receives the post data as props and fetches the list of comments for that post from a remote API using Axios. The component renders the post title, body, and the list of comments.
Installation
------------

    $ clone this repo
    $ npm install
    $ react-native run-android
    $ react-native run-ios


External components
------------

* [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
* [react-native-orientation](https://github.com/yamill/react-native-orientation)
* [react-native-side-menu](https://github.com/react-native-community/react-native-side-menu)
* [react-native-swiper](https://github.com/leecade/react-native-swiper)
* [react-native-tab-view](https://github.com/mariodev12/react-native-tab-view/)
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
* [react-native-video-controls](https://github.com/mariodev12/react-native-video-controls/)
* [react-navigation](https://github.com/react-community/react-navigation)
