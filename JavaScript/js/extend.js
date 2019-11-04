class GrandFather{
  constructor(params){
    this.arms = 2;
    this.iqLevel = 'genious';
    this.eyes = 'brown';
    this.nation = 'russian';
    this.secondName = 'Иванов';
    this.livePlace = 'Россия';
  }
  sleep(){
    console.log('Спит 8 часов в сутки')
  }
  eat(){
    console.log('Ест на 2000руб в день')
  }
}
class Father extends GrandFather{
  constructor(params){
      super(params);
      this.tall = true;
      this.language = 'russian';
      this.livePlace = 'Germany';
  }
  drive(){
    console.log('Умеет водить подводную лодку')
  }
}
class Son extends Father{
  constructor(params){
    super(params);
    this.age = 2;
    this.weight = 3;
  }
}
let Egor = new Son;
