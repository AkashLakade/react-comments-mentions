# react-comments-mentions
Node v - 16
## Install
Install the latest version!
```bash
npm i react-comments-mentions
```

Based off the below package BUT adds gives the ability to add a timestamp to each comment!



`react-comments-mentions` is a simple but multi-functional react comment section component that helps you create comments section similar to youtube or instagram for your React App.
`react-comments-mentions` is very useful for react beginners who want a comment section in their project but want to skip it's commplexity. This library will give a fully functional comment section with the following features:
  - User can reply to comments
  - User can edit his/her comments
  - User can delete his/her comments
  - User can mention other users in comment

## Usage

### Hooks Implementation (Typescript)
Following is a basic example to start testing the library in your project. This library works on a user basis
system and here are a few important points to remember:

- currentUser[required]. For no user details pass the prop as currentUser={null}
- A new user can be redirected using the login/signup links in the logIn[required] prop.
- The currentData[optional] prop returns an object of current data available after any action such as comment submission, reply, edit or delete.
- The onSubmitAction returns an object of data with the required information to make an API call after a comment is submitted.
For more details check out the props list in our detailed documentation.
This is how the basic default component would look.
- mentionSuggestions returns user mentions 

## License

MIT © [AkashLakade](https://github.com/AkashLakade)
