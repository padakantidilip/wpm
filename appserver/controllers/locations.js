module.exports.Discussion_forms = (req, res) => {
    res.render('discussion-forums', { title: 'Discussion Forums' });
};
// module.exports.Events = (req, res) => {
//     res.render('events', { title: 'events' });
// };
module.exports.Events = (req, res) => {
  const events = [
    {
      name: 'Tech Conference 2024',
      date: '2024-11-01',
      location: 'City Hall',
      description: 'A conference to discuss the latest in technology and innovation.'
    },
    {
      name: 'Community Meetup',
      date: '2024-11-15',
      location: 'Library Hall',
      description: 'A meetup for local community members to discuss ongoing projects.'
    },
    {
      name: 'Holiday Party',
      date: '2024-12-20',
      location: 'Central Park',
      description: 'An outdoor holiday celebration with food, games, and music.'
    }
  ];

  // Ensure events array is passed to the template
  res.render('events', { title: 'Events', events: events });
};
// module.exports.Polls_surveys = (req, res) => {
//     res.render('polls-surveys', { title: 'Polls-surveys' });
// };
module.exports.Polls_surveys = (req, res) => {
  const pollCategories = [
      {
          name: 'Favorite Hobbies',
          description: 'Let us know your favorite hobbies!',
          polls: [
              {
                  id: '1',
                  question: 'Which of these hobbies do you enjoy the most?',
                  description: 'Choose one from the options below.',
                  options: ['Reading', 'Traveling', 'Gardening', 'Cooking']
              },
              {
                  id: '2',
                  question: 'How many hours a week do you spend on your hobbies?',
                  description: 'We’d love to know how much time you dedicate to your interests.',
                  options: ['Less than 1 hour', '1-3 hours', '3-5 hours', 'More than 5 hours']
              }
          ]
      },
      {
          name: 'Tech Preferences',
          description: 'Tell us about your tech preferences!',
          polls: [
              {
                  id: '3',
                  question: 'Which programming language do you prefer?',
                  description: 'We’d love to know your favorite coding language.',
                  options: ['JavaScript', 'Python', 'Java', 'C#']
              },
              {
                  id: '4',
                  question: 'What type of device do you use the most?',
                  description: 'Choose the device you rely on daily.',
                  options: ['Desktop', 'Laptop', 'Tablet', 'Smartphone']
              }
          ]
      },
      {
          name: 'Food Preferences',
          description: 'Share your food preferences with us!',
          polls: [
              {
                  id: '5',
                  question: 'What type of cuisine do you enjoy the most?',
                  description: 'Choose your favorite cuisine from the options below.',
                  options: ['Italian', 'Chinese', 'Mexican', 'Indian']
              },
              {
                  id: '6',
                  question: 'Do you prefer sweet or savory snacks?',
                  description: 'Let us know your snack preferences!',
                  options: ['Sweet', 'Savory', 'Both', 'Neither']
              }
          ]
      }
  ];

  res.render('polls-surveys', { title: 'Polls & Surveys', pollCategories });
};

  

module.exports.Tutorial_videos = (req, res) => {
    res.render('tutorial-videos', { title: 'Tutorial-Videos' });
};  