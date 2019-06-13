/**
 * @overview configurations of ccm component for getting answer rankings and calculating their combined scores
 * @author Minh Nguyen <minh.nguyen@smail.inf.h-brs.de> 2019
 * @license The MIT License (MIT)
 */
ccm.files[ 'configs.js' ] = {
  "digiklausur": {
      "key": "digiklausur",
      "data": {
          "store": [ "ccm.store", {
              "name": "question_answers_sample",
              "url": "https://digiklausur.ddns.net", "method": "POST"
          } ]
      }
  },

  "localhost": {
      "key": "localhost",
      "data": {
          "store": [ "ccm.store", {
              "name": "question_answers_sample",
              "url": "http://localhost:3000", "method": "POST"
          } ]
      }
  },

  "local": {
    "key": "local",
    "data": {
        "store": [ 'ccm.store', '../resources/question_answers_data.js' ]
    }
  }
};
