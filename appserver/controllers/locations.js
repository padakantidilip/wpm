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
    const polls = [
      {
        id: '1',
        question: 'What is your favorite color?',
        options: ['Red', 'Blue', 'Green']
      },
      {
        id: '2',
        question: 'Which programming language do you prefer?',
        options: ['JavaScript', 'Python', 'Java']
      }
    ];
  
    res.render('polls-surveys', { title: 'Polls-surveys', polls: polls });
  };
  

module.exports.Tutorial_videos = (req, res) => {
    res.render('tutorial-videos', { title: 'Tutorial-Videos' });
};  