/**
 * @overview configurations of ccm component for ranking answers to a question
 * @author Minh Nguyen <minh.nguyen@smail.inf.h-brs.de> 2019
 * @license The MIT License (MIT)
 */
ccm.files[ 'configs.js' ] = {
    "digiklausur": {
        "key": "localhost",
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
        "key": "localhost",
        "data": {
            "store": [ 'ccm.store', '../resources/question_answers_data.js' ]
        }
    }
};
