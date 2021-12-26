import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-questionnaire',
  templateUrl: './list-questionnaire.component.html',
  styleUrls: ['./list-questionnaire.component.css']
})
export class ListQuestionnaireComponent implements OnInit {

  questionnaireList: any;
  // searchedKeyword: string;
  constructor() { }

  postData=
  {
    "code": 200,
    "status": "SUCCESS",
    "message": "Fetched Successfully",
    "data": {
        "questionnaire_list": {
            "total": 32,
            "questionnaire": [
                {
                    "questionnaire_uuid": "163706171361939451bcfb5320940234",
                    "title": "test 10",
                    "description": null,
                    "created_date": "2021-11-16 11:21:53",
                    "updated_date": "2021-12-05 17:51:10"
                },
                {
                    "questionnaire_uuid": "16370617086193944cb537b039422990",
                    "title": "test 9",
                    "description": null,
                    "created_date": "2021-11-16 11:21:48",
                    "updated_date": "2021-11-16 11:21:48"
                },
                {
                    "questionnaire_uuid": "163706170261939446b6b97149013451",
                    "title": "test 8",
                    "description": null,
                    "created_date": "2021-11-16 11:21:42",
                    "updated_date": "2021-11-16 11:21:42"
                },
                {
                    "questionnaire_uuid": "16370616986193944276023951604264",
                    "title": "test 7",
                    "description": null,
                    "created_date": "2021-11-16 11:21:38",
                    "updated_date": "2021-11-16 11:21:38"
                },
                {
                    "questionnaire_uuid": "16370616936193943da7eed168801790",
                    "title": "test 6",
                    "description": null,
                    "created_date": "2021-11-16 11:21:33",
                    "updated_date": "2021-11-16 11:21:33"
                },
                {
                    "questionnaire_uuid": "16370616886193943838a9a253689169",
                    "title": "test 5",
                    "description": null,
                    "created_date": "2021-11-16 11:21:28",
                    "updated_date": "2021-11-16 11:21:28"
                },
                {
                    "questionnaire_uuid": "1637061684619394342af21074286572",
                    "title": "test 4",
                    "description": null,
                    "created_date": "2021-11-16 11:21:24",
                    "updated_date": "2021-11-16 11:21:24"
                },
                {
                    "questionnaire_uuid": "16370616796193942fd2416797148635",
                    "title": "test 3",
                    "description": null,
                    "created_date": "2021-11-16 11:21:19",
                    "updated_date": "2021-11-16 11:21:19"
                },
                {
                    "questionnaire_uuid": "16370616746193942a923f4477561060",
                    "title": "test 2",
                    "description": null,
                    "created_date": "2021-11-16 11:21:14",
                    "updated_date": "2021-11-16 11:21:14"
                },
                {
                    "questionnaire_uuid": "163706166861939424df710808020868",
                    "title": "test",
                    "description": null,
                    "created_date": "2021-11-16 11:21:08",
                    "updated_date": "2021-11-16 11:21:08"
                },
                {
                    "questionnaire_uuid": "16370616606193941c73203153850844",
                    "title": "jhjhjh",
                    "description": null,
                    "created_date": "2021-11-16 11:21:00",
                    "updated_date": "2021-11-16 11:21:00"
                },
                {
                    "questionnaire_uuid": "16309083386135afb2ed8ad262101966",
                    "title": "Question_a",
                    "description": null,
                    "created_date": "2021-09-06 06:05:38",
                    "updated_date": "2021-09-06 06:06:38"
                },
                {
                    "questionnaire_uuid": "162668841660f54ba07a8d3032390170",
                    "title": "mmmmmmmmmmmmmmmm",
                    "description": null,
                    "created_date": "2021-07-19 09:53:36",
                    "updated_date": "2021-07-19 09:53:36"
                },
                {
                    "questionnaire_uuid": "162668829560f54b277783b473817227",
                    "title": "hjjjj",
                    "description": null,
                    "created_date": "2021-07-19 09:51:35",
                    "updated_date": "2021-07-19 09:51:35"
                },
                {
                    "questionnaire_uuid": "162668827760f54b15f30c0154949998",
                    "title": "hhhii",
                    "description": null,
                    "created_date": "2021-07-19 09:51:17",
                    "updated_date": "2021-07-19 09:51:17"
                },
                {
                    "questionnaire_uuid": "162666195660f4e444c6e41445992357",
                    "title": "n",
                    "description": null,
                    "created_date": "2021-07-19 02:32:36",
                    "updated_date": "2021-07-19 02:34:04"
                },
                {
                    "questionnaire_uuid": "162666187860f4e3f643b63274558660",
                    "title": "hhh",
                    "description": null,
                    "created_date": "2021-07-19 02:31:18",
                    "updated_date": "2021-07-19 02:32:16"
                },
                {
                    "questionnaire_uuid": "162640983560f10b6babf76242670308",
                    "title": "hshsh",
                    "description": null,
                    "created_date": "2021-07-16 04:30:35",
                    "updated_date": "2021-07-16 04:31:23"
                },
                {
                    "questionnaire_uuid": "162640952960f10a3952dff645476532",
                    "title": "jj7",
                    "description": null,
                    "created_date": "2021-07-16 04:25:29",
                    "updated_date": "2021-07-16 04:25:29"
                },
                {
                    "questionnaire_uuid": "162640935660f1098cdc9db117772262",
                    "title": "jjjk",
                    "description": null,
                    "created_date": "2021-07-16 04:22:36",
                    "updated_date": "2021-07-16 04:23:02"
                }
            ]
        }
    }
  };
  searchedKeyword="";
  ngOnInit(){
  
    this.questionnaireList= this.postData.data.questionnaire_list.questionnaire;
     

    console.log(this.questionnaireList);

  }

}
