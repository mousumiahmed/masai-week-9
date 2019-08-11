const axios = require('axios');

axios.get('https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/student_marks.json')
    .then(response => console.log(response))
    .catch(err => console.log(err));