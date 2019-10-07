/**
 * @overview data to configure the components of a course
 * @author Minh Nguyen <minh.nguyen@smail.inf.h-brs.de>
 * @copyright 2019
 * @license The MIT License (MIT)
 */
ccm.files[ 'dataset.js' ] = {
  'course_name': 'FDD SS2019',

  // unique ID for course, to be prepended to 'collection_id' below when accessing database
  "course_id": "fd_ss2019",

  "store_url": "https://digiklausur.ddns.net",

  "home_menu": {
    "key": "home_menu",
    "sections": [
      {
        'title': 'Lecture 2019-06-27', 'id': 'lecture-06-27',

        "entries": [
          {
            "title": "Questions and Answers",
            "component_name": "question_answer",
            // unique ID of collection containing data for the entry
            "collection_id": "fd_ss2019_20190627",
            "entry_type": "qa"
          }
        ]
      }
    ]
  },

  "help_menu": {
    "key": "help_menu",
    "html": "../../components/digiklausur_course/resources/help.js"
  }
};
