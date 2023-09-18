const data = {
    professionalName: 'Shanda Aurich',
    nameLink: {
        firstName: 'Shanda',
        url: 'https://www.shanda.dev',
    },
    firstName: 'Shanda',
    primaryDescription: ' has 4 kids',
    base64Image: '',
    linkedInLink: 'https://www.linkedin.com',
    githubLink: 'https://github.com',
    
}

exports.getData = (req, res, next) => {
 
    res.json(data);
  };