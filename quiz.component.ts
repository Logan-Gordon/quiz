import { Component, OnInit } from '@angular/core';
import {Quiz} from '../model.quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizInfo:Quiz[];
  quizAnswers:string[] = new Array(10);
  correctAnswers:string[] = new Array(10);
  isEnabled:boolean = false;
  answered:number = 0;
  right:number = 0;
  total:number = 0;
  percent:number = 0;

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.loadQuizDetails().subscribe(data=>this.quizInfo=data);
  }

  increment(): void{
    this.total = this.total + 1;
  }

  recordAnswer(index:number, value:string, correct:string): void{
    this.quizAnswers[index] = value;
    this.correctAnswers[index] = correct;
  }

  isUndef(value):boolean{
    let undefined = void(0);
    return (value === undefined);
  }

  submitQuiz(): void{

    for(var i = 0;i<this.quizAnswers.length;i++) { 
      if(this.correctAnswers[i] === this.quizAnswers[i] && !this.isUndef(this.correctAnswers[i])){
        this.right = this.right + 1;
      }
   }
 
   this.percent = this.right * 10;

   alert("You scored a " + this.percent + "%");

    this.isEnabled = true;
    this.percent = 0;
    this.right = 0;

  }



}
