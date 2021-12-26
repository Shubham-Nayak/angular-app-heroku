import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, FormGroupDirective } from '@angular/forms';

import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


declare var $: any;

@Component({
  selector: 'app-add-questionnaire',
  templateUrl: './add-questionnaire.component.html',
  styleUrls: ['./add-questionnaire.component.css']
})
export class AddQuestionnaireComponent implements OnInit {
  submitted = false;
  questionnaireId = '';

  // question code start
  question_id = '';
  questionType: Number = 0;
  addquestionForm: FormGroup;
  atleastOneChecked: Number = 1;
  items: FormArray;

  // question code end

  private _alert = new Subject<string>();
  msg: string;
  Errormsg: string = "";
  public msgClass: String = '';
  public disableStatus: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,

  ) { }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Walk Dog',
    'Stretch',
    'Code Stuff',
    'Drag Stuff',
    'Drop Stuff',
    'Run',
    'Walk'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  ngOnInit() {
    this.addquestionForm = this.formBuilder.group({
      questionnaire_name: ['', [Validators.required, Validators.maxLength(500)]],
      set_of_questions: this.formBuilder.array([
        this.buildQestions()
      ]),
    });

    console.log(this.addquestionForm)
    this._alert.subscribe((message) => this.msg = message);
    this._alert.pipe(
      debounceTime(5000)
    ).subscribe(() => this.msg = null);


  }

  buildQestions(): FormGroup {
    return this.formBuilder.group({
      question_name: ['', [Validators.required]],
      question_type: ['0'],
      subjective_answer: [],
      atleastOneChecked: [0, Validators.required],
      options: this.formBuilder.array([this.buildOptions(), this.buildOptions()])
    });
  }
  buildOptions(): FormGroup {
    return this.formBuilder.group({
      answer: ['', Validators.required],
      answer_status: 0
    });
  }
  changeValue(event, item, i) {

    const checkArray: FormArray = this.addquestionForm.get('set_of_questions') as FormArray;
    if (event.target.checked) {
      event.target.value = 1;
      item.patchValue({ answer_status: true });
      // checkArray.controls[i].patchValue({atleastOneChecked:checkArray.controls[i].get('atleastOneChecked').value+1});
      const atleastOne = checkArray.controls[i].get('atleastOneChecked').value;
      checkArray.controls[i].patchValue({ atleastOneChecked: checkArray.controls[i].get('atleastOneChecked').value + 1 });

      const element = document.getElementById('option' + i);
      console.log(element, "elemen");
      element.style.border = '';
      this.Errormsg = " ";
      const elementError = document.getElementById('options' + i).innerHTML = '';



    } else {
      event.target.value = 0;
      checkArray.controls[i].patchValue({ atleastOneChecked: checkArray.controls[i].get('atleastOneChecked').value - 1 });
      const atleastOne = checkArray.controls[i].get('atleastOneChecked').value;
      if (atleastOne < 1) {
        const element = document.getElementById('option' + i);
        console.log(element, "elemen");
        element.style.border = '1px solid #ff0000d1';

        this.Errormsg = "Please choose correct awnser";

        if (document.getElementById('options' + i).innerHTML == '') {
          const elementError = document.getElementById('options' + i).append(this.Errormsg);
        }

      }
    }
  }
  changeRadioValue(event, item, i, j) {

    const checkArray: FormArray = this.addquestionForm.get('set_of_questions') as FormArray;
    if (event.target.checked) {
      event.target.value = 1;
      item.patchValue({ answer_status: 1 });
      // checkArray.controls[i].patchValue({atleastOneChecked:checkArray.controls[i].get('atleastOneChecked').value+1});
      const atleastOne = checkArray.controls[i].get('atleastOneChecked').value;
      if (atleastOne < 1) {
        checkArray.controls[i].patchValue({ atleastOneChecked: checkArray.controls[i].get('atleastOneChecked').value + 1 });

        const element = document.getElementById('option' + i);
        console.log(element, "elemen");
        element.style.border = '';
        this.Errormsg = " ";
        const elementError = document.getElementById('options' + i).innerHTML = '';

      }
      event.target.checked = true;
      const options = checkArray.controls[i].get('options') as FormArray;
      const length = options.length;
      for (let fee in options.controls) {
        options.controls[fee].patchValue({ answer_status: 0 });

        // if(options.controls[fee].get('answer').value!=item.get('answer').value)
        // {
        //   options.controls[fee].patchValue({answer_status:0});
        //   event.target.checked = true;
        //     // checkArray.controls[i].patchValue({atleastOneChecked:checkArray.controls[i].get('atleastOneChecked').value-1});

        // }
      }

      // ============================================jquery=========================================================//

      let classname = '.checkthis' + i;
      let radioid = '#radioid' + i + '-' + j;

      $(classname).prop('checked', false);
      $(classname).val(0);

      $(radioid).prop('checked', true);
      $(radioid).val(1);
      options.controls[j].patchValue({ answer_status: 1 })

      // ============================================jquery==========================================================//
    } else {
      event.target.value = 0;
      item.patchValue({ answer_status: 0 });

    }

  }




  get f() { return this.addquestionForm.controls; }
  get s() { return this.addquestionForm.get('set_of_questions'); }


  data = {
    "questionnaire_name": "Revamp Questionnaire", "set_of_questions": [
      {
        "question_name": "Question One Revamp", "question_type": "0", "subjective_answer": null,
        "options": [
          { "answer": "2", "answer_status": 0 },
          { "answer": "1", "answer_status": true },
          { "answer": "6", "answer_status": 0 },
          { "answer": "3", "answer_status": 0 }

        ]
      },
      {
        "question_name": "Question Two Revamp", "question_type": "0", "subjective_answer": null,
        "options": [
          { "answer": "1", "answer_status": true },
          { "answer": "5", "answer_status": 0 },
          { "answer": "6", "answer_status": 0 },
          { "answer": "3", "answer_status": 0 },
          { "answer": "6", "answer_status": true },
          { "answer": "3", "answer_status": 0 }
        ]
      },
    ]
  }



  onAdd(i) {
    // (this.addquestionForm.get('set_of_questions') as FormArray).push(this.buildQestions()); //it will push data in last of array
    (this.addquestionForm.get('set_of_questions') as FormArray).insert(i + 1, this.buildQestions()); //it will push data next to array index
    console.log(this.addquestionForm)

    // previous validation check
    const checkArray: FormArray = this.addquestionForm.get('set_of_questions') as FormArray;

    const atleastOne = checkArray.controls[i].get('atleastOneChecked').value;
    if (atleastOne < 1) {
      const element = document.getElementById('option' + i);
      console.log(element, "elemen");
      element.style.border = '1px solid #ff0000d1';
      this.Errormsg = "Please choose correct awnser";

      //  const elementError = document.getElementById('options'+i).append(this.Errormsg);
      if (document.getElementById('options' + i).innerHTML == '') {

        const elementError = document.getElementById('options' + i).append(this.Errormsg);
      }

    }



  }
  removeMember(i: number) {
    (this.addquestionForm.get('set_of_questions') as FormArray).removeAt(i);
    console.log(this.addquestionForm)

  }

  addOption(addquestionForm: FormArray) {
    const options = this.formBuilder.group({
      answer: ['', Validators.required],
      answer_status: 0
    });
    addquestionForm.push(this.buildOptions())
  }
  removeOptions(addquestionForm: FormArray, i: number) {
    addquestionForm.removeAt(i);
  }
  onDuplicate(item, i) {
    (this.addquestionForm.get('set_of_questions') as FormArray).insert(i + 1, this.buildQestions());

    const checkArray: FormArray = this.addquestionForm.get('set_of_questions') as FormArray;
    const SubjectiveAnswerControl = checkArray.controls[i + 1].get('subjective_answer');//for subjective validation ..it will unset objective validation off

    const options = checkArray.controls[i + 1].get('options') as FormArray;
    const length = checkArray.controls[i].get('options') as FormArray; //this will check if previous question total option


    if (length.length > 2) { //this condition check if previous question have more then 2 option
      let acutal_length = length.controls.length - 2; //deduct 2 option from total because two option added automatically

      for (let i = 0; i < acutal_length; i++) {
        this.addOption(options)
      }
    }


    if (item.controls.question_type.value == "1") {

      // validation for sub start
      SubjectiveAnswerControl.setValidators(null);
      for (let fee in options.controls) {
        options.controls[fee].get('answer').setValidators(null);
        options.controls[fee].get('answer').updateValueAndValidity();
      }
      // validation for sub end
      checkArray.controls[i + 1].patchValue({
        question_name: item.controls.question_name.value,
        question_type: item.controls.question_type.value,
        subjective_answer: item.controls.subjective_answer.value,
        atleastOneChecked: item.controls.atleastOneChecked.value,

      });
    }
    else if (item.controls.question_type.value == "2") {
      checkArray.controls[i + 1].patchValue({
        question_name: item.controls.question_name.value,
        question_type: item.controls.question_type.value,
        atleastOneChecked: item.controls.atleastOneChecked.value,
        options: item.controls.options.value,


      });

    }
    else if (item.controls.question_type.value == "0") {
      checkArray.controls[i + 1].patchValue({
        question_name: item.controls.question_name.value,
        question_type: item.controls.question_type.value,
        atleastOneChecked: item.controls.atleastOneChecked.value,
        options: item.controls.options.value,
      });

    }


    // previous validation check
    const atleastOne = checkArray.controls[i].get('atleastOneChecked').value;

    if (atleastOne < 1) {
      const element = document.getElementById('option' + i);
      console.log(element, "elemen");
      element.style.border = '1px solid #ff0000d1';
      this.Errormsg = "Please choose correct awnser";
      // const elementError = document.getElementById('options'+i).append(this.Errormsg);
      if (document.getElementById('options' + i).innerHTML == '') {
        const elementError = document.getElementById('options' + i).append(this.Errormsg);
      }

    }

  }

  get formQuestions(): FormArray {
    return <FormArray>this.addquestionForm.get('set_of_questions');
  }

  onOptionsSelected(event, item) {

    const value = event.target.value;
    const SubjectiveAnswerControl = item.get('subjective_answer')
    const x: FormArray = item.get('options') as FormArray;

    if (value == '1') {

      this.questionType = 1;

      console.log("ONEE");
      item.patchValue({
        question_type: value,
      });

      item.patchValue({
        atleastOneChecked: 1
      })



      SubjectiveAnswerControl.setValidators(null);

      for (let fee in x.controls) {

        console.log(x.controls[fee]);

        x.controls[fee].get('answer').setValidators(null);
        x.controls[fee].get('answer').updateValueAndValidity();
        //  ---------------------reste value----------------//
        // x.controls[fee].patchValue({answer_status:0})
      }

    }

    if (value == '2') {

      console.log("TWO");
      console.log(value);


      this.questionType = 2;
      item.patchValue({
        question_type: value,
      });

      item.patchValue({
        atleastOneChecked: 0
      })


      for (let fee in x.controls) {
        x.controls[fee].get('answer').setValidators([Validators.required]);
        x.controls[fee].get('answer').updateValueAndValidity();
        //  ---------------------reste value----------------//
        x.controls[fee].patchValue({ answer_status: 0 })
      }

    }

    if (value == '0') {

      console.log("THREE");

      this.questionType = 0;
      item.patchValue({
        question_type: value,
      });

      item.patchValue({
        atleastOneChecked: 0
      })


      for (let fee in x.controls) {
        x.controls[fee].get('answer').setValidators([Validators.required]);
        x.controls[fee].get('answer').updateValueAndValidity();
        //  ---------------------reste value----------------//
        x.controls[fee].patchValue({ answer_status: 0 })
      }

    }
    console.log(item);
  }

  changeQuestionTitleOnKeyUp(item, $event) {
    item.patchValue({
      question_name: $event.target.value,
    });

  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data,

      moveItemInArray(this.addquestionForm.get('set_of_questions').value,
        event.previousIndex,
        event.currentIndex);
      moveItemInArray(this.addquestionForm.get('set_of_questions')['controls'],
        event.previousIndex,
        event.currentIndex);

    } else {
      // transferArrayItem(event.previousContainer.data,
      transferArrayItem(this.addquestionForm.get('set_of_questions').value,

        event.container.data,
        event.previousIndex, event.currentIndex);
      transferArrayItem(this.addquestionForm.get('set_of_questions')['controls'],

        event.container.data,
        event.previousIndex, event.currentIndex);
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onSubmit(value, formDirective: FormGroupDirective) {

    // validation atlistcheck strt
    const len = this.addquestionForm.get('set_of_questions') as FormArray;
    console.log(len, 'len')

    let i = 0;
    len.value.forEach(element => {
        console.log(element,'ele')
        console.log(i,'i')

        if(element.atleastOneChecked<=0){
          const elements = document.getElementById('option'+i);
          console.log(elements,"elemen");
          elements.style.border = '1px solid #ff0000d1';

          this.Errormsg="Please choose correct awnser";
          // const elementError = document.getElementById('options'+i).append(this.Errormsg);
          if(document.getElementById('options'+i).innerHTML==''){
            const elementError = document.getElementById('options'+i).append(this.Errormsg);
          } 



        }
        i++;
    });

    // validation atlistcheck end


    this.submitted = true;

    //stop here if form is invalid
    if (this.addquestionForm.invalid) {
      return;
    }
    
    this.disableStatus = true;
    //  this.djangoService.addQuestionnaire(this.addquestionForm.value).subscribe((res: any) => {
    //    this.disableStatus = false;
    //    console.log(res,'result')
    //    console.log(res.code,'result code')

    //    if (res.code == 200) {
    //      this.msgClass = 'success';
    //      formDirective.resetForm();
    //      this.submitted = false;
    //      this.addquestionForm.reset();
    //      this.addquestionForm.markAsPristine();
    //      this.addquestionForm.markAsUntouched();

    //      this.router.navigate(['/elearning/questionnaires']);
    //    } else {
    //      this.msgClass = 'danger';
    //     //  this.toasterService.error(res.message, true);
    //    }
    //    this._alert.next(res.message);
    //  });
  }

  opencardoption(e) {
    console.log(e)
    var $this = $(e);
    if ($this.hasClass('fa-times')) {
      $this.parents('.card-option').animate({
        'width': '30px',
      });
      $(e).removeClass("fa-times").fadeIn('slow');
      $(e).addClass("fa-wrench").fadeIn('slow');
    } else {
      $this.parents('.card-option').animate({
        'width': '180px',
      });
      $(e).addClass("fa-times").fadeIn('slow');
      $(e).removeClass("fa-wrench").fadeIn('slow');
    }
  }
  minimizecard(e) {
    var $this = $(e);
    var port = $($this.parents('.card'));
    var card = $(port).children('.card-block').slideToggle();
    $(e).toggleClass("fa-minus").fadeIn('slow');
    $(e).toggleClass("fa-plus").fadeIn('slow');
  }
  fullcard(e) {
    var $this = $(e);
    var port = $($this.parents('.card'));
    port.toggleClass("full-card");
    $(e).toggleClass("fa-window-restore");
  }

  reloadcard(event, i) {
    var $this = $(event);
    $this.parents('.card').addClass("card-load");
    $this.parents('.card').append('<div class="card-loader"><i class="fa fa-circle-o-notch rotate-refresh"></div>');
    setTimeout(function () {
      $this.parents('.card').children(".card-loader").remove();
      $this.parents('.card').removeClass("card-load");
    }, 3000);

    // ==============================================//
    const checkArray: FormArray = this.addquestionForm.get('set_of_questions') as FormArray;
    checkArray.controls[i].patchValue({ atleastOneChecked: 0, question_name: '', subjective_answer: '' });
    const x = checkArray.controls[i].get('options') as FormArray;

    for (let fee in x.controls) {
      x.controls[fee].get('answer').setValidators([Validators.required]);
      x.controls[fee].get('answer').updateValueAndValidity();
      //  ---------------------reste value----------------//
      x.controls[fee].patchValue({ answer_status: 0 })
      x.controls[fee].patchValue({ answer: '' })

    }


  }

}
